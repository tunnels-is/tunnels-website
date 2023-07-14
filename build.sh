#!/bin/bash
rm -r dist
rm -r .parcel-cache

reset && npx parcel build --no-cache --no-source-maps src/index.html