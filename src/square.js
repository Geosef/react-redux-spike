import React from 'react';
import {connect} from 'react-redux';

function SquarePresentation({index, value, onClick}) {
    return (
        <button className="square" onClick={() => onClick(index)}>
            {value}
        </button>
    );
}

function mapStateToProps(state, ownProps) {
    let value = state.history[state.stepNumber].squares[ownProps.index];
    return {
        value: value || (state.winner ? '-' : '')
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClick(index) {
            dispatch({type: 'move', index})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SquarePresentation)

