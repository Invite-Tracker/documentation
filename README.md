# Invite Tracker Documentation

Documentation for the Invite Tracker Discord bot, built with [VitePress](https://vitepress.dev/).

## Prerequisites

- Node.js 18+
- pnpm 10.26.1+

## Installation

```bash
pnpm install
```

## Development

Start the development server with hot-reload:

```bash
pnpm docs:dev
```

The documentation will be available at `http://localhost:5173`.

## Build

Build the documentation for production:

```bash
pnpm docs:build
```

The output will be generated in `docs/.vitepress/dist`.

## Preview

Preview the production build locally:

```bash
pnpm docs:preview
```

## Project Structure

```
documentation/
├── docs/
│   ├── .vitepress/
│   │   └── config.mts      # VitePress configuration
│   ├── assets/             # Images and static assets
│   ├── commands/           # Command documentation
│   ├── dashboard/          # Dashboard plugin documentation
│   ├── faq-directory/      # FAQ pages
│   └── *.md                # Root documentation pages
├── package.json
└── README.md
```
