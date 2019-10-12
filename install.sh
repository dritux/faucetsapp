sudo add-apt-repository ppa:openjdk-r/ppa
sudo apt-get update
sudo apt-get install openjdk-8-jdk
sudo update-alternatives --config java

sudo apt-get install -y build-essential \
    libssl-dev \
    gcc-multilib \
    lib32z1 \
    lib32stdc++6 \
    curl \
    gradle \
    android-tools-adb \
    npm \
    virtualbox

~/Android/Sdk/tools/bin/sdkmanager "platform-tools" "platforms;android-27" "build-tools;27.0.3"

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash
cd ~/.nvm/ && ./install.sh
source ~/.bashrc

nvm install v12.11.1
nvm use v12.11.1

sudo npm install -g react-native-cli

cd /usr/local/android-studio/bin/ && ./studio.sh 
cd ~/genymotion && ./genymotion