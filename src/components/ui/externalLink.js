/** True for http(s) links that leave the site. mailto/tel and in-page anchors are not external. */
export function isExternal(href) {
  return /^https?:\/\//.test(href ?? '') && !href.startsWith('https://ericishekwene.org')
}

export const NEW_TAB_PROPS = { target: '_blank', rel: 'noopener noreferrer' }
