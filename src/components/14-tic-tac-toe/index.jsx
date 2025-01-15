// Import necessary hooks from React
import { useEffect, useState } from "react";

// Importing a custom grid component
import CustomGrid from "./CustomGrid";

// Importing a circle icon from react-icons
import { FaRegCircle } from "react-icons/fa";

// Importing a cross icon from react-icons
import { RxCross2 } from "react-icons/rx";

// Define the number of rows and columns in the Tic-Tac-Toe grid 
const gridValues = {
   rows: 3,
   columns: 3,
};

// Initialize the grid data as a 2D array filled with empty strings
let gridData = Array.from(

   { length: gridValues.rows },

   () => Array.from(

      { length: gridValues.columns },

      () => ""

   )

);

// Define the main TicTacToe component
export default function TicTacToe() {

   // State to track the current player ('x' or 'o')
   const [player, setPlayer] = useState('x');
   // State to track the grid state
   const [gridSquares, setGridSquares] = useState(gridData);

   const [winningPattern, setWinningPattern] = useState(null);
   // State to track the winner ('x' or 'o')
   const [winner, setWinner] = useState(null);
   // State to track if the game ends in a draw
   const [draw, setDraw] = useState(false);

   // Function to count the number of non-empty squares (signed squares)
   function countSignedSquares() {

      // Initialize a counter for signed squares
      let counterSignedSquares = 0;

      // Traverse each row and column in gridSquares
      gridSquares.forEach(row => row.forEach(col => col !== "" ? counterSignedSquares++ : null));

      // Return the count of signed squares
      return counterSignedSquares;

   };

   // Function to check for a winner
   function getWinner() {

      // Define winning patterns; each pattern is an array of positions
      const winPatterns = [
         [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }],
         [{ row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }],
         [{ row: 2, col: 0 }, { row: 2, col: 1 }, { row: 2, col: 2 }],
         [{ row: 0, col: 0 }, { row: 1, col: 0 }, { row: 2, col: 0 }],
         [{ row: 0, col: 1 }, { row: 1, col: 1 }, { row: 2, col: 1 }],
         [{ row: 0, col: 2 }, { row: 1, col: 2 }, { row: 2, col: 2 }],
         [{ row: 0, col: 0 }, { row: 1, col: 1 }, { row: 2, col: 2 }],
         [{ row: 0, col: 2 }, { row: 1, col: 1 }, { row: 2, col: 0 }],
      ];

      // Check each win pattern for a winner
      for (const pattern of winPatterns) {

         const [first, second, third] = pattern.map(pos => gridSquares[pos.row][pos.col]);

         // If all three positions are filled with the same marker, return the winner
         if (first && first === second && first === third) {

            setWinningPattern(pattern);

            // Return the winner ('x' or 'o')
            return first;

         };

      };

      // No winner found
      return null;

   };

   // useEffect hook to check for a winner or a draw after each move
   useEffect(() => {

      // Check for a current winner
      const currentWinner = getWinner();

      // Update the winner state if found
      if (currentWinner) {
         setWinner(currentWinner);
      };

      // Check for a draw (all squares filled with no winner)
      const currentDraw = countSignedSquares() === gridValues.rows * gridValues.columns && !currentWinner;

      if (currentDraw) {

         // Update the draw state
         setDraw(true);

      } else {

         // Reset draw state if not a draw
         setDraw(false);

      };

   }, [gridSquares]); // Runs the effect when gridSquares state changes

   // Function to handle user selection of a square
   function handleSquareSelection(rowIndex, colIndex) {

      // Prevent further moves if there's already a winner or the square is already taken
      if (winner || gridSquares[rowIndex][colIndex] !== "") return;

      // Create a copy of the current grid for immutability
      const newGridSquares = gridSquares.map(row => row.slice()); // Create a copy of the grid

      // Place the current player's marker in the selected square (either 'x' or 'o')
      newGridSquares[rowIndex][colIndex] = player;

      // Update the grid state with the new board
      setGridSquares(newGridSquares);

      // Switch to the other player ('x' to 'o' and vice versa)
      setPlayer(prevPlayer => (prevPlayer === 'x' ? 'o' : 'x'));

   };

   // Function to reset the game board
   function clearBoard() {

      // Reset the grid to empty squares
      setGridSquares(Array.from({ length: gridValues.rows }, () => Array(gridValues.columns).fill('')));

      // Reset winner state
      setWinner(null);

      // Reset winning pattern state
      setWinningPattern(null);

      // Reset draw state
      setDraw(false);

      // Reset back to first player
      setPlayer('x');

   };

   return (

      <section id="tic-tac-toe" className={`relative min-h-screen w-full py-20 md:py-48 font-mono bg-violet-400`}>

         <h2 className={`text-4xl text-center text-purple-700 font-bold`}>Tic-Tac-Toe</h2>

         <div className="flex flex-col justify-center items-center gap-2 mt-4">

            {/* Button to reset the game */}
            <button className={`border px-2`} onClick={clearBoard}>
               Reset
            </button>

            {/* Display whose turn it is based on the current player */}
            {
               player === 'x' ?
                  <div className={`flex items-center gap-2 text-center text-lg font-semibold`}>
                     Player <RxCross2 /> turn
                  </div> :
                  <div className={`flex items-center gap-2 text-center text-lg font-semibold`}>
                     Player <FaRegCircle /> turn
                  </div>
            }

            {/* CustomGrid component to render the game board with current grid state */}
            <CustomGrid
               data={gridSquares.map((row, rowIndex) =>
                  row.map((cell, colIndex) => {
                     let color = 'blue'; // Default cell color
                     if (winningPattern && winningPattern.some(pos => pos.row === rowIndex && pos.col === colIndex)) {
                        color = 'red'; // Color for winning pattern cells
                     }
                     return { cell, color }; // Include color in return object 
                  })
               )}
               handleSquareSelection={handleSquareSelection} // Function for handling player moves
            />

            {/* Display the winner if there is one */}
            {
               winner &&
               <div className={`text-center text-2xl font-semibold`}>

                  Winner: {winner === 'x' ? 'X' : 'O'}

               </div>
            }

            {/* Display a message if the game ends in a draw */}
            {
               draw &&
               <div className={`text-center text-2xl font-semibold`}>

                  It's a draw!

               </div>
            }

         </div>

      </section>

   );

};
