# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
yarn or npm i
npx expo start
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)
# rn-expo-app
# rn-expo-app

## 📝 Setup step note
npx create-expo-app@latest rn-expo-app --example with-router
cd rn-expo-app
npx expo install expo-typescript
touch tsconfig.json

- https://www.figma.com/file/2y7OVLerspEnvMLoF5TLth/Expo-App-Icon-%26-Splash-(Community)?type=design&node-id=1-1357&mode=design&t=CHFJHIEODjSTLmqJ-0

yarn add @ant-design/react-native
yarn add babel-plugin-import --dev


// .babelrc or babel-loader option add this
{
  "plugins": [
    ["import", { libraryName: "@ant-design/react-native" }] // The difference with the Web platform is that you do not need to set the style
  ]
}

npx expo install react-native-safe-area-context
npx expo start
