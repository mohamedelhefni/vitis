# Screenshot Guide for Vitis Theme

The Hugo server is currently running at **http://localhost:1313/**

## Required Screenshots

Please take the following screenshots and save them in the `images/` directory:

### 1. Homepage Screenshot
- **File**: `images/screenshot.png`
- **URL**: http://localhost:1313/
- **Recommended size**: 1920x1080 or 1280x720
- **What to capture**: Full homepage view showing the welcome section, recent posts, and navigation

### 2. Knowledge Graph Screenshot
- **File**: `images/screenshot-graph.png`
- **URL**: http://localhost:1313/graph
- **Recommended size**: 1920x1080 or 1280x720
- **What to capture**: The interactive knowledge graph visualization with connected nodes

### 3. Post View Screenshot
- **File**: `images/screenshot-post.png`
- **URL**: http://localhost:1313/posts/ (choose any post)
- **Recommended size**: 1920x1080 or 1280x720
- **What to capture**: A single post showing the table of contents, content, and backlinks/related posts

### 4. Series Progress Screenshot
- **File**: `images/screenshot-series.png`
- **URL**: http://localhost:1313/series/ (choose any series)
- **Recommended size**: 1920x1080 or 1280x720
- **What to capture**: Series listing page showing the series progress indicator

## How to Take Screenshots

### Method 1: Browser Screenshot (Recommended)
1. Open your browser and navigate to http://localhost:1313/
2. Open Developer Tools (F12 or right-click → Inspect)
3. Toggle device toolbar (Ctrl+Shift+M or Cmd+Shift+M on Mac)
4. Set viewport to 1920x1080
5. Use browser's screenshot feature:
   - Chrome: Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows) → "Capture screenshot"
   - Firefox: Right-click → "Take a Screenshot"

### Method 2: macOS Screenshot Tool
1. Open Safari or Chrome to http://localhost:1313/
2. Press Cmd+Shift+4 then Space
3. Click on the browser window to capture

### Method 3: Windows Snipping Tool
1. Open Edge or Chrome to http://localhost:1313/
2. Press Win+Shift+S
3. Select area to capture

### Method 4: Command Line (macOS with Chrome)
```bash
# Install if needed
brew install --cask google-chrome

# Take screenshot (requires Chrome DevTools Protocol)
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless \
  --screenshot=images/screenshot.png \
  --window-size=1920,1080 \
  http://localhost:1313/
```

## After Taking Screenshots

Once you have all screenshots saved in the `images/` directory, the README.md will automatically display them.

The main screenshot (`images/screenshot.png`) is also used by Hugo theme showcases and galleries.

## Optional: Create a Thumbnail

For theme showcases, you may also want to create a thumbnail:
- **File**: `images/tn.png`
- **Size**: 900x600
- **Content**: Similar to homepage screenshot but optimized for smaller display
