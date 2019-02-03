## misaka-vue-template

## Project setup
```
npm install
```

```
npm run serve
```

## Do's
### Using Resolved Config as a File
Some external tools may need access to the resolved webpack config as a file, for example IDEs or command line tools that expect a webpack config path. In that case you can use the following path:

<projectRoot>/node_modules/@vue/cli-service/webpack.config.js

This file dynamically resolves and exports the exact same webpack config used in vue-cli-service commands, including those from plugins and even your custom configurations.
https://cli.vuejs.org/guide/webpack.html#using-resolved-config-as-a-file

### Apply settings from tslint.json
Some IDEs may able to import settings from config file. Remember to do this.

### Place right things in to right folders
To create vue views, make a folder in that name and create view as index.vue.  
Every folder that not starting with a lodash (```_```) must be a valid route path.
To create public components, just do that in the folder ```@/pages/_/```.

### Use libs before create util packages.
Consider get tools from libs like lodash first.

### Use slots feature
If you are migrated from react.js, factory component is not for component stack here.
Do not google for HoC of Vue. Use slot feature here.

## Do not's
### Do not compile anything by your IDE
Different developer uses different IDEs.  
Some of them has no a feature which auto-compile some files.  
Some of them has but needs config files, which
may not included in Version Control System.  
Please do not do that while we use npm scripts to do.

### Do not use root element of component in scoped styles
root element of components are always global and cannot be scoped.

### Do not make node_modules more black hole
You should not use very simple js lib like 'is-odd' or 'is-numeric'. Make a function in utils folder.

### Do not use yarn
Npm is good enough, It's 2018 now.

### Do not bypass entire tslint-loader check
Obviously.
