module.exports = query => {

  const [id, q] = query.split(/.*?: /);

  console.log(query);

  var numberPattern = /\d+/g;
  var number = q.match(numberPattern) || [];

  switch (true) {
    case q.startsWith('which of the following numbers is the largest'):
      const i = n.split(', ').map(parseInt);
      console.log(JSON.stringify(i));
      return Math.max(i);
    case 'what is your name':
      return 'xcafaaard';
    case number.length > 0: {
      console.log(JSON.stringify(number));
      return number[0] + number[1]
    }
  }
};