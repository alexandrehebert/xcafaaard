module.exports = query => {

  const [id, q] = query.split(/.*?: /);

  console.log(query);

  let numberPattern = /\d+/g;
  let number = q.match(numberPattern) || [];

  switch (true) {

    case q.startsWith('which of the following numbers is the largest'):
      const i = n.split(', ').map(parseInt);
      console.log(JSON.stringify(i));
      return Math.max(i);

    case q.startsWith('which of the following numbers is both a square and a cube'):
      return '';

    case 'what is your name':
      return 'xcafaaard';

    case number.length > 0:
      console.log(JSON.stringify(number));

        if (q.match('plus')) {
            return number[0] + number[1];
        }
        else if (q.match('multiplied by')) {
            return number[0] * number[1];
        }
  }
};