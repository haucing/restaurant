# Restaurant

## Development with Docker

```sh
docker compose up -d
docker compose exec app npm ci
docker compose exec app npm run dev:vite
```

Open http://localhost:3004/restaurant/. Run `npm run watch` in another
container terminal when editing Tailwind classes or styles.

## GitHub Pages

In the repository's **Settings → Pages → Build and deployment**, set
**Source** to **GitHub Actions**. Push to `main` (or run the Deploy to GitHub
Pages workflow manually) to build and deploy the site.

`npm run build` compiles Tailwind and bundles the application, including
Swiper's JavaScript and CSS, into `dist/`. The workflow publishes that folder.
Do not publish the repository root: its npm imports require Vite processing.
The Vite base path is `/restaurant/`, matching this repository's Pages URL.

For manual branch-based deployment, run `npm run deploy` and configure Pages
to publish the root of the `gh-pages` branch instead.
