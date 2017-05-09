module.exports = query => {

  const [id, q] = query.split(/.*?: /);

  console.log(query);

  let numberPattern = /\d+/g;
  let number = q.match(numberPattern) || [];

  switch (true) {

    case !!q.match('the largest'):
      const i = q.match(numberPattern).map(parseInt);
      console.log(JSON.stringify(i));
      return Math.max(...i);

    case !!q.match('what colour is a banana'):
      console.log('banana');
      return 'yellow';

    case !!q.match('who is the Prime Minister of Great Britain'):
      return 'Theresa May';

    case !!q.match('who played James Bond in the film Dr No'):
      return 'Sean Connery';

    case !!q.match('what currency did Spain use before the Euro'):
      return 'pesetas';

    case !!q.match('square and a cube'):
      console.log('square');
      return '';

    case !!q.match('which city is the Eiffel tower in'):
      console.log('Paris');
      return 'Paris';

    case !!q.match('what is your name'):
      return 'xcafaaard';

    case number.length > 0:
      console.log(JSON.stringify(number));

      if (q.match('plus')) {
        console.log(number[0] + number[1]);
        return number[0] + number[1];
      }
      else if (q.match('multiplied by')) {
        console.log(number[0] * number[1]);
        return number[0] * number[1];
      }
      return;
  }

  return '';
};