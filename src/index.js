let express = require('express');
let app = express();

app.get('/', (req, res) => {
  console.log('query: ' + req.query.q);
  res.send('query: ' + req.query.q);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
