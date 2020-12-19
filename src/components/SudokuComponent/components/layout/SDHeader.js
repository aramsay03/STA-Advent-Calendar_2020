import React from 'react';

/**
 * React component for the Header Section.
 */
export const Header = (props) => {
  return (
    <header className="sdheader">
      {/* <h1>
        Su<span className="sdheader__group-one">do</span><span className="sdheader__group-two">ku</span>
      </h1> */}
      <h2 onClick={props.onClick}>
        New Game
      </h2>
    </header>
  )
}
