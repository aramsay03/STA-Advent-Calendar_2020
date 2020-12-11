import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import originalImage from './images/original.jpg';
import './JigsawComponent.css';

const JigsawComponent = () => {
  const [pieces, setPieces] = useState([]);
  const [shuffled, setShuffled] = useState([]);
  const [solved, setSolved] = useState([]);

  useEffect(() => {
    const piecesArray = [...Array(49)].map((_, index) => ({
      img: `${('0' + (index + 1)).substr(-2)}.jpg`,
      order: index,
      board: 'shuffled',
    }));

    setPieces(piecesArray);
    setShuffled(shufflePieces(piecesArray));
    setSolved([...Array(49)]);
  }, []);

  const handleDragStart = (e, order) => {
    e.dataTransfer.setData('text/plain', order);
  };

  const handleDrop = (e, index, targetName) => {
    let target = null;
    let origin = null;

    //set destination board
    if (targetName === 'shuffled') {
      target = shuffled;
    } else if (targetName === 'solved') {
      target = solved;
    }

    if (target[index]) return; //<------if there's already a piece there, disregard the move

    //calculate which piece is moving
    const pieceOrder = e.dataTransfer.getData('text');
    const pieceData = pieces.find((piece) => piece.order === +pieceOrder);

    //set origin board
    if (pieceData.board === 'shuffled') {
      origin = shuffled;
    } else if (pieceData.board === 'solved') {
      origin = solved;
    }

    //handle moving a piece around the same board
    if (targetName === pieceData.board) {
      target = origin;
    }

    //re-arrange the state of each board to reflect the move, using variables
    origin[origin.indexOf(pieceData)] = undefined;
    target[index] = pieceData;
    pieceData.board = targetName;

    //commit to the move - update the state of the boards (with conditions for moving a piece on the same board)
    if (pieceData.board === 'solved') {
      setSolved([...target]);
      if (target !== origin) {
        setShuffled([...origin]);
      }
    } else if (pieceData.board === 'shuffled') {
      setShuffled([...target]);
      if (target !== origin) {
        setSolved([...origin]);
      }
    }
  };

  const shufflePieces = (piecesArray) => {
    const shuffledArray = [...piecesArray];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const renderPieceContainer = (piece, index, boardName) => {
    return (
      <li
        key={index}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, index, boardName)}
      >
        {piece && (
          <img
            draggable
            alt="puzzle-piece"
            onDragStart={(e) => handleDragStart(e, piece.order)}
            src={require(`./images/${piece.img}`).default}
          />
        )}
      </li>
    );
  };

  const checkIfPuzzleIsComplete = () => {
    if (solved.every(Boolean)) {
      let completed = solved.every(
        (piece, index) => index === solved.length - 1 - piece.order
      );

      if (completed) {
        alert('Congratulations! You have completed the puzzle.');
      } else alert("Hmm...something's not quite right.");
    } else alert("You haven't finished yet!");
  };

  return (
    <>
      <div className="jigsaw">
        <>
          <ul className="jigsaw__shuffled-board">
            {shuffled.map((puzzlePiece, index) => {
              return renderPieceContainer(puzzlePiece, index, 'shuffled');
            })}
          </ul>

          <ol
            className="jigsaw__solved-board"
            style={{ backgroundImage: `url(${originalImage})` }}
          >
            {solved.map((puzzlePiece, index) => {
              return renderPieceContainer(puzzlePiece, index, 'solved');
            })}
          </ol>
        </>
        <Button onClick={() => checkIfPuzzleIsComplete()}>Check Puzzle</Button>
      </div>
    </>
  );
};

export default JigsawComponent;
