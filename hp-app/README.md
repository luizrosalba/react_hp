## Olhar : 
- repositório : 
- Awesome-react 
- Sites estáticos : Gatsby 
- server side rendering - Next.js 
- Animações : react-spring 
- forms : formik 
- gerenciamento de estados : redux, mobs , flux , recoil , xstate 
- mobile : react native 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

- npm install netlify-cli -g
- netlify deploy
- build 
- netlify deploy --prod
- build 

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# React HP 
- Single page App (SPA) 

- https://pt-br.reactjs.org/docs/create-a-new-react-app.html#create-react-app
- npm uninstall -g create-react-ap
- npm cache clean --force
- npm config edit 
- mudar ; cache=C:\Users\Luiz do Brasil\AppData\Roaming\npm-cache
- ; cache=C:\Users\LUIZDO~1\AppData\Roaming\npm-cache
- npm config set cache "C:\Users\LUIZDO~1\AppData\Roaming\npm-cache" --global
- npx create-react-app hp-app
- Then open http://localhost:3000/ to see your app.

- When you’re ready to deploy to production, create a minified bundle with npm run build.

Selecting a template
You can now optionally start a new app from a template by appending --template [template-name] to the creation command.

npIf you don't select a template, we'll create your project with our base template.

Templates are always named in the format cra-template-[template-name], however you only need to provide the [template-name] to the creation command.

npx create-react-app my-app --template [template-name]
You can find a list of available templates by searching for "cra-template-*" on npm.

Our Custom Templates documentation describes how you can build your own template.

#Creating a TypeScript app
You can start a new TypeScript app using templates. To use our provided TypeScript template, append --template typescript to the creation command.

npx create-react-app my-app --template typescript
If you already have a project and would like to add TypeScript, see our Adding TypeScript documentation.

#Selecting a package manager
When you create a new app, the CLI will use Yarn to install dependencies (when available). If you have Yarn installed, but would prefer to use npm, you can append --use-npm to the creation command. For example:

npx create-react-app my-app --use-npm

npm install --save react-router-dom