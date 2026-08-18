#!/usr/bin/env sh

DEPLOY_PATH=$HOME/Blog-deploy

# Assuming deploy path exists and is a remote copy of gh-pages.
if [[ ! -d $DEPLOY_PATH ]]
then
    echo "$DEPLOY_PATH doesn't exist. Quitting."
    exit
fi
pushd $DEPLOY_PATH

echo Reset the gh-pages branch to master.
git reset --hard origin/gh-pages
git pull origin gh-pages

echo Do a production build to the gh-pages repo.
popd
uv run ../lightning/lightning -o=$DEPLOY_PATH

# The builder only emits .html/.xml at the site root and wipes everything else
# on each build, so copy robots.txt in after the build (before commit).
echo Copy robots.txt to the site root.
cp robots.txt "$DEPLOY_PATH/robots.txt"

echo Add all of the things, commit and push to the repo.

pushd $DEPLOY_PATH
git add -A
git commit -m "Updating smus.com with new content."
git push origin gh-pages

popd
