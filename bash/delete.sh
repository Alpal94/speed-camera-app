#!/bin/bash

grep -v "long_name" locations > temp && mv temp locations

grep -v "types" locations > temp && mv temp locations
grep -v "status" locations > temp && mv temp locations
grep -v "place_id" locations > temp && mv temp locations
grep -v "location_type" locations > temp && mv temp locations
