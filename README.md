Pluralsight React Webpack
=========================
This repo is the product of following [Joe Eames](https://twitter.com/josepheames)'s class:
[Webpack Fundamentals](http://app.pluralsight.com/courses/webpack-fundamentals).

I went beyond the scope of this class by adding thorough [ESLinting](http://eslint.org/) and git hooks.

Finally, I used [VSCode](https://code.visualstudio.com/) as a text editor, so some useful features will also be found in this repo, such as the use of [typings](https://github.com/typings)
that provide useful autocomplete features (IntelliSense) and some launch/task settings.

Note that the current state of the repository is not a final/cumulative state of the course. To learn new concepts, the instructor
often reverted changes, which means that some core concepts of [Webpack](https://webpack.github.io/) that have been covered do not appear on this final commit.
Hence, in order to get the most out of this repo, I highly recommend to look at the commit history.

# Installation

## Requirements
* `npm install -g webpack webpack-dev-server`
* `git clone git@github.com:fxlemire/pluralsight-webpack.git`
* `npm install`

## VS Code Users
* `npm install -g typings`
* `typings install`
* Install ESLint extension (`CTRL+P` + `'ext install ESLint'`)

## Launch server
`webpack-dev-server`