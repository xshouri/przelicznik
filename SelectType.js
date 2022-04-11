import React from 'react';

class SelectType extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            type: this.props.type
        };
    }
   
    handleChange(e){
        this.setState({type: e.target.value});
        this.props.onChange(e.target.value);
    }
   
    render(){
        const typeOptions = this.props.typeInfo.map((type) => <option key={type.type} value={type.type}>{type.name}</option>);
        return( 
        <div>
            <select value={this.state.type} onChange={this.handleChange}>{typeOptions}</select>
        </div>);
    }
}
export default SelectType;