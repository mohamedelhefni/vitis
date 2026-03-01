---
title: "AR-Trie Package"
date: 2022-01-01
draft: false
description: "A Go library for Trie data structure supporting Arabic characters with advanced search and storage functions"
thumbnail: ""
repoURL: "https://github.com/mohamedelhefni/ar-trie"
demoURL: "https://triesearch.herokuapp.com/"
type: "open-source"
technologies: ["Go", "Data Structures", "Algorithms"]
status: "completed"
featured: true
weight: 10
tags: ["Go", "libraries", "algorithms"]
---

## Overview

A Go library implementing a Trie data structure supporting rune type, enabling work with Arabic and English letters.

## Available Functions

- **InitTrie** - initialize the tree
- **Insert** - insert a single key
- **Find** - check if key exists
- **Put** - associate key with value
- **Get** - retrieve key value
- **Delete** - remove a key
- **Search** - search using prefix

## Performance (Benchmark)

```
BenchmarkInsert-12    	2260291	      523.4 ns/op	      2 B/op	      0 allocs/op
BenchmarkFind-12      	152889574	        7.304 ns/op	      0 B/op	      0 allocs/op
BenchmarkPut-12       	2127642	      561.2 ns/op	     10 B/op	      1 allocs/op
BenchmarkGet-12       	169333138	        7.154 ns/op	      0 B/op	      0 allocs/op
BenchmarkKeys-12      	117835408	        9.887 ns/op	      0 B/op	      0 allocs/op
BenchmarkSearch-12    	28626381	      102.2 ns/op	     16 B/op	      1 allocs/op
```

## Usage Examples

```go
tr := InitTrie()

tr.Insert("mohamed")
tr.Insert("محمد")
tr.Insert("محمود")
tr.Keys("مح") // [محمد محمود]
```

## Quick Start

```bash
go get github.com/mohamedelhefni/ar-trie
```

```go
package main

import (
    "fmt"
    trie "github.com/mohamedelhefni/ar-trie"
)

func main() {
    tr := trie.InitTrie()
    tr.Insert("mohamed")
    tr.Insert("mahmoud")
    
    fmt.Println(tr.Find("mohamed")) // true
    fmt.Println(tr.Search("mo"))     // [mohamed mahmoud]
}
```
