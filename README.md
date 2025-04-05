# 🧰 ngx-heroicons Workspace

This is the monorepo workspace for the **[ngx-heroicons](https://www.npmjs.com/package/ngx-heroicons)** Angular library – a modern, type-safe, and zero-runtime HTTP Heroicons SVG solution for Angular with full Tailwind CSS compatibility.

---

## 📦 Library

📁 [`projects/ngx-heroicons`](./projects/ngx-heroicons/README.md)

A production-ready Angular component for rendering inline SVG Heroicons with:

- Support for `outline`, `solid`, `mini`, and `micro` variants
- Full TypeScript auto-completion (`IconName` type-safe input)
- Tailwind CSS compatibility (`class` forwarding)
- Accessibility (`aria-hidden` included)
- No runtime HTTP requests – icons are compiled in
- `ng add` schematic for easy setup

---

## 📁 Projects Structure

```
projects/
├── ngx-heroicons/         # Angular Library
└── ngx-heroicons-demo/    # Demo Angular App
```

---

## 🧪 Available Scripts

### 🔧 Development

```bash
npm run start:demo            # Run demo app (localhost:4200)
npm run generate:icons        # Generate icon map & types from SVGs
```

### 🏗 Build

```bash
npm run build:ngx-heroicons           # Build the library (Linux/macOS)
npm run build:ngx-heroicons:windows   # Build the library (Windows)
```

> Note: The library includes schematic files that need to be copied after build. These are handled differently on Windows and POSIX systems.

### 🧪 Testing

```bash
npm run test              # Run Jest tests
npm run test:watch        # Watch mode
npm run coverage          # Run tests with coverage
```

### 🚀 Releases

```bash
npm run release           # Run standard-version (manual prompt)
npm run release:patch     # Bump patch version
npm run release:minor     # Bump minor version
npm run release:major     # Bump major version
npm run release:publish   # Run release + publish to npm
```

---

## 📚 Documentation

📖 For full documentation and usage examples, see:  
👉 [`projects/ngx-heroicons/README.md`](./projects/ngx-heroicons/README.md)

---

## ✅ Status

This workspace uses **GitHub Actions** for automated build and test CI.

> More actions will be added soon for versioning, release notes, auto-publish, and icon sync.

---

MIT  
Icon designs © [Tailwind Labs](https://github.com/tailwindlabs/heroicons)  
Angular wrapper by [Anastasios Theodosiou](https://anastasios.theodosiou.me)
