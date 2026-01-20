---
title: "Incident: Elevated 5xx responses on public API"
timestamp: 2026-01-11 08:15:00 -0500
type: incident
env: prod
severity: "SEV-2"
status: archived
status_label: "Resolved"
summary: "Some API requests intermittently failed due to reduced capacity in a dependent service. Service was restored after mitigation and scaling adjustments."
services:
  - public-api
  - dependencies
---

## Summary
Between 08:15 and 08:47 ET, a portion of public API requests returned 5xx errors. The issue was caused by reduced capacity in a dependency that the API relies on for request processing.

## Customer impact
- Intermittent request failures for some endpoints.
- No data loss identified.
- Retrying failed requests typically succeeded once mitigation was in place.

## Timeline (ET)
- **08:15** - Alerts triggered for elevated 5xx error rates.
- **08:20** - Incident declared; investigation began.
- **08:27** - Identified reduced capacity in a dependency.
- **08:33** - Applied mitigation: traffic shaping and scaling adjustments.
- **08:47** - Error rates returned to baseline; monitoring continued.
- **09:15** - Incident closed after sustained stability.

## Root cause
A capacity reduction in a dependent service led to increased timeouts and request failures under normal traffic load.

## Mitigation and resolution
- Increased capacity for the dependency.
- Temporarily shaped traffic to reduce burst pressure.
- Adjusted timeout and retry settings to better tolerate transient capacity dips.

## Prevention
- Add capacity health checks and automated scaling safeguards for the dependency.
- Improve alerting on early saturation indicators.
- Run a load test focused on dependency degradation scenarios.
