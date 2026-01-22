---
title: "Incident: Hotel Shopping Outage"
timestamp: 2026-01-17 05:45:00 -0500
type: incident
env: prod
severity: "SEV-1"
status: active
incident_status: "Resolved"
summary: "Hotel Shopping was unavailable due to a critical infrastructure failure."
---

## Summary
Between 05:45 and 07:25 ET the Hotel product was unavailable for shopping or booking due to a failure in infrastructure critical to the service.

## Customer impact
- Customers were unable to shop or book hotel rooms.

## Timeline (ET)
- **05:45** - Alerts triggered when Hotel Shopping pages became unresponsive.
- **07:16** - Applied mitigation, Hotel services began to recover.
- **07:25** - Hotel services fully recovered.
- **07:55** - Root cause identified and corrected.

## Root cause
A piece of critical infrastructure Hotel is dependent on failed due to an overly aggressive security policy.

## Mitigation and resolution
- Mitigation: Manual resolution of security flag.
- Resolution: Correcting configuration of the service to no longer raise this flag.

## Prevention
- This dependency is in the process of being removed or moved to a managed product for all services to ensure future stability.
