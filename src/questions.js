let express = require('express');
let app = express();

const answers = [];
answers[/what is your name/g] = () => 'xcafard';

app.get('/', (req, res) => {

  const [id, q] = req.query.q.split(': ');

  console.log(id, q);

  answers.forEach((k, v) => {
    console.log(k, v);
  });

  switch (q) {
    case 'what is your name':
      res.send('xcafaaard');
      return;
  }

  res.send('');

});

app.listen(3001, () => {
  console.log('Example app listening on port 3000!');
});
