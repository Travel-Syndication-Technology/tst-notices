---
title: "Incident: Booking Search and Webhook Outage" 
timestamp: 2026-01-25 01:30:00 -0500
type: incident
env: prod
severity: "SEV-1"
status: active
incident_status: "Resolved"
summary: "Agents and support could not search for new bookings. Backoffice updates were delayed."
---

## Summary
Following scheduled maintenance the night of January 24th, an infrastructure failure occurred in our AWS environment which caused issues with various services, including the Booking Search system and the Backoffice Events system.

## Customer impact
No impact on shopping or booking, only on searching in the admin/agent console and updates sent to club backoffice systems.

## Timeline (ET)
- **01:30** - Upgrades applied to production infrastructure.
- **12:00** - Backoffice Events system restarted.
- **19:40** - Booking Search data reloaded.
- **20:55** - Backoffice Replica rebuilt.

## Root cause
Infrastructure failure in AWS DB Replicas following quarterly maintenance upgrades.

## Mitigation and resolution
- Resolution: Rebuild of the replica.

## Prevention
- Infrastructure failure cannot be avoided, but alerting has been adjusted to improve the check for out-of-sync scenarios between the primary and replicas.