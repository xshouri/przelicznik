import React from 'react';
import ConverterDataOutput from './ConverterDataOutput';
import InputField from './InputField';
import SelectType from './SelectType';
import SelectUnit from './SelectUnit';

const typeInfo = [
  {type: 'czas', name: 'czas'},
  {type: 'dlugosc', name: 'długość'},
  {type: 'masa', name: 'masa'},
  {type: 'pamiec', name: 'pamięć'},
  {type: 'powierzchnia', name: 'powierzchnia'},
  ];
const unitInfo = {
  czas: [{name: 'sekund', calc: ''}, {name: 'minut', calc: '/60'} , {name: 'godzin', calc: '/3600'}, {name: 'dni', calc: '/(3600*24)'}, {name: 'tygodnie', calc: '/(3600*24*7)'}],
  dlugosc: [{name: 'milimetr', calc: ''}, {name: 'centymetr', calc: '/10'}, {name: 'metr', calc: '/(10*100)'}, {name: 'kilometr', calc: '/(10*100*1000)'}],
  masa: [{name: 'miligram', calc: ''}, {name: 'gram', calc: '/1000'}, {name: 'kilogram', calc: '/(1000*1000)'}, {name: 'tona', calc: '/(1000*1000*1000)'}],
  pamiec: [{name: 'bit', calc: ''}, {name: 'bajt', calc: '/8'}, {name: 'kilobajt', calc: '/(8*1024)'}, {name: 'megabajt', calc: '/(8*1024*1024)'}, {name: 'gigabajt', calc: '/(8*1024*1024*1024)'}],
  powierzchnia: [{name: 'milimetr3', calc: ''}, {name: 'centymetr3', calc: '/1000'}, {name: 'decymetr3', calc: '/(1000*1000)'}, {name: 'metr3', calc: '/(1000*1000*1000)'}]
};
 

class Converter extends React.Component{
    constructor(props){
      super(props);
      this.OnTypeChange = this.OnTypeChange.bind(this);
      this.OnUnitChange = this.OnUnitChange.bind(this);
      this.OnNumberChange = this.OnNumberChange.bind(this);
      this.state = {
        type: 'czas',
        unit: 'sekund',
        number: 0
      };
    }
    
    OnTypeChange(type){
      this.setState({
        type: type,
        unit: unitInfo[type][0].name
      });
    }
    OnUnitChange(unit){
      console.log(unit);
      this.setState({unit: unit});
    }
    OnNumberChange(number){
      this.setState({number: number});
    }
    
    render(){
      return(
      <div className='converter'>
        <div className='inputContainer'>
          <InputField OnValueChange={this.OnNumberChange} number={this.state.number}/>
          <SelectType typeInfo={typeInfo} type={this.state.type} onChange={this.OnTypeChange}/>
          <SelectUnit unitInfo={unitInfo} type={this.state.type} unit={this.state.unit} onChange={this.OnUnitChange}/>
        </div>
        <ConverterDataOutput unit={this.state.unit} type={this.state.type} unitInfo={unitInfo} number={this.state.number}/>
      </div>);
    }
}
export default Converter;