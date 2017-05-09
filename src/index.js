let express = require('express');
let app = express();
let question = require('./question');

app.get('/', (req, res) => {
  const r = '' + question(req.query.q);
  console.log('response', r);
  res.send(r);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
