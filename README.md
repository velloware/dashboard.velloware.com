<p align="center">
   <img src="https://avatars.githubusercontent.com/u/105833248?s=400&u=23db20e40ccd72d71fa4e22600335d2c8518a8b1&v=4" alt="vello-dash" width="280"/>
</p>

<p align="center">	
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/velloware/vello-dash?color=774DD6">

  <a href="https://github.com/velloware/vello-dash/commits">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/velloware/vello-dash?color=774DD6">
  </a> 
  <img alt="License" src="https://img.shields.io/badge/license-MIT-8257E5">
  <a href="https://github.com/velloware/vello-dash/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/velloware/vello-dash?color=8257E4&logo=github">
  </a>
</p>   

<p align="center">
    <a href="README.md">English</a>
  
 </p>

# :pushpin: Table of Contents

- [Technologies](#computer-technologies)
- [How Works Application](#how-works)
- [Features](#rocket-features)
- [How to Run](#construction_worker-how-to-run)
- [Contributing](#tada-contributing)
- [License](#closed_book-license)

# :computer: Technologies

This project was made using the follow technologies:

- [typescript](https://www.typescriptlang.org/) - Super Javascript
- [Javascript](https://www.typescriptlang.org/)
- [Nodejs](http://nodejs.org/) - Nodejs
- [Jest](https://jestjs.io/) - UnitTest
- [ESlint](https://eslint.org/) - Linter
- [Prettier](https://prettier.io/) - Code Formatter

# :rocket: Features

- [x] Auto Deploy using Github Actions
- [x] Revicer Notification
- [x] Notification API to telegram
- [x] Notification WEBHOOK
- [x] Monitor PM2 APPs status
- [x] New Relic Alerts Template message

# how works

This application is backend.

- You can run this app in your server to monitor PM2 instances and using API to notify in telegram group.

# :construction_worker: How to run

### 💻 Run Web Project

```bash
# Clone Repository
$ git clone https://github.com/velloware/vello-dash

# Install Dependencies
$ npm ci i

# Run migrations Prisma
$ touch .env

PORT=YOU_PORT
BOT_TOKEN=YOUR_TOKEN_BOT_TELEGRAM
CHAT_ID=CHAT_ID_IN_TELEGRAM

# Run Aplication
$ npm run dev
```

### Run Tests

```bash
# Run Test
$ npm run test
```


# :tada: contributing

**file a new issue** with a respective title and description on the the [vello-dash](https://github.com/velloware/vello-dash/issues) repository. If you already found a solution to your problem, **i would love to review your pull request**!

# :closed_book: License

Released in 2022 :closed_book: License
This project is under the [MIT license](./LICENSE).
