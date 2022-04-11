import React from 'react';

class SelectUnit extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
        };
    }
   
    handleChange(e){
        this.setState({value:e.target.value});
        this.props.onChange(e.target.value);
    }
   
    render(){
        const type = this.props.unitInfo[this.props.type];
        const unitOptions = type.map(
            (unit, id) => {
                return (
                    <option value={unit.name}>{unit.name}</option>
                )
            }
        );
        return( 
        <div>
            <select value={this.state.unit} onChange={this.handleChange}>{unitOptions}</select>
        </div>);
    }
}
export default SelectUnit;