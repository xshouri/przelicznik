import React from 'react';
import TableRow from './TableRow';

class ConverterDataOutput extends React.Component{
    number(number){
        switch(this.props.unit){
            case 'minut':
                return this.props.number*60;
            case 'godzin':
                return this.props.number*3600;
            case 'dni':
                return this.props.number*60*60*24;
            case 'tygodnie':
                return this.props.number*60*60*24*7;
            case 'centymetr':
                return this.props.number*10;
            case 'metr':
                return this.props.number*10*100;
            case 'kilometr':
                return this.props.number*10*100*1000;
            case 'gram':
                return this.props.number*1000;
            case 'kilogram':
                return this.props.number*1000*1000;
            case 'tona':
                return this.props.number*1000*1000*1000;
            case 'bajt':
                return this.props.number*8;
            case 'kilobajt':
                return this.props.number*8*1024;
            case 'megabajt':
                return this.props.number*8*1024*1024;
            case 'gigabajt':
                return this.props.number*8*1024*1024*1024;
            case 'centymetr3':
                return this.props.number*1000;
            case 'decymetr3':
                return this.props.number*1000*1000;
            case 'metr3':
                return this.props.number*1000*1000*1000;
            default:
                return this.props.number;
        }
    }
    render(){
        if(this.props.number !== ''){
            const type = this.props.unitInfo[this.props.type];
            const unitRows = type.map(
                (unit, id) => {
                    return (
                        <TableRow unit={unit.name} number={this.number(this.props.number)} calc={unit.calc}/>
                    )
                }
            );
            return(
                <table>
                    {unitRows}
                </table>
            );

        }
    }
}
export default ConverterDataOutput;