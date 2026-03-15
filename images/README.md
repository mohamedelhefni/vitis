# Screenshots Placeholder

This directory should contain the following screenshot files for the theme:

## Required Files

1. **screenshot.png** - Main homepage screenshot (1920x1080)
2. **screenshot-graph.png** - Knowledge graph view (1920x1080)
3. **screenshot-post.png** - Single post view (1920x1080)
4. **screenshot-series.png** - Series listing view (1920x1080)
5. **tn.png** - Thumbnail for theme galleries (900x600) - Optional

## Quick Screenshot Script

The Hugo server is running at http://localhost:1313/

To quickly generate all screenshots, run:

```bash
# Install screenshot tool (one-time)
npm install -g puppeteer

# Or use the provided script (if created)
node scripts/take-screenshots.js
```

## Manual Screenshots

See SCREENSHOTS.md in the root directory for detailed instructions on taking screenshots manually.
