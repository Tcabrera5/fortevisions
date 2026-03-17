# ForteVisions multi-page site

This package is a drop-in static website for **ForteVisions / Marissa Forte**.
It is designed for GitHub Pages and uses plain HTML, CSS, and JavaScript.

## Included pages

- `/` home page
- `/events/`
- `/portraits/`
- `/aviation/`
- `/travel/`
- `/about/`
- `/hire/`

## Important note before copying into your repo

If you copy these files into the root of your repository, the new `index.html` will replace the old one.
If you want to keep the old file, rename it first.

## Folder structure

```text
index.html
about/index.html
aviation/index.html
events/index.html
hire/index.html
portraits/index.html
travel/index.html
assets/css/styles.css
assets/js/script.js
assets/images/*
```

## What to edit first

### 1) Replace the inquiry email
The hire page currently uses a placeholder email address:

- `hello@fortevisions.com`

Search for that string in:

- `hire/index.html`
- `assets/js/script.js`

### 2) Confirm pricing
The hire page includes the pricing and notes from the flyer image that was shared:

- hourly from $250
- half-day about $880
- day rate about $1,600
- minimum $440
- typical event range $440 to $2,500
- editing included
- Canon R7 and T7
- images back in under a week
- checks, Venmo, Zelle

Update any of that if needed.

### 3) Replace placeholder cards
The **events** and **portraits** pages intentionally include stylish placeholder blocks so the layout still looks complete even before more images are added.
Replace those with real images as Marissa builds out her galleries.

## Ideas for expansion later

Once the portfolio grows, the strongest next move would be adding sub-pages like:

- `/aviation/airports/`
- `/aviation/wing-views/`
- `/travel/cityscapes/`
- `/travel/landscapes/`
- `/events/corporate/`
- `/events/nonprofit/`

That keeps the Ryan Patterson-inspired category structure while making it specific to ForteVisions.

## Hosting

This site works as a static site on GitHub Pages.
No build tools are required.
