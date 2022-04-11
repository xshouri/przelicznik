import React from 'react';

class ConverterDataInput extends React.Component{
    constructor(props){
      super(props);
      this.OnValue1Change = this.OnValue1Change.bind(this);
      this.OnValue2Change = this.OnValue2Change.bind(this);
      this.state = {d1: 0, d2: 0, d3: 0, result: 0};
    }
    
    OnResultChange(){
      let tempResult = this.state.d1 * this.state.d2 * this.state.d3/100;
      this.setState({result:tempResult})
      this.props.OnChange(this.state.result);
    }
   
    OnValue1Change(value){
      this.setState({d1:value});
      this.OnResultChange();
    }
    OnValue2Change(value){
      this.setState({d2:value});
      this.OnResultChange();
    }
   
    render(){
      return(
      <div>
      </div>);
    }
}
export default ConverterDataInput;