import React from 'react';
import {connect} from 'react-redux';
import Board from './board';

function GamePresentation({history, winner, nextPlayer, jumpTo}) {
    const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + nextPlayer;
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board/>
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        history: state.history,
        winner: state.winner,
        nextPlayer: state.xIsNext ? 'X' : 'O'
    }
}

function mapDispatchToProps(dispatch) {
    return {
        jumpTo(step) {
            dispatch({type: 'jump', step})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePresentation)
