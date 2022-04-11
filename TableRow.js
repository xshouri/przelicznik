import React from 'react';

class TableRow extends React.Component{
    render(){
        return( 
        <tr>
            <td>{this.props.unit}</td>
            <td>{eval(this.props.number.toString()+this.props.calc)}</td>
        </tr>);
    }
}
export default TableRow;