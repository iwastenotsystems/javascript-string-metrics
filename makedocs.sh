#!/bin/bash
DOCPATH=./docs
SRCPATH=.

JSDOC_OPTS='-p -r -E=docs'

# Make JavaScript documentation
jsdoc $JSDOC_OPTS -d=$DOCPATH $SRCPATH
