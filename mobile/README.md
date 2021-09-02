# PurpleSilence project

This is the mobile part of the PurpleSilence app.

## yarn

Use yarn. There is high likelihood that `npm install` won't resolve due to some odd dependency issues. `yarn` provides no such trouble.

## Setup

To start development, please set up your environment for development of React Native app with use of React Native CLI.
Follow the official [instructions](https://reactnative.dev/docs/environment-setup) for installing dependencies for React Native CLI.
Execute the statement without Creating a new application.

After all the relevant packages have been properly installed, you need to download one more global package.

`npm install react-native-rename -g`

In your main directory run command:

`npx react-native-rename "PurpleSilence" -b com.purplesilence`

This will allow us to change the name of the global application name from `mobile` to the `PurpleSilence`.

After installing all the necessary packages, run the `yarn install` command, and then `cd ios && pod install`.
Remember that, when you add a new package, execute the command `yarn clear:ios`

### Problems

If you have a problem with the android emulator after executing the instructions, complete the `.zprofile` file with the `JAVA_HOME` constant.

```
export ANDROID_HOME=$HOME/Library/Android/sdk
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
export JAVA_HOME=/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home
```

## Useful commands

Command                                                                 | Description
-----                                                                   | -----------
`yarn android`                                                          | open android application
`yarn ios`                                                              | open ios application
`yarn clear`                                                            | clear your application
`yarn test`                                                             | perform the jest unit tests
`yarn format`                                                           | format files with prettier
`yarn lint`                                                             | run eslint
`npx codeandpepper/generate component`                                  | generate `Screen` or `Navigator` in current directory

## Locize

The mobile application uses the Locize tool for translation. This allows you to translate without having to write down each phrase.
In order to start translating correctly, at the very beginning you need to register or log in to the [website](https://www.locize.app/) and create a new or add existing project.
When you create a project, add ar, en and pl namespace to it. Go into the project settings and get `Project ID` and `API KEY`. Remember, you need to generate a new api key with admin role.
Add to envs:

```
REACT_APP_PURPLE_SILENCE_LOCIZE_API_KEY=<your_admin_api_key>
REACT_APP_PURPLE_SILENCE_LOCIZE_PROJECT_ID=<your_project_id>
```

# E2E tests

## Running E2E tests

### Setup env variables for tests

1. Copy example env file: `cp .env.example .env`
2. Populate it with your own values returned by `cloud/scripts/setEnvs.bash` script (`cloud/scripts/setEnvs.ps1` on Windows).
To run this script you can use the following command `source ./setEnvs.bash` (`./setEnvs.ps1` on Windows)
3. Copy example test env file: `cp .env.test.example .env.test`
4. Populate it with your own values
5. For `AWS_COGNITO_USER_POOL_ID` copy paste value returned by `cloud/scripts/setEnvs.bash` script
6. Populate `binaryPath` property in the `ios` object in the `.detoxrc.json` file with your own value
