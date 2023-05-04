# ChatGPT Hackathon

## Introduction
Our aim is to build a tool for students looking to learn and stay up to date with A.i. research.
We do this by scraping white papers on the subject and offering them to users in a list.
From there users will have the ability to read the papers and then use chatgpt to interact with the information.

Key features include:
 - Discoverability: Being presented with the latest white papers in a.i.
 - Summary: Getting a summary of the paper at different levels (ELI5, student etc)
 - Chat: Being able to ask questions directly to the paper


### How to use the code? (for developers)

The idea is that we use AWS Lambda to serve the dynamic part of our app, the server-side logic, and perform the server-side rendering. For all static data like images, stylesheets, and even the app's `index.tsx` that is loaded in the browser, we use an S3 bucket for public hosting.

This combination makes our app fast and incredibly scalable. AWS will spin up new Lambda instances once your number of users increases, handling even the largest spikes fully automatically while incurring virtually no costs when your app isn't used. At the same time, S3 provides a robust and fast platform for your static content so you don't have to waste your own computing resources.

All resources, including the S3 bucket for hosting static content, are created and configured automatically when your app is deployed the first time. You can make changes to the default setup by updating your `serverless.yml` to your linking.

### Folder Structure

```
serverless-react-boilerplate/
│
├── public/ - Public assets which will retain their original file names and folder structure
│   ├── favicon.ico - Favicon
│   └── manifest.json - Web page manifest
│
├── src/
│   ├── browser/
│   │   └── ... - Client-side code running in the browser as well as during server-side rendering
│   ├── components/
│   │   └── ... - React components
│   ├── server/
│   │   └── ... - Server-side code running on AWS Lambda
│   ├── App.tsx - The web application's root component.
│   └── ... - Other files used by the application
│
├── handler.ts - AWS Lambda function handler
├── serverless.yml - Project configuration
├── babel.config.js - Babel configuration
├── jest.config.js - Jest configuration
├── webpack.browser.config.js - Webpack configuration for client-side code
├── webpack.server.config.js - Webpack configuration for the Lambda backend
└── ...
```

### Serverless

The project is based on the [Serverless Framework](https://serverless.com) and makes use of several plugins:

- [Webpack Plugin](https://github.com/serverless-heaven/serverless-webpack) - We use Webpack for packaging our sources.
- [Offline Plugin](https://github.com/dherault/serverless-offline) - The Serverless Offline Plugin allows you to run Serverless applications locally as if they would be deployed on AWS. This is especially helpful for testing web applications and APIs without having to deploy them anywhere.
- [Scripts Plugin](https://github.com/mvila/serverless-plugin-scripts#readme) - Run shell scripts as part of your Serverless workflow
- [S3 Deploy Plugin](https://github.com/funkybob/serverless-s3-deploy) - Deploy files to S3 buckets. This is used for uploading static content like images and the generated `main.js`.

### Webpack

Though we use the same source code for both the server-side and browser rendering, the project will be packaged into two distinct bundles:

1. Backend code running on AWS Lambda. The main entry point is `./src/server/render.tsx`. It contains the handler function that is invoked by AWS Lambda. The packaging is controlled by `webpack.server.config.js` and optimized for Node.js 12.
2. Frontend code hosted in an S3 bucket and loaded by the browser. Main entry point is `./src/browser/index.tsx`. It's packaged using the `webpack.browser.config.js`, optimized for web browsers. The output files will have their content hash added to their names to enable long-term caching in the browser.

#### Code Splitting

`webpack.browser.config.js` defines some default code-splitting settings that optimize browser loading times and should make sense for most projects:

- Shared components (in the `src/components` folder) are loaded in a separate `components.js` chunk.
- All external Node modules (in the `node_modules/` folder) are loaded in the `vendor.js` chunk. External modules usually don't change as often as the rest of your application and this split will improve browser caching for your users.
- The rest of the application is loaded in the `main.js` chunk.

## Customization

### Serverless Project

Update the `serverless.yml` with your project name and additional resources you might need. For example, you might want to [create a custom domain name for your app](https://www.serverless.com/plugins/serverless-domain-manager).

### Configuration

The frontend, as well as the server-side code running on AWS Lambda, share a common application configuration. Currently, it is used for injecting the application name from the `public/manifest.json` as well as setting the public hostnames. You can extend the configuration by adding your own variables to `src/server/config.tsx`. They will become available in both your backend and frontend code via the `useConfig` hook:

```js
import useConfig from "../components/useConfig";

export default function MyComponent() {
  const config = useConfig();
  return (
    // ...
  )
}
```

### Adding Your Own Code


Generally, you shouldn't need to touch the contents of the `src/browser/` and `src/server/` folders, with exception of updating the configuration. Common components shared across your React site should go into the `src/components/` folder. It currently contains only the `ConfigContext` provider and the `useConfig` hook implementation. Code splitting has already been configured to package these shared components separately from the rest of your application. You might want to place individual web pages or screens of your application into subfolders directly underneath `src/` or next to `App.tsx`.

Images can be loaded directly from the `src/` folder as demonstrated in `App.tsx`. Webpack will automatically manage your images, ensure they use a unique file name and are loaded either from S3 or get embedded directly into the generated HTML if they are small enough. The `public/` folder on the other hand is used for static assets that should retain their original file names and folder structure. All content of this folder will be uploaded to S3 exactly 1:1 and served from there. It is the perfect place to put your `favicon.ico`, `robots.txt`, and similar static assets that you need to reference by a fixed unchanging URL.




## Testing

You can test the setup locally. No direct access to AWS is needed. This allows developers to write and test code even if not everyone has full deployment access.

For local testing run the following command and open your web browser at http://localhost:3000/. Static content such as images will be served via the [Webpack DevServer](https://webpack.js.org/configuration/dev-server/) running on http://localhost:8080. Note that the app has to be deployed first before you will be able to run locally.

```sh
npm start
```

Testing is set up as well, using Jest and will execute all `*.test.ts` and `*.test.tsx` files in the `src/` directory:

```sh
npm test
```

The whole application can be deployed with a single command:

```sh
npx sls deploy
```

And finally to remove all AWS resources again run:

```sh
npx sls remove
```

This will delete all resources but the distribution S3 bucket. As it still contains the bundles you will have to delete the bucket manually for now.

