#!/usr/bin/env sh

DEPLOY_PATH=/Users/smus/Projects/smus.com-deploy

# Do a deploy build to the smus.com gh-pages repo.
../lightning/lightning --out=$DEPLOY_PATH

# Commit the updated contents there, and push it upstream.
pushd $DEPLOY_PATH

git add -A
git commit -m "Updating smus.com with new content."
git push origin gh-pages

popd
