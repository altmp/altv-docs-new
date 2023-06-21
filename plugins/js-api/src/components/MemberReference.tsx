// https://github.com/TypeStrong/typedoc-default-themes/blob/master/src/default/partials/member.reference.hbs

import React from 'react';
import type { JSONOutput } from 'typedoc';
import Link from '@docusaurus/Link';
import { useReflection } from '../hooks/useReflection';
import {isReflectionDeprecated} from "./Comment";
import {Icon} from "./Icon";

export interface MemberReferenceProps {
	reflection: JSONOutput.ReferenceReflection;
}

export function MemberReference({ reflection }: MemberReferenceProps) {
	const target = useReflection(reflection.target);
	let content: React.ReactNode = null;

	if (!target) {
		const deprecatedTag = `${isReflectionDeprecated(reflection) ? 'tsd-deprecated' : ''}`;
		content = (
			<>
				Re-exports <Icon reflection={reflection} /> <span className={`tsd-signature-type ${deprecatedTag}`}>{reflection.name}</span>
			</>
		);
	} else if (reflection.name === target.name) {
		const deprecatedTag = `${isReflectionDeprecated(target) ? 'tsd-deprecated' : ''}`;
		content = (
			<>
				Re-exports{' '}<Icon reflection={target} />{' '}
				<Link className={`tsd-signature-type ${deprecatedTag}`} to={target.permalink}>
					{target.name}
				</Link>
			</>
		);
	} else {
		const deprecatedTag = `${isReflectionDeprecated(target) ? 'tsd-deprecated' : ''}`;
		content = (
			<>
				Renames and re-exports{' '}<Icon reflection={target} />{' '}
				<Link className={`tsd-signature-type ${deprecatedTag}`} to={target.permalink}>
					{target.name}
				</Link>
			</>
		);
	}

	return <div className="tsd-panel-content">{content}</div>;
}
