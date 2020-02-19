# clear from root
find . -maxdepth 1 -name 'index.html' -delete
find . -maxdepth 1 -name 'bundle.*' -delete
find . -maxdepth 1 -name 'style.*' -delete
# copy to root
cp dist/* ./