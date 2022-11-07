// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const isValid = (s: string): boolean => {
  // use stack to load up opening characters for pop checking
  // must be 0 length for all pairs to be closed
  const openStack: string[] = [];
  // map closing to opening characters so we can quick check if character isNotClosing
  const map: { [key: string]: string } = { ')': '(', ']': '[', '}': '{' };
  const openers = ['{', '[', '('];

  for (const char of s) {
    // if not closing character => opening or normal character
    if (!map[char]) {
      if (openers.includes(char)) {
        openStack.push(char);
      }
    }
    // if closing character => check if it matches last opening character in stack 
    else if (openStack.pop() !== map[char]) {
      // improper closing
      return false;
    }
  }
  return openStack.length == 0;
};

const testCases = [
  '()',
  '()[]{}',
  '([)]',
  '([',
  '{[( make sure this closes )]}'
];
testCases.forEach((testCase) => {
  console.log(isValid(testCase), `isValid | ${testCase}`);
});


export {};