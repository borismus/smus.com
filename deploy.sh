#!/usr/bin/env sh

DEPLOY_PATH=$HOME/Blog/deploy
LIGHTNING=/Users/smus/Projects/lightning/lightning
LIGHTNING_CONFIG=$PWD/lightning.yaml

# Assuming deploy path exists and is a remote copy of gh-pages.
pushd $DEPLOY_PATH

# Reset the gh-pages branch to master.
git reset --hard origin/gh-pages
git pull origin gh-pages
# Do a production build to the gh-pages repo.
$LIGHTNING -b $LIGHTNING_CONFIG -o=$DEPLOY_PATH
# Add all of the things, commit and push to the repo.
git add -A
git commit -m "Updating smus.com with new content."
git push origin gh-pages

popd
