#!/bin/bash
rm -r dist
rm -r .parcel-cache

reset && npx parcel serve -p 1233 --no-cache --no-source-maps src/index.html

# windowas
# parcel.cmd -p 1223 --no-cache --no-source-maps .\src\index.html