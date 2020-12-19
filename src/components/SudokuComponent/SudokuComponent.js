import React from "react";
import Container from "react-bootstrap/Container";
import "./SudokuComponent.css";
import { SudokuProvider } from './context/SudokuContext';
import { Game } from './Game';

const SudokuComponent = () => {

  return (
    <Container fluid className="sudoku-container">
      <SudokuProvider>
        <Game />
      </SudokuProvider>
    </Container>
  );
};

export default SudokuComponent;
