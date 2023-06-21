import React from 'react';
import type { JSONOutput } from 'typedoc';
import { getKindIcon, getKindIconColor } from '../utils/icons';
import {isReflectionDeprecated} from "./Comment";

export interface IconProps {
	reflection: JSONOutput.DeclarationReflection;
	deprecated?: boolean
}

export function Icon({ reflection, deprecated }: IconProps) {
	if (deprecated || isReflectionDeprecated(reflection)) {
		return <i className={`codicon codicon-trash`} style={{ color: 'var(--ifm-color-danger)' }} />;
	}

	const icon = getKindIcon(reflection.kind, reflection.name);

	if (!icon) {
		return null;
	}

	const color = getKindIconColor(reflection.kind);

	// eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
	return <i className={`codicon codicon-${icon}`} style={{ color }} />;
}
