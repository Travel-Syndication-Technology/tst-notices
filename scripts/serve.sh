#!/usr/bin/env bash
set -euo pipefail

# Run GitHub Pages-compatible Jekyll in Docker.
# Usage: ./scripts/serve.sh

IMAGE="jekyll/jekyll:4"
BUNDLER_VERSION=${BUNDLER_VERSION:-2.5.11}
PORT=${PORT:-4000}
LIVERELOAD_PORT=${LIVERELOAD_PORT:-35729}
BUNDLE_PATH=${BUNDLE_PATH:-vendor/bundle}
PATCH_FILE=${PATCH_FILE:-./scripts/pathutil_patch.rb}

# Determine TTY flags (avoid -t when not in a terminal)
if [ -t 1 ]; then
  TTY_FLAGS=("-it")
else
  TTY_FLAGS=("-i")
fi

# Ensure bundle cache directory exists on host (persists across runs)
mkdir -p "$BUNDLE_PATH"

# One-container flow: install bundler, install gems into mounted bundle path, then serve
exec docker run --rm "${TTY_FLAGS[@]}" \
  -v "$PWD":/srv/jekyll \
  -p "$PORT":4000 \
  -p "$LIVERELOAD_PORT":35729 \
  "$IMAGE" \
  sh -c "\
    gem install bundler -v $BUNDLER_VERSION >/dev/null && \
    bundle _${BUNDLER_VERSION}_ config set --local path '/srv/jekyll/$BUNDLE_PATH' && \
    bundle _${BUNDLER_VERSION}_ install --jobs 4 && \
    RUBYOPT='-r/srv/jekyll/${PATCH_FILE#./}' bundle _${BUNDLER_VERSION}_ exec jekyll serve --livereload --host 0.0.0.0\
  "
