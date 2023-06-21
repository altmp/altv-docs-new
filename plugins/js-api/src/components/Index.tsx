import React from 'react';
import type { JSONOutput } from 'typedoc';
import Link from '@docusaurus/Link';
import { useReflection } from '../hooks/useReflection';
import { AnchorLink } from './AnchorLink';
import { Icon } from './Icon';
import {isReflectionDeprecated} from "./Comment";
import {useReflectionMap} from "../hooks/useReflectionMap";

export interface IndexChildProps {
	id: number;
}

function IndexChild({ id }: IndexChildProps) {
	const reflections = useReflectionMap();
	const reflection = useReflection(id)!;
	let deprecated = false;

	if (reflection.signatures) {
		deprecated = reflection.signatures.every(isReflectionDeprecated);
	} else if (reflection.getSignature || reflection.setSignature) {
		deprecated = (!reflection.getSignature || isReflectionDeprecated(reflection.getSignature))
			&& (!reflection.setSignature || isReflectionDeprecated(reflection.setSignature));
	} else if ('target' in reflection && (reflection as JSONOutput.ReferenceReflection).target) {
		deprecated = isReflectionDeprecated(reflections[reflection.target as number] ?? reflection)
	} else {
		deprecated = isReflectionDeprecated(reflection);
	}

	return (
		<li>
			<Link className={`tsd-kind-icon ${deprecated ? 'tsd-deprecated' : ''}`} to={reflection.permalink ?? `#${reflection.name}`}>
				<Icon reflection={reflection} deprecated={deprecated} />
				{reflection.name ?? <em>{reflection.kindString}</em>}
			</Link>
		</li>
	);
}

export interface IndexProps {
	reflection: JSONOutput.DeclarationReflection;
}

export function Index({ reflection }: IndexProps) {
	if (reflection.categories && reflection.categories.length > 0) {
		return (
			<section className="tsd-panel-group tsd-index-group">
				<h2>
					Index <AnchorLink id="Index" />
				</h2>

				<section className="tsd-panel tsd-index-panel">
					<div className="tsd-index-content">
						{reflection.categories.map((category) => (
							<section key={category.title} className="tsd-index-section">
								<h3 className="tsd-panel-header">
									{category.title === 'CATEGORY' ? 'Other' : category.title}
								</h3>

								<div className="tsd-panel-content">
									<ul className="tsd-index-list">
										{category.children?.map((child) => (
											<IndexChild key={child} id={child} />
										))}
									</ul>
								</div>
							</section>
						))}
					</div>
				</section>
			</section>
		);
	}

	if (reflection.groups && reflection.groups.length > 0) {
		return (
			<section className="tsd-panel-group tsd-index-group">
				<h2>
					Index <AnchorLink id="Index" />
				</h2>

				<section className="tsd-panel tsd-index-panel">
					<div className="tsd-index-content">
						{reflection.groups.map((group) => (
							<section key={group.title} className="tsd-index-section">
								{group.categories && group.categories.length > 0 ? (
									group.categories.map((category) => (
										<React.Fragment key={category.title}>
											<h3 className="tsd-panel-header">
												{category.title === 'CATEGORY' ? group.title : category.title}
											</h3>

											<div className="tsd-panel-content">
												<ul className="tsd-index-list">
													{category.children?.map((child) => (
														<IndexChild key={child} id={child} />
													))}
												</ul>
											</div>
										</React.Fragment>
									))
								) : (
									<>
										<h3 className="tsd-panel-header">{group.title}</h3>

										<div className="tsd-panel-content">
											<ul className="tsd-index-list">
												{group.children?.map((child) => (
													<IndexChild key={child} id={child} />
												))}
											</ul>
										</div>
									</>
								)}
							</section>
						))}
					</div>
				</section>
			</section>
		);
	}

	return null;
}
