# CRUD Generator [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

> A [Yeoman](http://yeoman.io) generator for common Database-driven applications that includes persistance & authenticatoin for multiple programming languages.


## Status

Still a proof-of-concept. I plan on adding support for common languages & backends.

## Features

Many apps, big and small, can be broken down to CRUD APIs, persitance & auth. `generator-crud` is meant to be a mildy opinionated poly-language generator for these types of applications.

For V1, each language will use light-weight frameworks like Sinatra & Express (often called Sinatra-inspired frameworks,) popular auth libraries like OmniAuth & PassportJS and MongoDB. The first 2 languages will be node & python

By using Yeoman, the generator will simplify configuration like creating basic routes, a database, package files, etc. While optimized for local development, `generator-crud` should support scaffolding, development, db management & deployment.

After V1, there will be an interactive mode that allows you to set different Frameworks, DBs & even frontend libraries. It might be possible to than separate each language generator into subprojects using something like [grunt-hub](https://github.com/shama/grunt-hub). 

## Usage (very ALPHA)

Install `generator-crud` (not yet published):
```
npm install -g generator-crud
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo crud`, optionally passing an app name:
```
yo crud [app-name]
```

Run `grunt` for building and `grunt serve` for preview

## Generators

Planned generators:

* crud (aka crud:app)
* crud:create
* crud:retrieve
* crud:update
* crud:delete

## Grunt tasks

* grunt build
* grunt serve
* grunt db
* grunt deploy