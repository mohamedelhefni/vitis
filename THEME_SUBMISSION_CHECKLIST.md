# Vitis Theme - Hugo Themes Submission Checklist

## ✅ Already Complete

### Required Files
- [x] `theme.toml` - Theme metadata with proper tags, features, author info
- [x] `hugo.toml` - Module configuration with Hugo version requirements (min 0.112.0, extended = true)
- [x] `LICENSE` - MIT License
- [x] `package.json` - NPM package configuration

### Theme Structure
- [x] All layouts converted from RTL to LTR
- [x] All Arabic text replaced with English/parameterized UI strings
- [x] Font changed from IBM Plex Sans Arabic to Inter
- [x] All directional CSS updated for LTR
- [x] Complete UI string system in `hugo.toml` for customization

### Fixed Issues
- [x] Fixed `len $series` error when no series exist
- [x] Fixed deprecated `privacy.twitter` → `privacy.x` warning
- [x] All templates parameterized (index.html, single.html, list.html, graph/*.html, series/*.html)

## 🔄 In Progress / Needs Completion

### Required for Submission

#### 1. README.md ⚠️ CRITICAL
**Status**: Needs creation
**Requirements**:
- Feature list and theme description
- Installation instructions (3 methods: git submodule, Hugo module, direct download)
- Configuration guide with examples
- Screenshots with **absolute URLs** (not relative paths)
- Usage examples for wiki-links, series, projects, graph
- Credits to original Zahi theme
- Demo site link

**Template Structure**:
```markdown
# Vitis Hugo Theme

[Brief description]

## Features
- Wiki-links with [[syntax]]
- Interactive knowledge graph
- Series support
- [etc...]

## Demo
[Link to demo site]

## Installation

### Method 1: Hugo Module
...

### Method 2: Git Submodule
...

### Method 3: Direct Download
...

## Configuration
...

## Credits
Based on [Zahi](https://github.com/mohamedelhefni/zahi) by Mohamed Elhefni
```

#### 2. Images ⚠️ CRITICAL
**Status**: Need to create
**Requirements**:
- `images/screenshot.png` - Minimum 1500×1000 px, 3:2 aspect ratio
- `images/tn.png` - Minimum 900×600 px, 3:2 aspect ratio
- Must show theme layout WITHOUT browser/device mockups
- Must be clean, professional screenshots

**How to Create**:
1. Run `hugo server` in exampleSite
2. Open in browser
3. Take full-page screenshots of:
   - Homepage (for screenshot.png)
   - Another key page (for tn.png if different)
4. Crop to 3:2 aspect ratio
5. Resize to required dimensions

#### 3. Example Content 🔄
**Status**: Old Arabic content present, needs replacement
**Action Required**:
- Remove all Arabic `.md` files from `exampleSite/content/`
- Create new English example posts demonstrating:
  - Wiki-links functionality
  - Series (3-part example)
  - Code highlighting
  - Markdown features
  - Projects
  - Tags usage

**Files to Create**:
```
exampleSite/content/
├── _index.md (homepage content)
├── posts/
│   ├── welcome-to-vitis.md
│   ├── wiki-links-demo.md
│   ├── markdown-guide.md
│   ├── code-highlighting.md
│   ├── series/
│   │   ├── part-1.md
│   │   ├── part-2.md
│   │   └── part-3.md
└── projects/
    ├── project-1.md
    ├── project-2.md
    └── project-3.md
```

#### 4. Git Repository Setup 🔜
**Status**: Repository created, needs initial commit
**Action Required**:
```bash
cd /Users/hefni/projects/vitis
git add .
git commit -m "Initial commit: Vitis theme v1.0.0

- LTR/English variant of Zahi theme
- Inter font instead of IBM Plex Sans Arabic
- Full UI string parameterization
- Knowledge graph, wiki-links, series support
- Dark mode, search, backlinks"

git push origin main
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

### Optional But Recommended

#### 5. CHANGELOG.md
Document version history and changes from Zahi

#### 6. Demo Site Deployment
Deploy exampleSite to Netlify/Vercel for live demo

## Hugo Themes Submission Process

### After Completing Above:

1. **Fork** https://github.com/gohugoio/hugoThemesSiteBuilder
2. **Edit** `themes.txt` - Add: `github.com/mohamedelhefni/vitis`
3. **Commit** with message: "Add theme vitis"
4. **Create PR** and wait for Netlify deploy preview
5. **Verify** preview builds successfully

### Common Mistakes to Avoid

❌ Using relative image paths in README (use absolute GitHub URLs)
❌ Missing or incorrect aspect ratio for images
❌ No release tags (themes need at least v1.0.0 tagged)
❌ Incomplete theme.toml metadata
❌ Missing Hugo version requirements in hugo.toml
❌ README with marketing/paid theme content

### Build will use:
- Latest **release tag** (v1.0.0, v1.0.1, etc.) - preferred
- Or latest commit if no releases exist

## Current Status Summary

**Readiness**: 75% complete

**Blockers for submission**:
1. ❌ README.md not created
2. ❌ No screenshot images
3. ❌ Example content still in Arabic
4. ❌ No git commits/tags

**Estimated time to complete**: 2-3 hours
- README: 30-45 min
- Screenshots: 15-20 min
- Example content: 45-60 min
- Git setup: 15-20 min
- Final testing: 30 min

## Next Steps

1. Create English example content first (to take screenshots)
2. Take and create required images
3. Write comprehensive README.md
4. Test complete build
5. Git commit and tag v1.0.0
6. Submit to Hugo themes repository
