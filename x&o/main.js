/*title = document.querySelector('.title');
let turn = 'X';
let squares =[];
function winner()
{
    for( let i=1; i<10; i++)
    {
    squares[i] = document.getElementById('item'+i);

    }
    if(squares[1] === squares[2] && squares[2] === squares[3] && squares[1] !== '')
    {
        title.innerHTML =`${squares[1]} is the winner!`;
        setInterval(function(){title.innerHTML+='. '},1000);
        setTimeout(function(){location.reload()},4000);
    }
    else if(squares[4] === squares[5] && squares[5] === squares[6] && squares[4] !== '')
        {title.innerHTML =`${squares[4]} is the winner!`;
    
        title.innerHTML =`${squares[4]}winner`;
        }
    else if(squares[7] === squares[8] && squares[8] === squares[9] && squares[7] !== '')
            {
            title.innerHTML =`${squares[7]} is the winner!`;
            }
            
        
    else if(squares[1] === squares[5] && squares[5] === squares[9] && squares[1] !== '')
    {
            title.innerHTML =`${squares[3]} is the winner!`;
        
    }
    else if(squares[3] === squares[5] && squares[5] === squares[7] && squares[3] !== '')
        {
            title.innerHTML =`${squares[3]}winner`;
        }

}
function game(id)
{
    let element = document.getElementById(id);
    if (turn === 'X' && element.innerHTML == '')
    {
        element.innerHTML = 'X';
        turn = 'O';
        title.innerHTML = 'O';
    } else if(turn === 'O' && element.innerHTML === '')
    {
        element.innerHTML = 'O';
        turn = 'X';
        title.innerHTML = 'X';
    }
    winner();
}
*/
let title = document.querySelector('.title'); // Reference to the title element
let turn = 'X'; // Initialize the first turn
let squares = []; // To store the board state

// Function to check for a winner
function winner() {
    // Store the board state in the squares array
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }

    // Define winning combinations
    const winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    // Check each winning combination
    for (let combination of winningCombinations) {
        let [a, b, c] = combination;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            title.innerHTML = `${squares[a]} is the winner!`; // Display the winner

             // Add the "winner" class to the winning squares
            document.getElementById('item' + a).classList.add('winner');
            document.getElementById('item' + b).classList.add('winner');
            document.getElementById('item' + c).classList.add('winner');

            setInterval(() => {
                title.innerHTML += '.'; // Add dots for effect
            }, 1000);
            setTimeout(() => {
                location.reload(); // Reload the game after 4 seconds
            }, 4000);
            return; // Stop further checks if a winner is found
        }
    }

    // Check for a draw (if all squares are filled and no winner)
    if (squares.every((square, index) => index === 0 || square !== '')) {
        title.innerHTML = "It's a draw!";
        setTimeout(() => {
            location.reload(); // Reload the game after 4 seconds
        }, 4000);
    }
}



// Function to handle a player's move
function game(id) {
    let element = document.getElementById(id);

    // Check if the square is empty
    if (element.innerHTML === '') {
        // Place the current player's mark
        element.innerHTML = turn;

        // Switch turns
        turn = turn === 'X' ? 'O' : 'X';

        // Update the title to show the current player's turn
        title.innerHTML = `${turn}'s Turn`;

        // Check for a winner or draw
        winner();
    }
}
