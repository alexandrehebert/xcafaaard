module.exports = query => {

  const [id, q, n] = query.split(': ');

  console.log(id, query, q);

  var numberPattern = /\d+/g;
  var number = q.match(numberPattern) || [];

  if (number.length) {
    console.log(JSON.stringify(number.map(parseInt)));

  }

  switch (q) {
    case 'which of the following numbers is the largest':
      const i = n.split(', ').map(parseInt);
      console.log(JSON.stringify(i));
      return;
    case 'what is your name':
      return 'xcafaaard';
    case number.length > 0: {
      console.log(JSON.stringify(number));
      return number[0] + number[1]
    }
  }
};