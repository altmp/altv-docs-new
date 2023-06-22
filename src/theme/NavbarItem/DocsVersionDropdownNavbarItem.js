import React from 'react';
import {
  useVersions,
  useActiveDocContext,
} from '@docusaurus/plugin-content-docs/client';
import {useDocsPreferredVersion} from '@docusaurus/theme-common';
import {useDocsVersionCandidates} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import {useLocation} from '@docusaurus/router';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import routes from '@generated/routes';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useRouteContext from "@docusaurus/useRouteContext";
const getVersionMainDoc = (version) =>
  version.docs.find((doc) => doc.id === version.mainDocId);
const getApiUrlVersion = (url, versions) => {
  const match = url.match(/^\/api\/[^\/]+(?:\/(.*?))?(?:\/|$)/)
  if (!match) return;
  if (!versions.find(e => e.name === match[1])) return (versions.find(e => e.isLast) || versions[0]).name;
  return match[1];
}

const getNewApiUrl = (url, versions, newVersion) => {
  const re = /^\/api\/([^\/]+)(?:\/([^\/]+))?/;
  const match = url.match(re);
  if (!match) return;
  let replace = '/api/$1';
  if (!versions.find(e => e.name === newVersion)?.isLast) replace += '/' + newVersion;
  const slug = replace.replace('$1', match[1]);
  if (!versions.find(e => e.name === match[2])) replace += '/' + match[2];
  const newUrl = url.replace(re, replace);
  const route = routes.find(e => e.path === slug);
  if (!route) return;
  if (!route.routes.find(e => e.path === newUrl)) return slug;
  return newUrl;
}
export default function DocsVersionDropdownNavbarItem({
  mobile,
  docsPluginId,
  dropdownActiveClassDisabled,
  dropdownItemsBefore,
  dropdownItemsAfter,
  ...props
}) {
  const {search, hash, pathname} = useLocation();
  const activeDocContext = useActiveDocContext(docsPluginId);

  const versions = useVersions(docsPluginId);
  const currentUrlVersion = getApiUrlVersion(pathname, versions);

  const {savePreferredVersionName} = useDocsPreferredVersion(docsPluginId);
  const versionLinks = versions.map((version) => {
    // We try to link to the same doc, in another version
    // When not possible, fallback to the "main doc" of the version
    const versionDoc =
      activeDocContext.alternateDocVersions[version.name] ??
        getVersionMainDoc(version);
    return {
      version,
      label: version.label,
      // preserve ?search#hash suffix on version switches
      to: `${getNewApiUrl(pathname, versions, version.name) ?? versionDoc.path}${search}${hash}`,
      isActive: () => version === activeDocContext.activeVersion || version.name === currentUrlVersion,
      onClick: () => savePreferredVersionName(version.name),
    };
  });
  const items = [
    ...dropdownItemsBefore,
    ...versionLinks,
    ...dropdownItemsAfter,
  ];

  // const { preferredVersion } = useDocsPreferredVersion('default');
  const candidate = useDocsVersionCandidates(docsPluginId)[0];
  const dropdownVersion = versionLinks.find(e => e.isActive())?.version || candidate;

  // Mobile dropdown is handled a bit differently
  const dropdownLabel =
    mobile && items.length > 1
      ? translate({
          id: 'theme.navbar.mobileVersionsDropdown.label',
          message: 'Versions',
          description:
            'The label for the navbar versions dropdown on mobile view',
        })
      : dropdownVersion.label;
  const dropdownTo =
    mobile && items.length > 1
      ? undefined
      : getVersionMainDoc(dropdownVersion).path;
  // We don't want to render a version dropdown with 0 or 1 item. If we build
  // the site with a single docs version (onlyIncludeVersions: ['1.0.0']),
  // We'd rather render a button instead of a dropdown
  if (items.length <= 1) {
    return (
      <DefaultNavbarItem
        {...props}
        mobile={mobile}
        label={dropdownLabel}
        to={dropdownTo}
        isActive={dropdownActiveClassDisabled ? () => false : undefined}
      />
    );
  }
  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={dropdownLabel}
      to={dropdownTo}
      items={items}
      isActive={dropdownActiveClassDisabled ? () => false : undefined}
    />
  );
}
