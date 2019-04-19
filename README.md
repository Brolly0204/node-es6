# node ES6环境搭建

## 开发环境

### 1.安装依赖

```
npm i @babel/core @babel/node @babel/preset-env nodemon -D
```

### 2.配置.babelrc文件

```js
{
  "presets": ["@babel/preset-env"]
}
```

### 3.配置package.json

```js
"scripts": {
  "dev": "nodemon -w src --exec \"babel-node src/1.js\""
}
```

### 4.运行命令

```
npm run dev
```

## 生成环境
> 需要支持async await

### 1.安装依赖

```
npm i @babel/cli @babel/plugin-transform-runtime -D
npm i @babel/runtime @babel/runtime-corejs2
```

### 2.配置.babelrc

```js
{
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 2
      }
    ]
  ]
}
```

### 3.配置scripts

```js
"scripts": {
  "build": "babel src -d dist"
}
```

### 4.运行命令

```
  npm run build
```

## 最终配置

### package.json

```js
  {
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "dev": "nodemon -w src --exec \"babel-node src/1.js\"",
      "build": "babel src -d dist"
    },
    "devDependencies": {
      "@babel/cli": "^7.4.3",
      "@babel/core": "^7.4.3",
      "@babel/node": "^7.2.2",
      "@babel/plugin-transform-runtime": "^7.4.3",
      "@babel/preset-env": "^7.4.3",
      "nodemon": "^1.18.11"
    },
    "dependencies": {
      "@babel/runtime": "^7.4.3",
      "@babel/runtime-corejs2": "^7.4.3"
    }
  }
```

### .babelrc

```js
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "corejs": 2
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ]
}

```
