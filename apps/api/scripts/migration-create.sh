#!/usr/bin/env bash
# Usage: pnpm migration:create -- MyMigrationName

set -e

NAME="$1"
if [ -z "$NAME" ]; then
  echo "Usage: pnpm migration:create -- MigrationName"
  exit 1
fi

TARGET="src/migrations/$NAME"

pnpm --filter api typeorm migration:create "$TARGET"