#!/bin/bash
set -e

echo "node version is " && node -v

source /etc/profile

nvm use 16

npm install -g @ies/eden-monorepo@3.5.0 --registry https://bnpm.byted.org

emo scm
