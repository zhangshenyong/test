numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log start   = numbers[0..2]

console.log middle  = numbers[3...-2]

console.log end     = numbers[-2..]

console.log copy    = numbers[..]

numbers1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers1[3..6] = [-3, -4, -5, -6]

console.log numbers1

globals = (name for name of window)[0...10]
console.log globals