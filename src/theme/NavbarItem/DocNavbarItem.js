import React from 'react';
import {useActiveDocContext} from '@docusaurus/plugin-content-docs/client';
import {useLayoutDoc} from '@docusaurus/theme-common/internal';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
export default function DocNavbarItem({
  docId,
  label: staticLabel,
  docsPluginId,
  disableActive,
  ...props
}) {
  const {activeDoc} = useActiveDocContext(docsPluginId);
  const doc = useLayoutDoc(docId, docsPluginId);
  // Draft items are not displayed in the navbar.
  if (doc === null) {
    return null;
  }
  return (
    <DefaultNavbarItem
      exact
      {...props}
      isActive={() =>
        disableActive ? false : (activeDoc?.path === doc.path)
      }
      label={staticLabel ?? doc.id}
      to={doc.path}
    />
  );
}
