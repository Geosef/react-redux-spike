let initialState = {
    history: [{
        squares: Array(9).fill(null),
    }],
    stepNumber: 0,
    xIsNext: true,
    winner: null
};

export const move = 'move';
export const jump = 'jump';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case move:
            const history = state.history.slice(0, state.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            const index = action.index;
            if (state.winner || squares[index]) {
                return state;
            }
            squares[index] = state.xIsNext ? 'X' : 'O';
            return {
                history: history.concat([{
                    squares: squares,
                }]),
                stepNumber: history.length,
                xIsNext: !state.xIsNext,
                winner: calculateWinner(squares)
            };
        case jump:
            return {
                history: state.history,
                stepNumber: action.step,
                xIsNext: (action.step % 2) === 0,
                winner: calculateWinner(state.history[action.step].squares)
            };
        default:
            return state
    }
}


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    if (squares.some(x => x == null)) {
        return null;
    }

    return 'Tie';
}