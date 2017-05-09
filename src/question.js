isPrime = require('prime-number');
_ = require('lodash');

function fib(n, undefined) {
  if (fib.cache[n] === undefined) {
    fib.cache[n] = fib(n - 1) + fib(n - 2);
  }

  return fib.cache[n];
}
fib.cache = [0, 1, 1];

module.exports = query => {

  const [id, q] = query.split(/.*?: /);

  console.log(q);

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
      return 'peseta';

    case !!q.match('square and a cube'):
      console.log('square');
      return '';

    case !!q.match('which city is the Eiffel tower in'):
      console.log('Paris');
      return 'Paris';

    case !!q.match('what is your name'):
      return 'xcafaaard';

    case q.match('primes'):
      console.log(isPrime(number[0]));
      const primes = _.filter(number, i => isPrime(i));
      return primes.join(', ');

    case number.length > 0:
      if (q.match('plus')) {
        console.log(number[0] + number[1]);
        return number[0] + number[1];
      } else if (q.match('multiplied by')) {
        console.log(number[0] * number[1]);
        return number[0] * number[1];
      } else if (q.match('multiplied by')) {
        return number[0] - number[1];
      } else if (q.match('Fibonacci')) {
        return fib(parseInt(number[0]));
      }
      return;
  }

  return '';
};