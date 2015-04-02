# Do-While
To-Do application.

# Requirements
This project required preinstalled _node_ with _npm_.
Allso need global install of _gulp_ and _bower_
```
npm i bower gulp -g
```

# Installation
This command installs all required npm an bower modules and compiles all in dist folder :

+ __Windows__:
```
npm install & bower install & gulp build
```

+ __Unix__:
```
npm install && bower install && gulp build
```

# Gulp basic tasks
+ __default__ task compiles all sources into _./dist_ folder, starts server on __http://localhost:8000__
and realoads page while changes handeled in _src/*_ files.

+ __build__ task compiles all sources into _./dist_ folder