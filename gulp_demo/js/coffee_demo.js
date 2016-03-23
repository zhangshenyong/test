var copy, end, globals, middle, name, numbers, numbers1, ref, start;

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(start = numbers.slice(0, 3));

console.log(middle = numbers.slice(3, -2));

console.log(end = numbers.slice(-2));

console.log(copy = numbers.slice(0));

numbers1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

[].splice.apply(numbers1, [3, 4].concat(ref = [-3, -4, -5, -6])), ref;

console.log(numbers1);

globals = ((function() {
  var results;
  results = [];
  for (name in window) {
    results.push(name);
  }
  return results;
})()).slice(0, 10);

console.log(globals);
