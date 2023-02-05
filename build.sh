#!/bin/bash

cd ./gui
rm -r dist
rm -r .parcel-cache

reset && npx parcel build --no-cache --no-source-maps src/Portal.html
# reset && npx parcel build --no-cache src/Portal.html

