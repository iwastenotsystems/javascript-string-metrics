# Adapted from https://github.com/travist/minplayer/blob/master/makefile

# This makefile requires the following.
#   * jsdoc-toolkit
#     * http://code.google.com/closure/utilities/docs/linter_howto.html
#   * closure-linter
#     * <http://code.google.com/closure/utilities/docs/linter_howto.html>

# Create the list of files
files =   string.metrics.js

.DEFAULT_GOAL := all

#all: jslint js jsdoc
all: jsdoc

# Perform a jsLint on all the files.
jslint: ${files}
	gjslint $^

# TODO: Add script minimizer to Makefile
# Create an aggregated js file and a compressed js file.
# js: ${files}
# 	@echo "Generating aggregated bin/minplayer.js file"
# 	@cat > bin/minplayer.js $^
# 	@echo "Generating compressed bin/minplayer.compressed file"
# 	curl -s \
# 	  -d compilation_level=SIMPLE_OPTIMIZATIONS \
# 	  -d output_format=text \
# 	  -d output_info=compiled_code \
# 	  --data-urlencode "js_code@bin/minplayer.js" \
# 	  http://closure-compiler.appspot.com/compile \
# 	  > bin/minplayer.compressed.js

# Create the documentation from source code.
jsdoc: ${files}
	@echo "Generating documetation."
	@jsdoc -a -d=docs $^

# Fix the js style on all the files.
fixjsstyle: ${files}
	fixjsstyle $^
