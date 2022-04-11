import React from 'react';

class InputField extends React.Component{
    constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {value: this.props.number};
    }
   
    handleChange(e){
      this.setState({value:e.target.value});
      this.props.OnValueChange(e.target.value);
    }
   
    render(){
      return( 
      <div>
          <input type="number" value={this.state.value} onChange={this.handleChange}/>
      </div>);
    }
}
export default InputField;