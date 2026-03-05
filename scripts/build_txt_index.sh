#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$REPO_ROOT/references/raw/saa-c03-solution.txt"
OUT="$REPO_ROOT/references/indexes/txt-question-index.md"

{
  echo "# SAA TXT Question Index"
  echo
  echo "- Source file: \`references/raw/saa-c03-solution.txt\`"
  echo "- Generated at: $(date '+%Y-%m-%d %H:%M:%S %Z')"
  echo
  echo "| Q# | Line | Scenario (first line) |"
  echo "|---:|---:|---|"

  awk '
    /^[0-9]+\]/ {
      raw=$0
      q=raw
      sub(/\].*/, "", q)
      text=raw
      sub(/^[0-9]+\][[:space:]]*/, "", text)
      gsub(/\|/, "\\|", text)
      if (length(text) > 160) {
        text=substr(text, 1, 157) "..."
      }
      printf "| %s | %d | %s |\n", q, NR, text
    }
  ' "$SRC"
} > "$OUT"

echo "Generated: $OUT"
