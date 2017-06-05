[![Build Status](https://travis-ci.org/richard457/streamup-open.svg?branch=master)](https://travis-ci.org/richard457/streamup-open)

# StreamUp-Open
## What you get
* Native Cross platform application
* Easy Hosting with a touch of feeling

##Developement
* Development server with LiveReload
* Karma, Jasmine and Protractor for testing
* Code scaffolding via Angular-CLI
* Application packaging via [electron-packager](https://github.com/electron-userland/electron-packager)
* Yarn

## Getting started
Use the seed via git:
```sh
git clone https://github.com/DevWurm/angular-electron-seed.git my-project
```
After this change into `my-project` and run
```sh
yarn install
```

## Available tools
### Build
Run `yarn run build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running the app
To run the app based on the created build results, run `yarn run run`

### Development server
Run `yarn run start` for a dev server. The app will automatically launch and reload if you change any of the source files.

###  Code scaffolding
If you have the Angular-CLI installed globally you can run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/interface/enum/module`.

### Running unit tests
Run `yarn run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run `yarn run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app in a dev server via `yarn run start`.

### Packaging releases
Run `yarn run package:win`, `yarn run package:mac`, `yarn run package:linux` or `yarn run package:all` to build binary releases for the specified plattform(s).
