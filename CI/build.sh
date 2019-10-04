rm -r ./dist

set -e

npx jest ./src/__tests__

npx rollup -c

npx jest ./CI/__tests__/

cd ./CI/puppeteer

npx jest

cd ../..

git add ./dist/*

echo
echo
echo "************SUCCESS*****************"

echo "update version in package.json and do npm publish"
echo
echo
