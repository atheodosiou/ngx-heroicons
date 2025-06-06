[![CI – Build & Test](https://github.com/atheodosiou/ngx-heroicons/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/atheodosiou/ngx-heroicons/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/ngx-heroicons.svg)](https://www.npmjs.com/package/ngx-heroicons)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)]()

![ngx-heroicons image](../../ngx-heroicons.png)

# 🚀 ngx-heroicons

A modern, type-safe, and accessible Angular icon library powered by [Heroicons](https://heroicons.com).

Supports all official variants:

- `outline` (24x24)
- `solid` (24x24)
- `mini` (20x20)
- `micro` (16x16)

Built with Angular 16+ standalone components, signals, and inline SVG rendering — no fetches, no extra asset configuration.

---

## 📦 Installation

```bash
npm install ngx-heroicons
```

---

## 🚀 Quick Usage

### 1. Import the component

```ts
import { NgxHeroiconsComponent } from "ngx-heroicons";

@Component({
  standalone: true,
  imports: [NgxHeroiconsComponent],
  template: ` <ngx-heroicons [icon]="'academic-cap'" class="w-6 h-6 text-blue-500" /> `,
})
export class YourComponent {}
```

### 2. Choose a style

```html
<ngx-heroicons [icon]="'check-circle'" [style]="'solid'" class="w-6 h-6 text-green-500" />
<ngx-heroicons [icon]="'check-circle'" [style]="'mini'" class="w-5 h-5 text-green-500" />
<ngx-heroicons [icon]="'check-circle'" [style]="'micro'" class="w-4 h-4 text-green-500" />
```

### 3. Optional accessibility label

```html
<ngx-heroicons [icon]="'x-circle'" class="w-5 h-5 text-red-500" aria-label="Close icon" />
```

---

## 🧠 Inputs

| Input   | Type                                        | Default     | Description                                          |
| ------- | ------------------------------------------- | ----------- | ---------------------------------------------------- |
| `icon`  | `IconName`                                  | —           | Icon file name (e.g. `'academic-cap'`, `'x-circle'`) |
| `style` | `'outline' \| 'solid' \| 'mini' \| 'micro'` | `'outline'` | Style/size variant                                   |

---

> 💡 You can pass Tailwind or custom styles using the native `class` attribute:
>
> ```html
> <ngx-heroicons [icon]="'x-circle'" class="w-6 h-6 text-red-500" />
> ```

---

## ✅ Features

- ✅ Angular 16+ standalone component using signals
- ✅ Fully inline SVGs (no fetch, no asset config)
- ✅ Supports all official Heroicons styles (outline, solid, mini, micro)
- ✅ Forwarded class binding (full Tailwind support)
- ✅ Type-safe `IconName` input with auto-complete

---

## 🔧 Development

### Regenerate the icon map (after adding or updating icons)

```bash
npm run generate:icons
```

This will:

- Inline all SVGs into `icons.ts`
- Auto-generate a union type `IconName` with all available icon names

---

## 📚 Example Icons

```html
<!-- Outline (default) -->
<ngx-heroicons [icon]="'academic-cap'" class="w-6 h-6" />

<!-- Solid -->
<ngx-heroicons [icon]="'check-circle'" [style]="'solid'" class="w-6 h-6" />

<!-- Mini (20x20) -->
<ngx-heroicons [icon]="'check-circle'" [style]="'mini'" class="w-5 h-5" />

<!-- Micro (16x16) -->
<ngx-heroicons [icon]="'check-circle'" [style]="'micro'" class="w-4 h-4" />

<!-- Accessible -->
<ngx-heroicons [icon]="'x-circle'" class="w-6 h-6 text-red-500" aria-label="Close" />
```

---

## 📦 License

MIT  
Icon designs © [Tailwind Labs](https://github.com/tailwindlabs/heroicons)  
Angular wrapper by [Anastasios Theodosiou](https://anastasios.theodosiou.me)

```

```
