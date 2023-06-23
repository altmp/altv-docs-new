// https://github.com/TypeStrong/typedoc-default-themes/blob/master/src/default/partials/comment.hbs
import React from 'react';
import type { JSONOutput } from 'typedoc';

function removeFlagPrefix(value: string) {
	return value.replace(/^is([A-Z])/, (match, char) => String(char).toLocaleLowerCase());
}

function removeTagPrefix(value: string) {
	return value.replace(/^@/, '');
}

export interface FlagsProps {
	flags?: JSONOutput.ReflectionFlags;
	tags?: string[];
}

export function Flags({ flags, tags }: FlagsProps) {
	if (!flags && !tags) {
		return null;
	}

	return (
		<>
			{!!tags && tags
				.map(removeTagPrefix)
				.map((tag) => (
					<span key={tag} className={`tsd-flag tsd-flag-${tag}`}>
						{tag}
					</span>
				))}
			{!!flags && Object.keys(flags)
				.map(removeFlagPrefix)
				.map((flag) => (
					<span key={flag} className={`tsd-flag tsd-flag-${flag}`}>
						{flag}
					</span>
				))}
		</>
	);
}
