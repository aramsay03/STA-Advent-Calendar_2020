import React from "react";

import Crossword from "@jaredreisinger/react-crossword";

const data = {
  across: {
    1: {
      clue: "one plus one",
      answer: "TWO",
      row: 0,
      col: 4,
    },
    2: {
      clue: "one plus seven",
      answer: "EIGHT",
      row: 3,
      col: 0,
    },
  },
  down: {
    3: {
      clue: "seven minus four",
      answer: "THREE",
      row: 0,
      col: 0,
    },
    4: {
      clue: "three minus two",
      answer: "ONE",
      row: 0,
      col: 6,
    },
  },
}

export default function CrosswordComponent() {
  return <Crossword data={data} />;
}
