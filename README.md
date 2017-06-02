package.json in /client has:
"proxy": "http://localhost:3001"

React App will call http://localhost:3000/api/posts
Webpack Dev server forwards call to http://localhost:3001/api/posts