# Responsive web page

In this project you will find an example of a responsive web page.

## What did we use?
- [Bower](https://bower.io/)
- [Normalize.css](https://github.com/necolas/normalize.css)
- [SASS](http://sass-lang.com/)
- [JQuery](https://jquery.com/) and [JQuery UI](http://jqueryui.com/)
  - Using [JQuery UI Autocomplete](https://jqueryui.com/autocomplete/) to create the search feature.
  - Using [JQuery UI Tabs](https://jqueryui.com/tabs/) to create the tabs used in access section.

## Development
### First steps
- [Install npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm)
- Install bower through npm
```
npm install -g bower
```
- Install project's dependencies
```
npm install
bower install
```
- Use gulp task ```deploy``` to generate the deploy structure.
```
.\node_modules\.bin\gulp deploy
```
Or you can install gulp globally:
```
npm install -g gulp
gulp deploy
```

### Running the application
- Open deploy/index.html.

## Fixes
- Better usage of SVG images: mask-image does not work in many browsers.
- The search input is not well positioned for mobile.
- Create tests (Jasmine JS and Sinon JS).