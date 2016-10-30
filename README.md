# Setting Up React For Node and Express

## Before Starting

If you haven't read my [Introduction To Node and Express](https://github.com/alfredlam42/intro-to-node-express) yet, start with that first.

It explains how to set up Node and Express and what everything does.

## Setting Up React

#### Packages

You're going to need the webpack command in your terminal so we'll be installing this globally first.
```
npm install webpack -g
```

React and ReactDOM
```
npm install react react-dom --save
```

Babel and Webpack
```
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react webpack webpack-dev-server --save-dev
```

#### Webpack Configuration

You'll need a file to configure Webpack. Create the file in the main directory.
```
webpack.config.js
```

Copy and paste the following into the file. Update the entry and output of this object.
```JSON
module.exports = {
  entry: '<filename>',
  output: {
    path: '<pathname>',
    filename: '<filename>'},
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
}
```

The entry file is the one that tells React to render onto the DOM. Don't forget to make sure it is correct. I like to keep the entry file in the root directory as well, but it's up to you how you organize it.

The output file is the compiled code that'll of everything that'll allow React to work with Express.

#### The Entry File

You can name it whatever you want. For this example, it is called index.js.

You can handle the entry file in so many different ways, but this is how I do it. So feel free to do whatever works for you.

I like to use the entry file as a pseudo-router. Because you handle where all the components will be mounting, you want to make sure different components don't end up in the same container, unless that is your intent.

There is a React Router component that will handle it, but we don't get into it here.

#### Adding The Script

This is the most important part. If you forget this, you'll be wondering to yourself why React isn't working.

At the bottom of all your .ejs/html files add the following:
```HTML
<script src='/js/bundle.js'></script>
```

This will load the React components you added.

#### Starting The Server

Look in your package.json file and add the following to the script section of it.

```JSON
  "start": "webpack && node app.js",
```

Now all you have to do is run
```
npm start
```

and it should work.