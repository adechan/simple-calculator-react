import React from 'react';
import styled from '@emotion/styled';
import Display from './Display';
import Buttons from './Buttons';

const Calculator = ({computedValue}) => {
    return ( 
        <> 
        <Display computedValue = {0.1}/>
        <Buttons />
        </>
    );
}
 
export default Calculator;