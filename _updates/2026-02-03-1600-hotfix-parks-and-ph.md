---
title: "Hotfix: Parks and Pleasant Holidays Fixes"
timestamp: 2026-02-03 16:00:00 -0500
type: hotfix
env: prod
summary: "Pricing issue in Parks and a flight data issue for Pleasant Holidays"
services:
  - parks
  - prepack
status: active
status_label: "Deployed"
---

## What changed
- Parks: Select the lowest price when we receive multiple prices possibly due to promotions.
- Prepack (Pleasant Holidays) - Flight operator defaults to airline code until Pleasant Holidays fixes their post-book data.