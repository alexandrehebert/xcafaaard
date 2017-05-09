require()
let express = require('express');
let app = express()

app.get('/', (req, res) => {

        const [id, q] = req.query.q.split(': ');

        console.log(id, q);

        var numberPattern = /\d+/g;
        var number = q.match(numberPattern);

        switch (q) {
            case 'what is your name':
                res.send('xcafaaard');
                return;
            case number > 0:
            {
                res.send(number[0] + number[1]);
                return;
            }
        }
        res.send('');
    }
);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
