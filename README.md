Start node server at / with:
 $ PORT=30001 node bin/www

Start React app at /client with:
$ npm start
or
$ yarn start


package.json in /client has:
"proxy": "http://localhost:3001"


React App will call http://localhost:3000/api/article
Webpack Dev server forwards call to http://localhost:3001/api/article