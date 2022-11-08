export {};

// Given a string, cycle the first letter of each word back one word,
// and cycle the last letter of each word forward one word.

// Example input:  "who welld horly"
// Example output: "why hello world"

// Do this example by hand:
// Input:  "bes le uoogit"
// Output: "let us boogie"

const calculate = (str: string) => {
  if (str == '') {
    return '';
  }

  const words = str.split(' ');
  const final: any[] = [];

  words.forEach((word: string, index: number) => {
    const nextIndex = (index + 1 + words.length) % words.length;
    const previousIndex = (index - 1 + words.length) % words.length;
    const lastWord = words[previousIndex];
    const lastWordLastChar = lastWord.charAt(lastWord.length - 1);
    const nextWord = words[nextIndex];
    const nextWordFirstChar = nextWord.charAt(0);
    const newWord = `${nextWordFirstChar}${word.slice(
      1,
      word.length - 1,
    )}${lastWordLastChar}`;
    final.push(newWord);
  });

  return final.join(' ');
};

console.log(calculate('bes le uoogit'));
