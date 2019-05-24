#!/usr/bin/env sh

DEPLOY_PATH=$HOME/Projects/smus.com-deploy
LIGHTNING=$PWD/../lightning/lightning
LIGHTNING_CONFIG=$PWD/lightning.yaml

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
