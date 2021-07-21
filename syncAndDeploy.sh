#!/bin/bash

# build/generate app
npm i && npm run generate

cp -r dist ~/Desktop

# update develop branch
git checkout develop && git merge wip/portfolio-redesign-1 && git push

# update master branch
git checkout master && \
rm -rf $(find . -name "*" ! -name "old") && \
mv ~/Desktop/dist/* . && \
git add * && git commit -m "Deploy app" && git push && \



# Clean
rm -rf ~/Desktop/dist

git checkout wip/portfolio-redesign-1