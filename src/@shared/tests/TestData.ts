export type TestDatum = {
  instructions: string;
  correctRow: number; // 1-based; 0 === 'none of the above'
  colours: string[][];
};

export const testData: TestDatum[] = [
  // Test 1
  {
    instructions: "TODO: Add instructions",
    correctRow: 2,
    colours: [
      ["black","black","black","black","black","black","black","black","black",],
      ["black","black","black","black","black","black","red","black","black",],
      ["black","black","black","black","black","black","black","black","black",],
    ],
  },
  // Test 2
  {
    instructions: "TODO: Add instructions",
    correctRow: 0,
    colours: [
      ["black","black","black","black","black","black","black","black","black",],
      ["black","black","black","black","black","black","black","black","black",],
      ["black","black","black","black","black","black","black","black","black",],
    ],
  },
  // Test 3
  {
    instructions: "TODO: Add instructions",
    correctRow: 1,
    colours: [
      ["red","black","black","black","black","black","black","black","black",],
      ["black","black","black","black","black","black","black","black","black",],
      ["black","black","black","black","black","black","black","black","black",],
    ],
  },
]
