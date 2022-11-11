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
]
