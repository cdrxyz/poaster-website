/**
 * Prefix a static asset path with the Next.js basePath.
 *
 * Use this for <img src={...}> and inline style background-image URLs
 * so they resolve correctly in PR previews deployed to a subdirectory.
 *
 * In production (no basePath), this is a no-op.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function assetUrl(path) {
  return `${basePath}${path}`
}
