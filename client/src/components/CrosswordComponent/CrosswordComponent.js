import React from "react";
import Crossword from '@jaredreisinger/react-crossword';
import './CrosswordComponent.css';

const data = {
  across: {
    4: {
      clue: 'They should have their own tartan (8)',
      answer: 'CODECLAN',
      row: 3,
      col: 10,
    },
    5: {
      clue: "The STA's sixth sense (7)",
      answer: 'PURPOSE',
      row: 5,
      col: 5,
    },
    6: {
      clue: 'Once a week, every week (8)',
      answer: 'TOWNHALL',
      row: 7,
      col: 7,
    },
    9: {
      clue: 'If you are doing this, you are one (9)',
      answer: 'VOLUNTEER',
      row: 11,
      col: 0,
    },
    11: {
      clue: 'Al crochets myths but loves it here (16)',
      answer: 'SCOTTISHTECHARMY',
      row: 13,
      col: 2,
    },
    12: {
      clue: "You never know who you might meet here but it's always fun (5)",
      answer: 'DONUT',
      row: 15,
      col: 12,
    },
    13: {
      clue:
        'You could catch fish with your efforts here, or just make friends (7)',
      answer: 'NETWORK',
      row: 17,
      col: 8,
    },
    14: {
      clue: "She's a goddess and the first STA product (5)",
      answer: 'ELEOS',
      row: 20,
      col: 7,
    },
  },
  down: {
    1: {
      clue: "Favourite side dish for my curry, but only if you can't spell (4)",
      answer: 'JIRA',
      row: 0,
      col: 16,
    },
    2: {
      clue: 'Begins at home (7)',
      answer: 'CHARITY',
      row: 2,
      col: 7,
    },
    3: {
      clue: 'A fishy new way to keep your feet and your money nearby (4)',
      answer: 'SOLE',
      row: 2,
      col: 11,
    },
    5: {
      clue: 'What do you mean you have never listened to it? (7)',
      answer: 'PODCAST',
      row: 5,
      col: 5,
    },
    7: {
      clue: "We've cooked up a few here this year (8)",
      answer: 'HOMEBREW',
      row: 7,
      col: 11,
    },
    8: {
      clue: 'Fast and flat, literally (9)',
      answer: 'DASHBOARD',
      row: 10,
      col: 13,
    },
    10: {
      clue: 'Feels like life is one every day and we rise every time (9)',
      answer: 'CHALLENGE',
      row: 12,
      col: 9,
    },
    11: {
      clue: 'You can give it some, take up some, or just chat (5)',
      answer: 'SLACK',
      row: 13,
      col: 2,
    },
  },
};

export default function CrosswordComponent() {

  return (
    <div className="crossword-container">
      <Crossword
        data={data}
        theme={{ numberColor: 'black', highlightBackground: '#66B2B2' }}
      />
    </div>
  );
}
