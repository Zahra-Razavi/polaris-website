import { allPages } from '../data/sitemap';

/** Static paths for every page still marked as a stub. */
export function stubPaths() {
  return allPages
    .filter((page) => page.stub)
    .map((page) => ({
      params: { slug: page.path.replace(/^\/|\/$/g, '') },
      props: { page },
    }));
}
