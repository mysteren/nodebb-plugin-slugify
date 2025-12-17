# NodeBB Slugify

[![npm version](https://badge.fury.io/js/nodebb-plugin-slugify.svg?nocache=1)](https://badge.fury.io/js/nodebb-plugin-slugify)
[![Downloads](https://img.shields.io/npm/dm/nodebb-plugin-slugify.svg)](https://www.npmjs.com/package/nodebb-plugin-slugify)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**[English](README.md) | [Русский](README.ru.md)**

## About

Automatic transliteration of URL slugs from Cyrillic (Russian, Bulgarian, Serbian, etc.) to Latin characters. Perfect for multilingual NodeBB forums that serve Russian-speaking users.

**What it does:**
- 🔤 Converts Cyrillic topic titles to readable Latin slugs
- 👥 Transliterates user profile URLs
- 📂 Auto-slugifies category URLs
- 🔄 Updates existing slugs when content is edited
- ✅ Supports both NodeBB 3.x and 4.x

## Installation

### Via npm

```bash
npm install nodebb-plugin-slugify
```

### Via NodeBB Admin Panel

1. Go to **Administration** → **Plugins**
2. Search for `nodebb-plugin-slugify`
3. Click **Install** and activate
4. Restart NodeBB

## Supported Entities

The plugin automatically transliterates:

- 📝 **Topics** - Converts Russian topic titles to Latin-based slugs
- 👤 **Users** - Transliterates user profile URLs
- 📂 **Categories** - Auto-generates clean category URLs

## Features

✨ **Transliteration only** - Removes diacritics and converts Cyrillic to Latin
✨ **On-the-fly** - Automatically applies when creating or editing content
✨ **No configuration** - Works out of the box
✨ **Lightweight** - Uses efficient `slugify` library

## Supported Scripts

- ✅ Cyrillic (Russian, Bulgarian, Serbian, Ukrainian)
- ✅ Cyrillic Extended
- ⚠️ Vietnamese support via `slugify` library

## How It Works

**Before:** Topic title "Как установить плагин" → Slug: "как-установить-плагин"
**After:** Topic title "Как установить плагин" → Slug: "kak-ustanovit-plugin"

This makes URLs more search-engine friendly and readable for international audiences.

## Compatibility

- **NodeBB:** 3.2.0+, 4.x
- **Node.js:** 18+
- **License:** MIT

## Development

```bash
npm install
npm run lint
```

## Support

- 📧 Email: mysterenct@gmail.com
- 🐛 [Issues](https://github.com/mysteren/nodebb-plugin-slugify/issues)
- 💬 [NodeBB Community](https://community.nodebb.org)

## License

MIT License - see [LICENSE](./LICENSE)

---

**Created by [TimofeyC](https://github.com/mysteren)**
