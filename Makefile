test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--require should \
		--reporter nyan \
		--harmony \
		--bail \
		api/test.js

.PHONY: test