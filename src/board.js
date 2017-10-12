import React from 'react';
import Square from './square'

export default function Board() {
    const three = [0, 1, 2];
    return (<div>
        {three.map((row) =>
            (<div className="board-row" key={row}>
                {three.map((col) =>
                    (<Square index={row * 3 + col} key={col}/>)
                )}
            </div>)
        )}
    </div>);
}
