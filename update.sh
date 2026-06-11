#!/bin/bash
cd "$(dirname "$0")"
git add index.html qa-data.js
git commit -m "update: novos dados QA"
git push
echo "✅ Painel atualizado: https://larissafeital.github.io/qa-painel-cortex/"
