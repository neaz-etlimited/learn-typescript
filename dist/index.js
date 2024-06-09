function factorial_recurse(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else return num * factorial_recurse(num - 1);
}

console.log(factorial_recurse(5));
