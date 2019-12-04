# Keen

This repository contains a simple HTTP proxy for communication with Keen back-end services.

---

# How to's

## Setup project

#### 1) Install NodeJS

| System    | Command                | Description                                                            |
| --------- | ---------------------- | ---------------------------------------------------------------------- |
| _MacOS_   | `brew install node`    | setup and use [brew](https://brew.sh) package manager                  |
| _Linux_   | `apt-get install node` | use package manager from operating system                              |
| _Windows_ | `n/a`                  | use installer from official [website](https://nodejs.org/en/download/) |

#### 2) Checkout repository

Use _Git_ version control system to checkout repository on the local machine

#### 3) Install Yarn

Install [yarn](https://yarnpkg.com/lang/en/) package manager

```sh
npm install yarn -g
```

#### 4) Install project dependencies

```sh
yarn install
```

or just run

```sh
yarn
```

#### 5) Run application

Use command defined below to run the application in development mode and access it at `localhost:3000`

The application require a `SESSION_ID` and `API_URL` environment variables to be defined.

```sh
SESSION_ID=${REPLACE_ME} API_URL=${REPLACE_ME} yarn start
```

## npm scripts

List of useful commands that could be used by developers. Execution in the command-line interface should be prefixed with `yarn` package manager.

| Command               | Description                                                                       |
| --------------------- | --------------------------------------------------------------------------------- |
| `start`               | run application on port `3000`                                |
| `prettier`            | run code formatter process against current codebase.                              |
