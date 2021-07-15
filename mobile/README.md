# PurpleSilence project

This is the mobile part of the PurpleSilence app.

## yarn

Use yarn. There is high likelihood that `npm install` won't resolve due to some odd dependency issues. `yarn` provides no such trouble.

## Useful commands

Command                                                                 | Description
-----                                                                   | -----------
`yarn android`                                                          | open android application
`yarn ios`                                                              | open ios application
`yarn test`                                                             | perform the jest unit tests
`yarn format`                                                           | format files with prettier
`yarn lint`                                                             | run eslint

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
