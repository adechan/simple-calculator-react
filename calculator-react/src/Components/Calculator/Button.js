import React from 'react';
import styled from '@emotion/styled';

const Button = ({value}) => {

    let backgroundColour = null;
    let textColour = null;
    let width = null;

    // grey buttons
    if (Number.isInteger(parseInt(value)) === true)  
    {
        backgroundColour = `rgb(224, 224, 224)`;
        textColour = `black`;
    }
    // orange buttons
    else if (Number.isInteger(parseInt(value)) === false && value !== '.') 
    {
        backgroundColour = `rgb(245, 146, 62)`;
        textColour = `white`;
    }
    else if (value === '.')
    {
        backgroundColour = `rgb(224, 224, 224)`;
        textColour = `black`;
    }

    if (value === '0')
    {
        width = `50%`;
    }
    else
    {
        width = `25%`;
    }

    const Button = styled.button`
    background-color: ${backgroundColour};
    padding: 0px;
    height: 125px;
    width: ${width};
    border: 1px solid rgb(133, 134, 148, .45);
    color: ${textColour};
    font-family: 'Sans Sans', sans-serif;
    font-size: 60px;
    font-weight: normal;
    padding: 0px;
    margin: 0px;
;
    `
    return ( 
        <Button> {value} </Button>
     );
}
 
export default Button;