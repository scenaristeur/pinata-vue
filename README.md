# pinata-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# probleme webpack 5 & polyfills
- https://stackoverflow.com/questions/68206050/breaking-change-webpack-5-used-to-include-polyfills-for-node-js-core-modules
- node-polyfill-webpack-plugin



#make a gh-pages branches

https://stackoverflow.com/questions/36782467/set-subdirectory-as-website-root-on-github-pages

- create subbranch with dist folder for the first time

comment the dist folder in the .gitignore file

```
git add dist -f && git commit -m "Initial dist subtree commit"
```

- build & publish to gh-pages
```
npm run build && git add . git commit -m "gh-pages branch" git push && git subtree push --prefix dist origin gh-pages
```
- then other times run
 ``` npm run git -- "mymodif"```
