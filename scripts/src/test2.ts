const operators = {
  '^': (x: number, y: number) => x ** y,
  '/': (x: number, y: number) => x / y,
  '*': (x: number, y: number) => x * y,
  '-': (x: number, y: number) => x - y,
  '+': (x: number, y: number) => x + y
}

// reverse order of mapping for "split precedence"
// array of tuples
const operatorPriorityMapping = Object
  .entries(operators)
  .reverse();

  /**
   * @param expression - Raw string to operate on
   * @param current - current priority operator 
   * @param remaining - rest of operatorPriorityMapping
   * @returns The arithmetic mean of `x` and `y`
   */
const recursiveCalculate = (
  expression: string,
  [current, ...remaining] = operatorPriorityMapping
): number => {
  // if no operators left
  if (!current) {
    return Number(expression)
  }

  const [operator, fn] = current;
  const terms = expression.trim().split(operator);
  return terms.map(term => recursiveCalculate(term, remaining)).reduce(fn);
}
const testCases = [
  // '2 + 4',
  '2 + 4 * 8 - 6',
];
testCases.forEach((testCase) => {
  console.log(recursiveCalculate(testCase), `: calc => ${testCase}`);
});

export {};