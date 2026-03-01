---
title: "GPX Parser"
date: 2022-08-20
draft: false
description: "JavaScript library for parsing GPX files and extracting data"
thumbnail: ""
repoURL: "https://github.com/mohamedelhefni/gpx-parser"
type: "open-source"
technologies: ["JavaScript", "npm", "GeoJSON"]
status: "completed"
featured: false
weight: 35
tags: ["JavaScript", "libraries", "maps"]
---

## Overview

A library for parsing GPX files and extracting data with the following functions:

- Extract metadata and waypoints
- Extract tracks and routes with points and total distance
- Convert GPX to GeoJSON

## Installation

```bash
npm i gpxtojs
```

## Usage

```js
const gpxtojs = require("gpxtojs")
const gpx = new gpxtojs.GPXParser();
gpx.parse(gpxString)
gpx.getMetadata()
gpx.getWaypoints()
gpx.getTracks()
gpx.getRoutes()
```

### Convert to GeoJSON

```js
gpx.toGeoJson()
```
