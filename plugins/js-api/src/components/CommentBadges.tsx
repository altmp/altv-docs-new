import React from 'react';
import { JSONOutput } from 'typedoc';

export function getModifierClassName(tag: string) {
	switch (tag) {
		case '@beta':
		case '@experimental':
			return 'warning';
		case '@alpha':
			return 'danger';
		default:
			return 'info';
	}
}

export type CommentWithModifiers = Pick<JSONOutput.Comment, 'blockTags' | 'summary'> &
	Required<Pick<JSONOutput.Comment, 'modifierTags'>>;

export function isCommentWithModifiers(
	comment?: JSONOutput.Comment,
): comment is CommentWithModifiers {
	return !!comment && !!comment.modifierTags && comment.modifierTags.length > 0;
}

function removeTagPrefix(value: string) {
	return value.replace(/^@/, '');
}

interface CommentBadgesProps {
	comment: CommentWithModifiers;
}

export function CommentBadges({ comment }: CommentBadgesProps) {
	const { modifierTags } = comment;
	return (
		<div className="badge-group">
			{modifierTags.map(removeTagPrefix).map((tag) => (
				<span key={tag} className={`tsd-flag tsd-flag-${tag}`}>
					{tag}
				</span>
			))}
		</div>
	);
}
