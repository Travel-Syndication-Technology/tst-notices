---
title: "Config update: Increased background worker concurrency"
timestamp: 2026-01-12 16:30:00 -0500
type: config
env: prod
summary: "Adjusted background processing concurrency to reduce queue latency during peak load while maintaining safe resource limits."
services:
  - workers
status: active
status_label: "Applied"
---

## What changed
- Increased worker concurrency from 8 to 12 for the primary processing queue.
- Set a tighter CPU threshold for autoscaling to avoid over-provisioning.

## Why we changed it
During peak usage, queue latency increased beyond our target window. This change improves throughput while keeping resource usage bounded.

## Risk and mitigation
- **Risk:** Higher concurrency can increase contention on shared resources.
- **Mitigation:** Gradual rollout, tighter autoscaling thresholds, and alerting on saturation signals.

## Validation
- Queue latency returned to within target range.
- No increase observed in error rate or downstream service timeouts after the change.
