DEPENDENCIES = build-essential libssl-dev gcc-multilib lib32z1 lib32stdc++6 android-tools-adb nodejs npm

sudo apt-get install gcc-multilib lib32z1 lib32stdc++6

dependencies:
	sudo apt-get install -y ${DEPENDENCIES}

install:
	npm install --no-optional

start:
	npm start

production:
	make install

all:
	make dependencies
	make install
	make start