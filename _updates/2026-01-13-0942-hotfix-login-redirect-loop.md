---
title: "Hotfix: Resolved login redirect loop"
timestamp: 2026-01-13 09:42:00 -0500
type: hotfix
env: prod
summary: "Fixed an authentication edge case that could cause repeated redirects after sign-in for a subset of users."
services:
  - auth
  - web-app
---

## Impact
A subset of users experienced repeated redirects immediately after sign-in. In most cases, users could still access the application after a refresh, but the experience was disruptive.

## What changed
- Updated session handling to ensure the post-auth redirect target is validated and normalized.
- Added a guard to prevent redirect chains from repeating when a stale callback value is present.

## Verification
- Confirmed sign-in flows for standard login and SSO.
- Monitored authentication error rates and redirect counts for 60 minutes post-deploy.
- Validated that affected redirect patterns dropped to baseline.

## Follow-ups
- Add an automated regression test covering stale callback parameters.
- Improve client-side messaging when the session refresh path is triggered.
