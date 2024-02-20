/** @satisfies {import('@webcontainer/api').FileSystemTree} */

export const files = {
    'index.js': {
      file: {
        contents: `
  import express from 'express';
  import { JsonApiClient } from '@drupal-api-client/json-api-client';

  const app = express();
  const port = 3111;

  const client = new JsonApiClient('https://dev-drupal-api-client-poc.pantheonsite.io');

  const pages = await client.getCollection('node--page');
  console.log(pages);
  
  app.get('/', (req, res) => {
    res.send(JSON.stringify(pages, null, 2));
  });
  
  app.listen(port, () => {
    console.log(\`App is live at http://localhost:\${port}\`);
  });`,
      },
    },
    'package.json': {
      file: {
        contents: `
  {
    "name": "example-app",
    "type": "module",
    "dependencies": {
      "express": "latest",
      "nodemon": "latest",
      "@drupal-api-client/json-api-client": "latest"
    },
    "scripts": {
      "start": "nodemon --watch './' index.js"
    }
  }`,
      },
    },
  };