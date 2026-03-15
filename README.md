# Vitis

A modern Hugo theme designed as a digital garden with Obsidian-like features including wiki-links, knowledge graph visualization, backlinks, and series support.

![Vitis Theme Screenshot](https://raw.githubusercontent.com/mohamedelhefni/vitis/main/images/screenshot.png)

## Demo

[Live Demo](https://vitis.netlify.app/)

## Features

- **Wiki-Links Support**: Create connections between your content using `[[wiki-link]]` syntax
- **Interactive Knowledge Graph**: Visual representation of content relationships with D3.js
- **Backlinks**: Automatic bidirectional linking between related content
- **Series Support**: Organize content into multi-part series with progress tracking
- **Responsive Design**: Beautiful on all devices and screen sizes
- **Dark/Light Mode**: Toggle between themes with automatic preference detection
- **Table of Contents**: Auto-generated navigation for long-form content
- **Syntax Highlighting**: Code blocks with Dracula theme support
- **Search Functionality**: Fast client-side search powered by Fuse.js
- **Reading Time**: Estimated reading time for all posts
- **Tags & Taxonomies**: Organize and discover content easily
- **Social Icons**: Customizable social media links
- **SEO Optimized**: Open Graph, Twitter Cards, and schema markup
- **Performance**: Optimized for speed with minification and lazy loading
- **Privacy Focused**: GDPR compliant with configurable analytics

## Screenshots

### Homepage
![Homepage](https://raw.githubusercontent.com/mohamedelhefni/vitis/main/images/screenshot.png)

### Knowledge Graph
![Knowledge Graph](https://raw.githubusercontent.com/mohamedelhefni/vitis/main/images/screenshot-graph.png)

### Post View
![Post View](https://raw.githubusercontent.com/mohamedelhefni/vitis/main/images/screenshot-post.png)

### Series Progress
![Series Progress](https://raw.githubusercontent.com/mohamedelhefni/vitis/main/images/screenshot-series.png)

## Installation

### Method 1: Hugo Modules (Recommended)

1. Initialize your Hugo site as a module:

```bash
hugo mod init github.com/yourusername/yoursite
```

2. Add the theme to your `hugo.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/mohamedelhefni/vitis"
```

3. Get the module:

```bash
hugo mod get -u
```

### Method 2: Git Submodule

```bash
git submodule add https://github.com/mohamedelhefni/vitis.git themes/vitis
```

Then add to your `hugo.toml`:

```toml
theme = "vitis"
```

### Method 3: Clone

```bash
git clone https://github.com/mohamedelhefni/vitis.git themes/vitis
```

## Quick Start

1. Copy the example site configuration:

```bash
cp themes/vitis/exampleSite/hugo.toml hugo.toml
```

2. Update the `baseURL`, `title`, and other site parameters in `hugo.toml`

3. Create your first post:

```bash
hugo new posts/my-first-post.md
```

4. Start the Hugo server:

```bash
hugo server -D
```

5. Visit `http://localhost:1313`

## Configuration

### Basic Configuration

```toml
baseURL = "https://example.com/"
title = "My Digital Garden"
languageCode = "en"
defaultContentLanguage = "en"

[module]
  [[module.imports]]
    path = "github.com/mohamedelhefni/vitis"

# Site Parameters
[params]
  description = "My personal knowledge base and digital garden"
  author = "Your Name"
  keywords = ["blog", "digital garden", "knowledge base"]

  # Social links
  github = "https://github.com/yourusername"
  mail = "mailto:your.email@example.com"
  site = "https://yoursite.com/"

[params.social]
  twitter = "yourusername"
  github = "yourusername"
```

### Navigation Menu

```toml
[menu]
  [[menu.main]]
    identifier = "home"
    name = "Home"
    url = "/"
    weight = 10

  [[menu.main]]
    identifier = "posts"
    name = "Posts"
    url = "/posts"
    weight = 20

  [[menu.main]]
    identifier = "graph"
    name = "Graph"
    url = "/graph"
    weight = 30
```

### Analytics (Optional)

```toml
[params.analytics]
  [params.analytics.google]
    id = "G-XXXXXXXXXX"

  [params.analytics.plausible]
    domain = "yoursite.com"
```

### Comments (Optional)

```toml
[services.disqus]
  shortname = 'your-disqus-shortname'
```

## Content Creation

### Creating Posts

```bash
hugo new posts/my-post.md
```

Example front matter:

```yaml
---
title: "My First Post"
date: 2024-02-27
draft: false
description: "A brief description of the post"
tags: ["hugo", "blog", "digital-garden"]
series: ["Getting Started"]
---
```

### Creating Series

Add posts to a series by including the series name in the front matter:

```yaml
---
title: "Part 1: Introduction"
series: ["My Series Name"]
---
```

The theme will automatically:
- Group related posts
- Show series progress
- Display navigation between parts

### Using Wiki-Links

Create connections between your content using wiki-link syntax:

```markdown
This post is related to [[other-post-title]] and [[another-post]].
```

The theme will automatically:
- Convert wiki-links to proper Hugo links
- Create backlinks on linked pages
- Include these connections in the knowledge graph

### Knowledge Graph

The knowledge graph automatically visualizes:
- Connections between posts via wiki-links
- Tag relationships
- Series connections

Access it at `/graph` or add it to your menu.

## Customization

### UI Strings

Customize all text in the theme by overriding the `[params.ui]` section:

```toml
[params.ui]
  greeting = "Welcome"
  recent_posts = "Latest Articles"
  reading_time_singular = "min read"
  reading_time_plural = "mins read"
```

See `exampleSite/hugo.toml` for all available strings.

### Styling

The theme uses Tailwind CSS. To customize:

1. Copy `tailwind.config.js` from the theme root
2. Modify colors, fonts, and other design tokens
3. Rebuild CSS:

```bash
npm install
npm run build
```

### Syntax Highlighting

Change the code highlighting theme in `hugo.toml`:

```toml
[markup.highlight]
  style = "dracula"  # or monokai, github, etc.
```

## Advanced Features

### Search

Search is automatically enabled. The theme generates a JSON index of your content.

### Backlinks

Backlinks are automatically generated for pages that are referenced via wiki-links.

### Related Posts

The theme shows related content based on:
- Shared tags (weight: 100)
- Same series (weight: 80)
- Publication date (weight: 10)

Customize in `hugo.toml`:

```toml
[related]
  includeNewer = true
  threshold = 80
  toLower = true
  [[related.indices]]
    name = "tags"
    weight = 100
```

## Requirements

- Hugo Extended v0.112.0 or higher
- Git (for Hugo Modules method)
- Node.js and npm (only if customizing Tailwind CSS)

## Performance

The theme is optimized for performance:
- Minified HTML, CSS, and JavaScript
- Lazy loading for images
- Optimized font loading
- Minimal dependencies
- Fast client-side search

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

- [Documentation](https://github.com/mohamedelhefni/vitis/wiki)
- [Issue Tracker](https://github.com/mohamedelhefni/vitis/issues)
- [Discussions](https://github.com/mohamedelhefni/vitis/discussions)

## License

This theme is released under the MIT License. See [LICENSE](LICENSE) for details.

## Credits

- Developed by [Mohamed Elhefni](https://github.com/mohamedelhefni)
- Knowledge graph visualization powered by [D3.js](https://d3js.org/)
- Search powered by [Fuse.js](https://fusejs.io/)
- Icons from [Heroicons](https://heroicons.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## Acknowledgments

Inspired by:
- Obsidian's knowledge management features
- Digital garden philosophy
- Andy Matuschak's notes on note-taking
