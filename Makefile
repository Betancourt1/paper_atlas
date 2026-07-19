.PHONY: bootstrap check dev e2e harness-check reset-local test visual visual-manifest-check

bootstrap:
	pnpm install --frozen-lockfile
	UV_CACHE_DIR=.uv-cache uv sync --frozen
	pnpm generate

dev:
	@docker compose version >/dev/null 2>&1 || (echo "Docker Compose v2 is required."; exit 1)
	docker compose up -d
	pnpm dev

check:
	pnpm check

harness-check:
	UV_CACHE_DIR=.uv-cache uv run python scripts/check-agent-harness.py
	UV_CACHE_DIR=.uv-cache uv run python scripts/check-visual-manifests.py

visual-manifest-check:
	UV_CACHE_DIR=.uv-cache uv run python scripts/check-visual-manifests.py

test:
	pnpm test

e2e:
	pnpm e2e

visual:
	pnpm visual

reset-local:
	@test "$(CONFIRM)" = "1" || (echo "Run make reset-local CONFIRM=1 to remove Paper Atlas containers and named volumes."; exit 1)
	docker compose down --volumes --remove-orphans
