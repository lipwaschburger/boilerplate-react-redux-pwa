# React + Redux + PWA

![boilerplate-react-redux-pwa]()

It's sample boilerplate react, redux and pwa 

## Getting Started

This instructions will take you to a copy of the running project in your actual local machine for development means.
Please consult the steps to deploy your project

### Pré-requisites

- NodeJS 8.1.x
- VSCode
- NPM or YARN
- WebPack CLI
- MLab
 
### Technologies

| Tech | Description |
| --- | --- |
| NodeJS | [https://nodejs.org/en/download/](https://nodejs.org/en/download/) |
| Nodemon | [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon) |
| NPM | [https://docs.npmjs.com/](https://docs.npmjs.com/)  |
| WebPack CLI | [https://webpack.js.org/](https://webpack.js.org/)  |
| ajv | [https://github.com/epoberezkin/ajv](https://github.com/epoberezkin/ajv) |
| babel-cli | [https://babeljs.io/docs/en/babel-cli](https://babeljs.io/docs/en/babel-cli) |
| babel-core  | [https://babeljs.io/docs/en/babel-core](https://babeljs.io/docs/en/babel-core) |
| babel-loader | [https://github.com/babel/babel-loader](https://github.com/babel/babel-loader) |
| babel-minify-webpack-plugin | [https://github.com/webpack-contrib/babel-minify-webpack-plugin](https://github.com/webpack-contrib/babel-minify-webpack-plugin) |
| babel-polyfill | [https://babeljs.io/docs/en/babel-plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime) |
| babel-plugin-transform-runtime | [https://babeljs.io/docs/en/babel-polyfill.html](https://babeljs.io/docs/en/babel-polyfill.html) |
| babel-preset-env | [https://github.com/babel/babel-preset-env](https://github.com/babel/babel-preset-env) |



## Installing

### Steps to setup

**1. Clone the application**

```bash
git clone https://github.com/cassiolpaixao90/boilerplate-react-redux-pwa.git
```

**2. Install dependence the app using NPM or YARN**

```bash
cd boilerplate-react-redux-pwa
npm install
```

<!-- **3. Run generate certificate localhost HTTPS**

```bash
npm run certs
``` -->

**3. Run mode Development**

```bash
npm run dev
```

**4. Run mode Production**

```bash
npm run prod
```

## boilerplate-react-pwa-api-postman-collection

**Try out the Boilerplate-React-PWA REST API using Postman with this ready-made Postman collection.**

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/collections/6983e6f507e09e3b7763)


## Troubleshooting

**Nodemon internal watch failed: watch ENOSPC**

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details




