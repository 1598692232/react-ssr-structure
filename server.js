const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const routerConfig = require('./router');
console.log(routerConfig,'routerConfig')

app.prepare().then(() => {
  const server = express();


  routerConfig.forEach((item, k) => {
    
    if (!!item.query) {
      server.get(`${item.as}:${item.query}`, (req, res) => {
        const actualPage = item.href;
        let queryParams = {};
        queryParams[item.query] = req.params[item.query];
        app.render(req, res, actualPage, queryParams);
      });
    } else {
      server.get(`${item.as}`, (req, res) => {
        const actualPage = item.href;
        app.render(req, res, actualPage);
      });
    }
  });


  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3001, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})