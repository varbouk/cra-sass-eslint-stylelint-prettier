# CRA template with Sass, ESLint, Stylelint and Prettier, ready for Jest, Flow and VS Code

Custom template for [Create React App](https://create-react-app.dev/) to scaffold a new web app project.

Ships with recommended style guides for ESLint and Stylelint that allows you to deploy better and more reliable web apps.\
Adds `lint` and `fix` and `flow` scripts to the default Create React App ones - _see [Additional Scripts](#additional-scripts)_.\
Uses Git hooks to format and attempt to fix ESLint and Stylelint errors before committing to Git.

## Features

### Sass

[Sass](https://sass-lang.com/) is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more. It is compiled into CSS during the build action.

### ESLint

[ESLint](https://eslint.org/) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

### Stylelint

[Stylelint](https://stylelint.io/) is a mighty, modern linter that helps you avoid errors and enforce conventions in your styles.

### Prettier

[Prettier](https://prettier.io/) is an opinionated code formatter. It ensures that all outputted code conforms to a consistent style.

### Jest - _disabled by default_

[Jest](https://jestjs.io/) is a delightful JavaScript Testing Framework with a focus on simplicity. You must enable it in order to use it - _see [Enable Jest](#enable-jest)_.

### Flow - _disabled by default_

[Flow](https://flow.org/) is a static type checker for JavaScript that identifies problems as you code. You must enable it in order to use it - _see [Enable Flow](#enable-flow)_.

### Git hooks

[Husky](https://github.com/typicode/husky) and [Lint-Staged](https://github.com/okonet/lint-staged) are configured to run linters against staged git files and don't let 💩 slip into your code base!

asciicast

### VS Code settings

[Visual Studio Code](https://code.visualstudio.com/) is a code editor redefined and optimized for building and debugging modern web and cloud applications.\
It is free, built on open source and available on your favorite platform - Linux, macOS, and Windows.

## Requirements

Make sure you have [Node.js](https://nodejs.org/) >= 14 installed.

## Additional Scripts

In the project root directory, you can run the default [Create React App scripts](#available-scripts), plus :

### `yarn lint:scripts`

Lints the project javascripts using ESLint.

### `yarn lint:styles`

Lints the project stylesheets using Stylelint.

### `yarn lint:prettier`

Lints the project code formatting using Prettier.

### `yarn lint`

Runs all the linters.

### `yarn fix:scripts`

Attempts to fix automatically the project javascripts using ESLint.

### `yarn fix:styles`

Attempts to fix automatically the project stylesheets using Stylelint.

### `yarn fix:prettier`

Attempts to fix automatically the project code formatting using Prettier.

### `yarn fix`

Runs all the fixers.

### `yarn flow:start`

Starts the Flow server - _Flow must be enabled_.

### `yarn flow:stop`

Stops the Flow server - _Flow must be enabled_.

## Style guides

### ESlint

When you use this template ESLint will check your code against various style guides (in that order):

- [eslint:recommended](https://github.com/eslint/eslint/blob/main/conf/eslint-recommended.js) - Recommended configuration for ESLint.
- [react-app](https://github.com/facebook/create-react-app/tree/main/packages/eslint-config-react-app) - ESLint configuration used by Create React App.
- [react-app/jest](https://github.com/jest-community/eslint-plugin-jest) - Optional Jest rules for ESLint - _**disabled by default**_.
- [plugin:react/recommended](https://github.com/yannickcr/eslint-plugin-react) - Recommended configuration for React.
- [plugin:react-hooks/recommended](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) - Recommended configuration for React Hooks.
- [plugin:jsx-a11y/recommended](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) - Accessibility rules for JSX elements.
- [plugin:flowtype/recommended](https://github.com/gajus/eslint-plugin-flowtype) - Optional Flow type configuration for ESLint - _**disabled by default**_.
- [plugin:jest/all](https://github.com/jest-community/eslint-plugin-jest) - Optional recommended configuration and stylistic rules for Jest - _**disabled by default**_.
- [plugin:prettier/recommended](https://github.com/prettier/eslint-plugin-prettier) - Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

By default, it will check any JavaScript files (`{js,jsx}`) in your src folder.

### Stylelint

When you use this template Stylelint will check your code against various style guides (in that order):

- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) - The standard configuration for Stylelint.
- [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss) - The standard SCSS configuration for Stylelint
- [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier.

By default, it will check any stylesheets files (`{css,scss}`) in your src folder.

### Prettier

This template comes with a standalone Prettier configuration file (`.prettierrc.js`) specifying formatting rules.

The same settings are also supplied in the form of an EditorConfig file (`.editorconfig`) for compatibility with code editors that support it.

## Configuration

You can customize the configuration by editing the following files at the root directory of your project:

- ESLint: `.eslintrc.js`
- Stylelint: `.stylelintrc.js`
- Prettier: `.prettierrc.js`, `.editorconfig.js`
- Flow: `.flowconfig`

### Enable Jest

You can enable Jest rules for ESLint by uncommenting in the ESLint configuration file:

- the `jest` and `jest/globals` properties in the `env` object,
- the `react-app/jest` module in the `extends` array,
- the `plugin:jest/all` module in the `extends` array,
- the `version` property in the `settings.jest` object.

### Enable Flow

You can enable Flow type configuration for ESLint by uncommenting in the ESLint configuration file:

- the `plugin:flowtype/recommended` module in the `extends` array,
- the `@babel/preset-flow` preset in the `parserOptions.babelOptions.presets` array,
- the `flowtype` plugin in the `plugins` array,
- the `flowVersion` property in the `settings.react` object.

## Ignoring files

You can add specific ignore rules by editing the following files at the root directory of your project:

- ESLint: `.eslintignore`
- Stylelint: `.stylelintignore`
- Prettier: `.prettierignore`
- Flow: `.flowconfig [ignore]`

## Visual Studio Code integration

The template is ready to use with Visual Studio Code.\
You can add specific project configuration by editing `.vscode/settings.json`.

### Recommendations

For a better development experience, it is recommended to install these extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integrates ESLint into VS Code.
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - Integrates Stylelint into VS Code.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Prettier Formatter for VS Code.
- [Flow](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode) - Flow language support for VS Code.
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - EditorConfig support for VS Code.
- [ES7 snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) - Simple extensions for React, Redux and Graphql in JS/TS with ES7 syntax.
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) - Improve your code commenting by annotating with alert, informational, TODOs, and more!

## Testing

If you want to ensure that the linters are correctly configured, there are files for this purpose:

- `src/Test.jsx` - Opening this file in your editor or running `yarn lint:scripts` should highlight warnings and errors for each ESLint plugin configured.\
  Flow server - _when enabled_ - should highlight them too, added to flow-specific errors.
- `src/Test.scss` - Opening this file in your editor or running `yarn lint:styles` should highlight errors for each Stylelint plugin configured.

Feel free to delete these files once everything is ok with your linters.

## Todo's

- Create a "_real_" [cra-template](https://create-react-app.dev/docs/custom-templates/) and publish it to NPM.

## Author

- [@varbouk](https://twitter.com/varbouk) - [www.varbouk.com](https://www.varbouk.com/) - [GitHub](https://github.com/varbouk)

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
