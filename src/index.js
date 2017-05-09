let express = require('express');
let app = express();
let question = require('question');

app.get('/', (req, res) => {
  res.send(question(req.query.q));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
