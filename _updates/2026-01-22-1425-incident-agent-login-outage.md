---
title: "Incident: SSO Login Outage" 
timestamp: 2026-01-22 14:25:00 -0500
type: incident
env: prod
severity: "SEV-1"
status: active
incident_status: "Resolved"
summary: "Agents were unable to login via SSO to TST."
---

## Summary
Between 14:25 and 15:05 ET Agents with clubs using SSO for login to TST were unable to login to the Agent Console.

## Customer impact
Agents could not log in to TST.

## Timeline (ET)
- **14:25** - Configuration applied updating the login system as part of testing in development login functionality. Change erroneously affected the Production environment.
- **15:05** - Configuration was reverted.

## Root cause
A configuration setting related to TST's SSO handling for users was not isolated by environment.

## Mitigation and resolution
- Resolution: Reverted the configuration change.

## Prevention
- This configuration item is now isolated by environment.