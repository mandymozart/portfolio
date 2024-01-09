export function isNotEmptyLinkField(link: any): link is any & { url: string } {
  return link && 'url' in link;
}
