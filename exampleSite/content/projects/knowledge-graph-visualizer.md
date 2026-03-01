---
title: "Knowledge Graph Visualizer"
date: 2024-01-20
description: "An interactive D3.js-powered knowledge graph for visualizing interconnected notes and documents in digital gardens."
tags: ["javascript", "d3js", "data-visualization", "open-source"]
projectType: "personal"
projectStatus: "maintained"
github: "https://github.com/yourusername/knowledge-graph-viz"
demo: "https://kg-viz-demo.netlify.app"
featured: true
year: "2024"
role: "Creator & Maintainer"
duration: "3 months"
---

## Overview

**Knowledge Graph Visualizer** is the core visualization engine powering the interactive knowledge graphs in digital garden tools. Built with D3.js, it renders beautiful, interactive networks of interconnected content.

## The Problem

Traditional note-taking apps show content linearly, making it hard to:
- Discover unexpected connections
- Understand topical clusters
- Navigate large content collections
- Visualize knowledge structure

## The Solution

An interactive graph visualization that:

✅ **Renders thousands of nodes** efficiently with force-directed layout  
✅ **Filters dynamically** - Pages only, tags only, or connected content  
✅ **Provides intuitive controls** - Zoom, pan, drag, and click navigation  
✅ **Highlights relationships** - Show immediate connections on hover  
✅ **Responsive design** - Works beautifully on mobile and desktop  

## Key Features

### 1. Force-Directed Layout

Uses D3's force simulation for organic positioning:

```javascript
const simulation = d3.forceSimulation(nodes)
  .force('link', d3.forceLink(links).distance(100))
  .force('charge', d3.forceManyBody().strength(-300))
  .force('center', d3.forceCenter(width / 2, height / 2))
  .force('collision', d3.forceCollide().radius(20));
```

Nodes naturally cluster around related content.

### 2. Smart Filtering

Filter graph by content type:
- **All** - Complete knowledge network
- **Pages Only** - Just your articles/notes
- **Tags Only** - Topic relationships
- **Connected** - Only linked content

### 3. Visual Hierarchy

Uses color and size to convey meaning:
- **Current page** - Large node with glow effect
- **Regular pages** - Medium green nodes
- **Tags** - Orange nodes for topics
- **Link strength** - Line thickness indicates connection weight

### 4. Interactive Exploration

- **Drag nodes** to reorganize layout
- **Zoom in/out** with mouse wheel
- **Click nodes** for instant navigation
- **Hover** to highlight connections
- **Search** to find specific nodes

### 5. Performance Optimizations

Handles large graphs efficiently:
- Canvas rendering for 1000+ nodes
- Virtualization for off-screen elements
- Debounced zoom and pan
- Lazy loading for complex networks

## Technical Architecture

### Core Technologies

- **D3.js v7** - Data visualization and force simulation
- **JavaScript ES6+** - Modern syntax and features
- **SVG/Canvas** - Rendering engines (SVG <500 nodes, Canvas for larger)
- **JSON** - Graph data format

### Data Structure

```json
{
  "nodes": [
    {
      "id": "/posts/article-1/",
      "title": "Article Title",
      "type": "page"
    }
  ],
  "links": [
    {
      "source": "/posts/article-1/",
      "target": "/posts/article-2/",
      "type": "direct"
    }
  ]
}
```

### Integration

Easy to integrate with any static site generator:

```javascript
// 1. Include the library
<script src="knowledge-graph.js"></script>

// 2. Create container
<div id="graph"></div>

// 3. Initialize
KnowledgeGraph.init({
  container: '#graph',
  dataUrl: '/graph-data.json',
  currentPage: window.location.pathname
});
```

## Real-World Usage

### Digital Gardens

Powers knowledge graphs in:
- [[Vitis Hugo Theme]] - 500+ user sites
- Obsidian Publish alternatives
- Zettelkasten implementations

### Documentation Sites

Used for:
- Technical documentation networks
- API reference connections
- Tutorial series visualization

### Personal Knowledge Management

Integrated into:
- Note-taking workflows
- Research databases
- Learning management systems

## Development Journey

### Phase 1: MVP (Month 1)

- ✅ Basic force-directed graph
- ✅ Node and link rendering
- ✅ Click navigation
- ✅ Simple styling

### Phase 2: Interactions (Month 2)

- ✅ Zoom and pan controls
- ✅ Drag functionality
- ✅ Hover highlighting
- ✅ Filtering system
- ✅ Search integration

### Phase 3: Performance (Month 3)

- ✅ Canvas rendering mode
- ✅ Virtualization
- ✅ Optimized force simulation
- ✅ Mobile responsive design

### Future Roadmap

- 🔄 3D graph visualization option
- 🔄 Time-based animation (show graph growth)
- 🔄 Community detection (automatic clustering)
- 🔄 Export as image functionality

## Technical Challenges

### Challenge 1: Performance with Large Graphs

**Problem**: Force simulation slows with 500+ nodes

**Solution**: 
- Switch to Canvas rendering at threshold
- Implement quadtree for collision detection
- Use Web Workers for computation

### Challenge 2: Mobile Touch Interactions

**Problem**: Zoom/pan conflicts with native scrolling

**Solution**:
- Custom touch event handlers
- Gesture detection
- Pinch-to-zoom support
- Momentum scrolling

### Challenge 3: Layout Stability

**Problem**: Graph jumps around unpredictably

**Solution**:
- Pin current page node in center
- Use intelligent initial positioning
- Adjust force strengths dynamically
- Add cooling schedule to simulation

## Code Highlights

### Efficient Link Filtering

```javascript
function filterGraphData(data, currentPath) {
  const connectedIds = new Set([currentPath]);
  
  data.links.forEach(link => {
    if (link.source === currentPath || link.target === currentPath) {
      connectedIds.add(link.source);
      connectedIds.add(link.target);
    }
  });
  
  return {
    nodes: data.nodes.filter(n => connectedIds.has(n.id)),
    links: data.links.filter(l => 
      connectedIds.has(l.source) && connectedIds.has(l.target)
    )
  };
}
```

### Smooth Transitions

```javascript
node.transition()
  .duration(300)
  .attr('r', d => d.id === currentPage ? 12 : 8)
  .style('opacity', d => isFiltered(d) ? 0.2 : 1);
```

## Impact & Metrics

- **2,500+ sites** using the visualization
- **4.8/5 stars** on GitHub (230+ stars)
- **15 contributors** from the community
- **Zero dependencies** (beyond D3.js)

## Getting Started

### Installation

```bash
npm install knowledge-graph-viz
```

### Basic Usage

```javascript
import { KnowledgeGraph } from 'knowledge-graph-viz';

const graph = new KnowledgeGraph({
  container: '#my-graph',
  width: 800,
  height: 600,
  data: {
    nodes: [...],
    links: [...]
  }
});
```

### Configuration Options

Full customization available:

```javascript
{
  nodeRadius: 8,
  currentNodeRadius: 12,
  linkDistance: 100,
  chargeStrength: -300,
  colors: {
    node: '#3d9b5c',
    tag: '#f59e0b',
    link: '#94d1a8'
  }
}
```

## Contributing

Open source and welcoming contributions:

- 🐛 Bug reports
- ✨ Feature requests  
- 📖 Documentation improvements
- 🎨 Theme contributions

## Tech Stack

| Technology | Purpose |
|------------|---------|
| D3.js | Graph visualization |
| JavaScript ES6+ | Core logic |
| SVG/Canvas | Rendering |
| Rollup | Module bundling |
| Jest | Unit testing |

## Links

- **GitHub**: [knowledge-graph-viz](https://github.com/yourusername/knowledge-graph-viz)
- **Demo**: [Live Interactive Demo](https://kg-viz-demo.netlify.app)
- **Docs**: [Full Documentation](https://kg-viz-docs.netlify.app)
- **NPM**: [npm package](https://npmjs.com/package/knowledge-graph-viz)

## Related Projects

- [[Vitis Hugo Theme]] - Uses this visualizer
- [[Graph Data Generator]] - Creates graph JSON from content
- [[Network Analysis Tools]] - Statistical graph analysis

---

*Visualizing knowledge connections to enhance understanding and discovery.*
