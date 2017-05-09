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

  console.log(query);

  let numberPattern = /\d+/g;
  let number = (q.match(numberPattern) || []).map(i => parseInt(i, 10));

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

    case !!query.match('primes'):
      const primes = [...number].filter(isPrime);
      return primes.length > 0 ? primes.join(', ') : '';

    case number.length > 0:
      if (q.match('plus')) {
        return _.sum(number);
      } else if (q.match('power')) {
        return Math.pow(number[0], number[1]);
      } else if (q.match('multiplied by')) {
        return number[0] * number[1];
      } else if (q.match('minus')) {
        return number[0] - number[1];
      } else if (q.match('Fibonacci')) {
        return fib(parseInt(number[0]));
      }
      return;
  }

  return '';
};