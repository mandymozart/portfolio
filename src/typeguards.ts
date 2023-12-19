import { LinkField } from '@prismicio/client';

export function isNotEmptyLinkField(
  link: LinkField
): link is LinkField & { url: string } {
  return link && 'url' in link;
}
