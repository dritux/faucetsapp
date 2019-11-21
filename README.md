# Description
Faucets mobile app

#### Prerequisites:
nvm==0.35.0
node==v12.11.1
openjdk==1.8.0

#### Dependencies
```
./install.sh
```
#### Running
```
cd ~/genymotion && ./genymotion
adb devices
adb connect {IP}:{PORT}
react-native link
react-native start
react-native run-android
```

#### build
```
keytool -genkey -v -keystore faucet-release-key.keystore -alias faucet-key-alias -keyalg RSA -keysize 2048 -validity 10000
mv faucet-release-key.keystore android/app/
cd android && ./gradlew assembleRelease
cd android/app/build/outputs/apk/release && ls
```

#### Testing the release build
```
react-native run-android --variant=release
```

#### Referencies:
- [Install nvm](https://github.com/nvm-sh/nvm)
- [Tutorial](https://docs.rocketseat.dev/ambiente-react-native/android/linux)
- [Youtube](https://www.youtube.com/watch?v=XcU9GEUZTQA)
- [Evoluindo](https://vizir.com.br/2018/06/react-native-evoluindo-o-codigo/)
- [Native base](https://blog.rocketseat.com.br/native-base-no-react-native/)
- [HamburgerIcon](https://shockoe.com/blog/how-to-combine-bottom-tabs-top-tabs-and-a-hamburger-menu-in-a-react-native-application/)
- [Criptomobile](https://github.com/indreklasn/react-native-redux-crypto-tracker/tree/chapter-4)
- [Cripto icons](https://github.com/atomiclabs/cryptocurrency-icons)
- [Structure](https://www.freecodecamp.org/news/how-to-structure-your-project-and-manage-static-resources-in-react-native-6f4cfc947d92/)
- [Structure](https://medium.com/the-andela-way/how-to-structure-a-react-native-app-for-scale-a29194cd33fc)
