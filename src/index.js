let express = require('express');
let app = express();

app.get('/', (req, res) => {

  const [id, q] = req.query.q.split(': ');

  console.log(id, q);

  switch (q) {
    case 'what is your name':
      res.send('xcafaaard');
      break;
  }

  res.send('');

});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
