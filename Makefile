install:
	npm install --no-optional

start:
	npm start

production:
	make install

clean:
	npm cache clean --force
	rm -rf node_modules
	npm install
	npm start --reset-cache

upgrade:
	react-native upgrade

all:
	make clean
	make install
	make start