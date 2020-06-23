import React from 'react';
import Display from './Display';
import Buttons from './Buttons';

const Calculator = ({displayValue}) => {
    return ( 
        <> 
        <Display displayValue = {displayValue}/>
        <Buttons />
        </>
    );
}
 
export default Calculator;