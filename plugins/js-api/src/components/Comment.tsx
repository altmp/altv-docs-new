// https://github.com/TypeStrong/typedoc-default-themes/blob/master/src/default/partials/comment.hbs

import React from 'react';
import type { JSONOutput } from 'typedoc';
import { Markdown } from './Markdown';

export interface CommentProps {
	comment?: JSONOutput.Comment;
	root?: boolean;
	hideTags?: string[];
}

export function hasComment(comment?: JSONOutput.Comment): boolean {
	if (!comment) {
		return false;
	}

	return Boolean(
		comment.summary?.some((x) => x.kind !== 'text' || x.text !== '') ||
			(comment.blockTags && comment.blockTags?.length > 0),
	);
}

export function isDeprecated(comment?: JSONOutput.Comment): boolean {
	if (!comment) {
		return false;
	}

	return Boolean(comment.blockTags?.some(e => e.tag == '@deprecated'))
}

export function isReflectionDeprecated(reflection?: JSONOutput.Reflection): boolean {
	return isDeprecated(reflection?.comment);
}

export function displayPartsToMarkdown(parts: JSONOutput.CommentDisplayPart[]): string {
	return parts
		.map((part) => {
			if (part.kind === 'inline-tag') {
				return `{${part.tag} ${part.text}}`;
			}

			return part.text;
		})
		.join('');
}

export function Comment({ comment, root, hideTags = [] }: CommentProps) {
	if (!comment || !hasComment(comment)) {
		return null;
	}

	const blockTags =
		comment.blockTags?.filter((tag) => {
			if (hideTags.includes(tag.tag)) {
				return false;
			}

			return tag.tag !== '@default';
		}) ?? [];

	return (
		<div className={`tsd-comment tsd-typography ${root ? 'tsd-comment-root' : ''}`}>
			{!!comment.summary && !!comment.summary.length && (
				<div className="lead">
					<Markdown content={displayPartsToMarkdown(comment.summary)} />
				</div>
			)}

			{blockTags.length > 0 && (
				<div className="tsd-comment-tags">
					{blockTags.map((tag) => {
						const deprecated = tag.tag == '@deprecated';
						const name = tag.tag.replace(/^@(\w)/, (_, v) => v.toUpperCase());
						return (
							<React.Fragment key={tag.tag}>
								<h4 style={deprecated ? {color: 'var(--ifm-color-danger)'} : {}}>
									{name}{'  '}{deprecated ? <i className={`codicon codicon-trash`}/> : ''}
								</h4>
								<Markdown content={displayPartsToMarkdown(tag.content)}/>
							</React.Fragment>
						);
					})}
				</div>
			)}
		</div>
	);
}
