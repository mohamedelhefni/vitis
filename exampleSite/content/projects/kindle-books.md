---
title: "Kindle Books"
date: 2021-06-05
draft: false
description: "Website containing over 8000 eBooks in multiple formats"
thumbnail: "https://mohamedelhefni.000webhostapp.com/wp-content/uploads/2021/06/Screenshot-from-2021-05-18-13-29-21.png"
repoURL: "https://github.com/mohamedelhefni/kindlebooks/"
demoURL: "http://kindlebooks.netlify.app/"
type: "personal"
technologies: ["Vue.js", "Node.js", "MongoDB", "Tailwind CSS", "Google Drive API"]
status: "completed"
featured: true
weight: 15
tags: ["Vue.js", "Node.js", "web apps"]
---

## Overview

A website that allows searching through a collection of about 8000 eBooks in various formats: mobi, epub, azw3, kfx, pdf.

![Interface](/images/kindlebooks.png)

## How it Works

1. Created a Python script that uses a Telegram session to fetch files from a channel
2. The script downloads each file and uploads it to Google Drive
3. The script was run on Google Cloud Console
4. Produces a CSV file containing book name and Telegram/Drive IDs

## Features

- Search books
- Save books to favorites
- Download books from Google Drive

## Technical Stack

- **Frontend**: Vue.js + Tailwind CSS (Netlify)
- **Backend**: Node.js + Express (Heroku)
- **Database**: MongoDB Atlas
- **Storage**: Google Drive API

## Performance

The application easily handles 100k requests, while the previous version with Python/Flask/MySQL failed after only 500 requests.

![Performance Test](/images/kindle-benchmark.png)
