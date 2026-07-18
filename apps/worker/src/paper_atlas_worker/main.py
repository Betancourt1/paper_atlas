"""M0 worker package boundary.

Temporal workflow registration starts in M1. Keeping M0 free of fake worker
behavior makes that boundary explicit.
"""

SERVICE_NAME = "paper-atlas-worker"
