type NetlifyImageLoaderParams = {
  src: string;
  width: number;
  quality?: number;
};

// Next.js `output: "export"` produces a purely static build with no server,
// so the built-in `/_next/image` optimization endpoint can't run. This loader
// redirects resizing/format-conversion to Netlify's Image CDN
// (https://docs.netlify.com/image-cdn/overview/) instead, which works for
// both same-site assets (e.g. "/instantscripts/foo.png") and the external
// helsinkiagency.com URLs used for client logos — the latter must be
// allow-listed under `[images].remote_images` in netlify.toml.
export default function netlifyImageLoader({
  src,
  width,
  quality,
}: NetlifyImageLoaderParams) {
  const params = new URLSearchParams({
    url: src,
    w: width.toString(),
    q: (quality ?? 75).toString(),
  });
  return `/.netlify/images?${params.toString()}`;
}
