# OMEGA ARIS-660B Landing Page

## Local development

```bash
npm install
npm run dev
```

## Production files

```bash
npm run build
```

Upload the contents of `dist/` to the web server. All production assets are copied into the build.

The build uses relative URLs, so the contents of `dist/` can be uploaded at a domain root, inside a subfolder, or served through GitHub Pages without path changes.

## GitHub Pages

Pushing `main` runs `.github/workflows/pages.yml`, builds the site, and deploys the `dist/` folder to GitHub Pages.

## Updating the YouTube videos

Open `src/App.jsx` and edit the `videos` array at the top of the file, then run `npm run build` again.

Example:

```js
{ title: 'Product overview', image: asset('assets/video-thumbnails/product-overview.jpg'), youtubeId: '0Zgb-dHvVNw' }
```

The overview plays when the media section enters view. Videos pause and mute after the viewer scrolls away.

## Editing the future purchase button

The shared `ComingSoon` component in `src/App.jsx` controls every “Coming soon” button. Replace it with the future Shopify product link or purchase component when the product launches.
