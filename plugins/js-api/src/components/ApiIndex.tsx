import React, { useEffect } from 'react';
import Link from '@docusaurus/Link';
import type { GlobalVersion } from '@docusaurus/plugin-content-docs/client';
import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import { useDocsVersion } from '@docusaurus/theme-common/internal';
import type { Props as DocItemProps } from '@theme/DocItem';
import Heading from '@theme/Heading';
import type { ApiOptions, PackageReflectionGroup } from '../types';
import { removeScopes } from '../utils/links';
import { Footer } from './Footer';
import { VersionBanner } from './VersionBanner';
import {useVersions} from "@docusaurus/plugin-content-docs/lib/client";

export interface ApiIndexProps extends Pick<DocItemProps, 'route'> {
	history: {
		location: { pathname: string };
		replace: (path: string) => void;
	};
	options: ApiOptions;
	packages: PackageReflectionGroup[];
}

function addVersionToUrl(
	url: string,
	newVersion: string,
	versions: GlobalVersion[]
) {
	const currentBlock = url.match(/^\/api\/([^\/]+)\/([^\/]+)/);
	if (currentBlock) return url;
	const versionPart = versions.find(e => e.name === newVersion)?.isLast ? '' : '/' + newVersion
	return url.replace(/^\/api\/([^\/]+)/, '/api/$1' + versionPart);
}

export default function ApiIndex({ options, packages, history }: ApiIndexProps) {
	const latestVersion = useDocsVersion();
	const versions = useVersions('default');
	const { preferredVersion } = useDocsPreferredVersion('default');

	useEffect(() => {
		if (preferredVersion) {
			const url = history.location.pathname;
			const newUrl = addVersionToUrl(url, preferredVersion.name, versions);
			if (newUrl != url) history.replace(newUrl);
		}
	}, [packages, history, latestVersion, preferredVersion]);

	return (
		<div className="row">
			<div className="col apiItemCol">
				{options.banner && (
					<div className="alert alert--info margin-bottom--md" role="alert">
						{/* eslint-disable-next-line react/no-danger, react-perf/jsx-no-new-object-as-prop */}
						<div dangerouslySetInnerHTML={{ __html: options.banner }} />
					</div>
				)}

				<VersionBanner />

				<div className="apiItemContainer">
					<article>
						<div className="markdown">
							<header>
								<Heading as="h1">API</Heading>
							</header>

							<section className="tsd-panel">
								<h3 className="tsd-panel-header">Packages</h3>
								<div className="tsd-panel-content">
									<ul className="tsd-index-list">
										{packages.map((pkg) => (
											<li key={pkg.packageName} className="tsd-truncate">
												<Link
													className="tsd-kind-icon"
													to={pkg.entryPoints[0].reflection.permalink}
												>
													<span className="tsd-signature-symbol">v{pkg.packageVersion}</span>{' '}
													<span>{removeScopes(pkg.packageName, options.scopes)}</span>
												</Link>
											</li>
										))}
									</ul>
								</div>
							</section>
						</div>

						<Footer />
					</article>
				</div>
			</div>
		</div>
	);
}
