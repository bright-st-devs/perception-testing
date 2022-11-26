export type TestDatum = {
  instructions: string;
  correctRow: number; // 1-based; 0 === 'none of the above'
  colours: string[][];
};

var black_ = "#000000";
var red___ = "#ff0000";
var green_ = "green";
var purple = "purple";
var pink__ = "#eb13b5";
var orange = "#d45a08";

function x(colour: string): string {
  return "<span style=\"color: " + colour + "\">X</span>"
}

export const testData: TestDatum[] = [
  // Test 1
  {
    instructions: " Select the row with the red " + x(red___),
    correctRow: 2,
    colours: [
      [black_, black_, black_, black_, black_, black_, black_, black_, black_],
      [black_, black_, black_, black_, black_, black_, red___, black_, black_,],
      [black_, black_, black_, black_, black_, black_, black_, black_, black_,],
      [black_, black_, black_, black_, black_, black_, black_, black_, black_,],
      [black_, black_, black_, black_, black_, black_, black_, black_, black_,],
      [black_, black_, black_, black_, black_, black_, black_, black_, black_,],
      [black_, black_, black_, black_, black_, black_, black_, black_, black_,],
      [black_, black_, black_, black_, black_, black_, black_, black_, black_,],
      [black_, black_, black_, black_, black_, black_, black_, black_, black_,],
    ],
  },
  // Test 2
  {
    instructions: " Select the row with the red " + x(red___),
    correctRow: 0,
    colours: [
      [black_, black_, black_, black_, black_, black_, black_, black_, black_,],
      [black_, black_, black_, black_, black_, black_, black_, black_, black_,],
      [black_, black_, black_, black_, black_, black_, black_, black_, black_,],
      [black_, black_, black_, black_, black_, black_, black_, black_, black_,],
      [black_, black_, black_, black_, black_, black_, black_, black_, black_,],
      [black_, black_, black_, black_, black_, black_, black_, black_, black_,],
      [black_, black_, black_, black_, black_, black_, black_, black_, black_,],
    ],
  },
  // Test 3
  {
    instructions: " Select the row with three red " + x(red___) + "'s ",
    correctRow: 6,
    colours: [
      [red___, black_, black_, red___, black_, black_, red___, black_, black_, black_, red___, black_, black_, black_,],
      [black_, red___, black_, red___, black_, black_, black_, red___, black_, black_, red___, black_, black_, black_,],
      [black_, black_, black_, black_, red___, black_, black_, black_, red___, black_, black_, black_, black_, black_,],
      [black_, red___, black_, black_, black_, black_, red___, black_, black_, black_, black_, red___, black_, red___,],
      [black_, black_, red___, black_, black_, red___, black_, red___, black_, black_, red___, black_, black_, black_,],
      [black_, red___, black_, red___, black_, black_, black_, black_, black_, red___, black_, black_, black_, black_,],
      [red___, black_, black_, red___, black_, black_, black_, red___, black_, red___, black_, black_, black_, red___,],
      [black_, black_, black_, black_, black_, red___, black_, black_, black_, black_, black_, black_, black_, black_,],
      [black_, black_, black_, black_, red___, black_, black_, black_, black_, black_, black_, black_, red___, black_,],

    ],
  },
  // Test 4
  {
    instructions: " Select the row with a red " + x(red___) + " in between a pink " + x(pink__) + " and orange " + x(orange),
    correctRow: 0,
    colours: [
      [red___, pink__, black_, red___, orange, pink__, red___, black_, black_, green_, red___, black_, black_, pink__, red___, green_, black_, black_, orange, orange, black_, black_, pink__, black_, orange, black_, black_, red___, red___, green_, black_, pink__, black_, green_, black_,],
      [green_, red___, pink__, black_, black_, pink__, black_, orange, orange, pink__, black_, green_, black_, red___, black_, black_, red___, orange, black_, black_, green_, pink__, green_, black_, red___, red___, black_, pink__, black_, black_, orange, green_, black_, pink__, black_,],
      [red___, red___, black_, black_, green_, pink__, orange, black_, red___, pink__, black_, black_, orange, orange, pink__, black_, green_, black_, black_, red___, red___, black_, green_, orange, black_, black_, pink__, green_, black_, black_, orange, black_, black_, green_, black_,],
      [black_, red___, black_, black_, green_, green_, green_, black_, pink__, red___, black_, red___, orange, red___, black_, pink__, black_, black_, black_, green_, red___, black_, black_, pink__, green_, black_, orange, pink__, orange, black_, green_, pink__, black_, green_, black_,],
      [pink__, black_, red___, green_, orange, red___, black_, pink__, pink__, black_, red___, orange, red___, red___, black_, green_, black_, orange, pink__, red___, black_, green_, red___, black_, black_, green_, pink__, pink__, black_, black_, orange, orange, black_, green_, black_,],
      [orange, red___, black_, red___, pink__, pink__, black_, green_, orange, red___, black_, pink__, green_, pink__, black_, black_, green_, black_, red___, orange, pink__, black_, green_, green_, black_, pink__, black_, green_, black_, orange, orange, red___, black_, black_, pink__,],
      [red___, black_, pink__, red___, green_, green_, black_, red___, orange, red___, red___, black_, black_, pink__, black_, red___, orange, black_, green_, pink__, red___, black_, black_, black_, orange, red___, black_, green_, green_, pink__, pink__, black_, green_, black_, orange,],
      [black_, red___, pink__, black_, green_, red___, orange, green_, pink__, black_, black_, red___, pink__, black_, black_, orange, red___, red___, black_, black_, green_, black_, orange, pink__, black_, green_, black_, red___, black_, pink__, red___, green_, green_, black_, black_,],
      [green_, black_, black_, red___, red___, pink__, black_, orange, green_, green_, black_, pink__, red___, black_, orange, orange, red___, black_, black_, pink__, red___, green_, black_, orange, green_, black_, black_, red___, black_, pink__, green_, black_, orange, green_, pink__,],

    ],
  },
  // Test 5
  {
    instructions: " Select the row that is in between two rows that have a red " + x(red___) + " in between a green " + x(green_) + " and a purple " + x(purple),
    correctRow: 5,
    colours: [
      [red___, purple, black_, green_, black_, green_, red___, black_, purple, black_, red___, purple, black_, green_,],
      [green_, red___, green_, red___, black_, purple, black_, red___, green_, black_, red___, red___, black_, green_,],
      [red___, black_, green_, green_, red___, black_, purple, black_, red___, black_, green_, black_, purple, red___,],
      [black_, red___, green_, black_, black_, green_, red___, purple, green_, black_, red___, red___, purple, red___,],
      [green_, black_, red___, black_, purple, red___, black_, red___, red___, black_, red___, purple, green_, black_,],
      [black_, red___, green_, red___, black_, black_, purple, black_, purple, red___, green_, black_, green_, black_,],
      [red___, black_, green_, red___, purple, black_, black_, red___, black_, red___, black_, green_, black_, red___,],
      [purple, black_, green_, red___, black_, red___, purple, black_, green_, red___, black_, purple, red___, black_,],
      [black_, red___, green_, black_, red___, purple, black_, green_, black_, black_, red___, green_, purple, black_,],

    ],
  },
  // Test 6
  {
    instructions: " Select the row that has no red " + x(red___),
    correctRow: 3,
    colours: [
      [purple, red___, black_, green_, pink__, green_, orange, black_, black_, green_, orange, purple, pink__, green_,],
      [green_, red___, orange, red___, black_, purple, black_, orange, pink__, black_, purple, red___, black_, purple,],
      [purple, black_, green_, orange, black_, black_, purple, black_, pink__, black_, black_, orange, purple, green_,],
      [black_, orange, red___, pink__, black_, green_, purple, purple, green_, black_, red___, pink__, purple, orange,],
      [orange, black_, pink__, black_, purple, red___, black_, orange, pink__, black_, red___, purple, green_, black_,],
      [black_, red___, orange, red___, black_, black_, purple, black_, orange, red___, green_, pink__, green_, black_,],
      [orange, black_, pink__, red___, purple, black_, black_, pink__, black_, pink__, black_, green_, orange, red___,],
      [purple, black_, pink__, red___, black_, red___, purple, black_, green_, orange, black_, purple, red___, black_,],
      [orange, pink__, green_, black_, red___, purple, black_, green_, black_, black_, red___, pink__, purple, black_,],

    ],
  },
  // Test 7
  {
    instructions: " Select the row has 2 red " + x(red___) + "s 4 green " + x(green_) + "s and 1 pink " + x(pink__),
    correctRow: 8,
    colours: [
      [red___, purple, orange, green_, black_, pink__, red___, black_, purple, black_, pink__, purple, black_, green_,],
      [green_, pink__, green_, red___, black_, purple, black_, pink__, green_, black_, red___, orange, black_, green_,],
      [red___, black_, green_, orange, red___, black_, purple, black_, pink__, black_, green_, pink__, purple, orange,],
      [black_, red___, green_, black_, black_, orange, red___, purple, green_, black_, red___, pink__, black_, orange,],
      [green_, black_, red___, black_, purple, orange, black_, pink__, orange, black_, red___, purple, pink__, black_,],
      [pink__, red___, green_, red___, orange, black_, purple, pink__, purple, red___, green_, black_, green_, black_,],
      [orange, black_, green_, orange, purple, black_, pink__, red___, black_, red___, black_, green_, green_, red___,],
      [green_, black_, pink__, green_, black_, red___, purple, black_, green_, orange, black_, green_, red___, black_,],
      [black_, red___, orange, pink__, red___, purple, black_, green_, black_, pink__, red___, green_, purple, orange,],

    ],
  },
  // Test 8
  {
    instructions: " Select the row that is in between two rows that have a red " + x(red___) + " in between a green " + x(green_) + " and a purple " + x(purple),
    correctRow: 6,
    colours: [
      [red___, purple, black_, green_, orange, pink__, red___, black_, pink__, black_, red___, purple, orange, green_,],
      [green_, red___, pink__, red___, black_, orange, black_, red___, pink__, black_, red___, purple, black_, green_,],
      [red___, black_, orange, green_, red___, black_, pink__, black_, red___, purple, green_, black_, purple, red___,],
      [black_, red___, orange, black_, pink__, green_, red___, purple, green_, black_, pink__, red___, purple, red___,],
      [green_, black_, red___, orange, purple, red___, black_, pink__, red___, orange, red___, purple, green_, black_,],
      [black_, red___, orange, pink__, green_, black_, purple, black_, purple, red___, orange, green_, purple, black_,],
      [red___, black_, green_, red___, orange, black_, black_, pink__, green_, pink__, black_, green_, black_, red___,],
      [purple, black_, green_, orange, black_, red___, purple, pink__, green_, red___, black_, purple, red___, black_,],
      [black_, red___, green_, pink__, red___, purple, black_, green_, orange, black_, red___, orange, purple, black_,],

    ],
  },
  // Test 9
  {
    instructions: " Select the row that is in between two rows that have a red " + x(red___) + " in between a green " + x(green_) + " and a purple " + x(purple),
    correctRow: 0,
    colours: [
      [orange, purple, black_, pink__, black_, green_, red___, orange, purple, black_, red___, purple, black_, green_,],
      [pink__, red___, orange, red___, black_, purple, black_, red___, orange, black_, red___, pink__, black_, green_,],
      [red___, black_, green_, orange, red___, black_, purple, pink__, red___, black_, green_, black_, pink__, red___,],
      [black_, orange, green_, black_, black_, pink__, red___, purple, green_, orange, red___, red___, purple, red___,],
      [pink__, black_, red___, orange, purple, red___, black_, red___, red___, pink__, red___, purple, green_, black_,],
      [black_, red___, orange, red___, black_, black_, purple, black_, purple, red___, pink__, black_, green_, black_,],
      [red___, black_, green_, pink__, purple, black_, black_, red___, black_, orange, black_, green_, pink__, red___,],
      [purple, black_, orange, red___, black_, red___, purple, pink__, green_, red___, black_, purple, pink__, black_,],
      [black_, red___, green_, orange, red___, purple, black_, pink__, black_, black_, red___, orange, purple, black_,],

    ],
  },
  // Test 10
  {
    instructions: " Select the row that is in between two rows that have a red " + x(red___) + " in between a green " + x(green_) + " and a purple " + x(purple),
    correctRow: 2,
    colours: [
      [red___, pink__, black_, green_, black_, green_, red___, black_, purple, orange, red___, purple, black_, orange,],
      [pink__, red___, green_, red___, orange, purple, black_, red___, pink__, black_, red___, orange, black_, green_,],
      [red___, pink__, green_, green_, red___, black_, purple, pink__, orange, black_, green_, black_, pink__, red___,],
      [black_, pink__, green_, black_, black_, green_, orange, purple, green_, black_, red___, red___, pink__, red___,],
      [green_, black_, pink__, black_, purple, red___, black_, orange, red___, black_, red___, pink__, green_, red___,],
      [black_, red___, pink__, red___, black_, orange, purple, black_, purple, red___, pink__, black_, green_, black_,],
      [orange, black_, green_, pink__, purple, black_, black_, pink__, black_, red___, black_, green_, black_, orange,],
      [purple, pink__, green_, red___, black_, orange, purple, black_, orange, red___, orange, purple, pink__, black_,],
      [pink__, red___, green_, black_, red___, purple, black_, green_, pink__, black_, red___, green_, orange, black_,],

    ],
  },
]
