---
title: "Hotfix: Softvoyage Booking Timeouts"
timestamp: 2026-01-22 11:00:00 -0500
type: hotfix
env: prod
summary: "Increased wait time on Softvoyage booking responses."
services:
  - prepack
status: active
status_label: "Deployed"
---

## Impact
Large numbers of Softvoyage bookings were ending up in a failed state in TST due to the booking request to Softvoyage taking so long that the connection timed out.

## What changed
- Connection Timeout increased to 180 seconds (3 minutes) to give Softvoyage more time to respond.