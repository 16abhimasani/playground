const isValid = (s: string): boolean => {
  // use stack to load up opening characters for pop checking
  // must be 0 length for all pairs to be closed
  const openStack: string[] = [];
  // map closing to opening characters so we can quick check if character isNotClosing
  const map: { [key: string]: string } = { ')': '(', ']': '[', '}': '{' };

  for (const char of s) {
    if (!map[char]) {
      openStack.push(char);
    } else if (openStack.pop() !== map[char]) {
      // improper closing
      return false;
    }
  }
  return openStack.length == 0;
};

console.log(isValid('()'));
console.log('wiggle jiggle');
