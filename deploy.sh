#!/usr/bin/env sh

DEPLOY_PATH=$HOME/Projects/smus.com-deploy

# Do a deploy build to the smus.com gh-pages repo.
../lightning/lightning --out=$DEPLOY_PATH

# Commit the updated contents there, and push it upstream.
pushd $DEPLOY_PATH

git reset --hard origin/gh-pages
git pull origin gh-pages
git add -A
git commit -m "Updating smus.com with new content."
git push origin gh-pages

popd
