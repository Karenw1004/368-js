import React from 'react';
import Cell from './Cell';

class Row extends React.Component {
    render(){
        const {rowNumber} = this.props;
        return (
            <tr key={rowNumber}>
                <Cell row={rowNumber} col={0}/>
                <Cell row={rowNumber} col={1}/>
                <Cell row={rowNumber} col={2}/>
                <Cell row={rowNumber} col={3}/>

                <Cell row={rowNumber} col={4}/>
                <Cell row={rowNumber} col={5}/>
                <Cell row={rowNumber} col={6}/>

                <Cell row={rowNumber} col={7}/>
                <Cell row={rowNumber} col={8}/>
                
            </tr>
        );
    }
}

export default Row;