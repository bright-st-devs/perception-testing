export type TestDatum = {
  instructions: string;
  correctRow: number; // 1-based; 0 === 'none of the above'
  colours: string[][];
};

export const testData: TestDatum[] = [
  // Test 1
  {
    instructions: " Select the row with the red X.",
    correctRow: 2,
    colours: [
      ["black","black","black","black","black","black","black","black","black"],
      ["black","black","black","black","black","black","red","black","black",],
      ["black","black","black","black","black","black","black","black","black",],
      ["black","black","black","black","black","black","black","black","black",],
      ["black","black","black","black","black","black","black","black","black",],
      ["black","black","black","black","black","black","black","black","black",],
      ["black","black","black","black","black","black","black","black","black",],
      ["black","black","black","black","black","black","black","black","black",],
      ["black","black","black","black","black","black","black","black","black",],
    ],
  },
  // Test 2
  {
    instructions: " Select the row with the red X ",
    correctRow: 0,
    colours: [
      ["black","black","black","black","black","black","black","black","black",],
      ["black","black","black","black","black","black","black","black","black",],
      ["black","black","black","black","black","black","black","black","black",],
      ["black","black","black","black","black","black","black","black","black",],
      ["black","black","black","black","black","black","black","black","black",],
      ["black","black","black","black","black","black","black","black","black",],
      ["black","black","black","black","black","black","black","black","black",],
    ],
  },
  // Test 3
  {
    instructions: " Select the row with three X's ",
    correctRow: 6,
    colours: [
      ["red","black","black","red","black","black","red","black","black","black","red","black","black","black",],
      ["black","red","black","red","black","black","black","red","black","black","red","black","black","black",],
      ["black","black","black","black","red","black","black","black","red","black","black","black","black","black",],
      ["black","red","black","black","black","black","red","black","black","black","black","red","black","red",],
      ["black","black","red","black","black","red","black","red","black","black","red","black","black","black",],
      ["black","red","black","red","black","black","black","black","black","red","black","black","black","black",],
      ["red","black","black","red","black","black","black","red","black","red","black","black","black","red",],
      ["black","black","black","black","black","red","black","black","black","black","black","black","black","black",],
      ["black","black","black","black","red","black","black","black","black","black","black","black","red","black",],

    ],
  },
  // Test 4
  {
    instructions: " Select the row that is inbetween two rows that have a X inbetween a green X and a purple X ",
    correctRow: 5,
    colours: [
      ["red","purple","black","green","black","green","red","black","purple","black","red","purple","black","green",],
      ["green","red","green","red","black","purle","black","red","green","black","red","red","black","green",],
      ["red","black","green","green","red","black","purple","black","red","black","green","black","purple","red",],
      ["black","red","green","black","black","green","red","purple","green","black","red","red","purple","red",],
      ["green","black","red","black","purple","red","black","red","red","black","red","purple","green","black",],
      ["black","red","green","red","black","black","purple","black","purple","red","green","black","green","black",],
      ["red","black","green","red","purple","black","black","red","black","red","black","green","black","red",],
      ["purple","black","green","red","black","red","purple","black","green","red","black","purple","red","black",],
      ["black","red","green","black","red","purple","black","green","black","black","red","green","purple","black",],

    ],
  },
]
