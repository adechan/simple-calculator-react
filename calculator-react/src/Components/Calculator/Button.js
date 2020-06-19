import React, { useState } from 'react';
import styled from '@emotion/styled';


const Button = ({value, width, setDisplayValue, displayValue, operation, setOperation}) => {

    let backgroundColour = null;
    let textColour = null;
    let widthButton = null;

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

    if (width === 'wide')
    {
        widthButton = `50%`;
    }
    else
    {
        widthButton = `25%`;
    }

    const Button = styled.button`
    background-color: ${backgroundColour};
    padding: 0px;
    height: 125px;
    width: ${widthButton};
    border: 1px solid rgb(133, 134, 148, .45);
    color: ${textColour};
    font-family: 'Sans Sans', sans-serif;
    font-size: 60px;
    font-weight: normal;
    padding: 0px;
    margin: 0px;
    `;
    
    const buttonClicked = () =>
    {
        const buttonPressed = {value}.value;

        console.log("You pressed: " + buttonPressed);
        
        if (Number.isInteger(parseInt(buttonPressed)) == true || buttonPressed === '.')
        {
            if (displayValue != null)
            {
                displayValue += buttonPressed;
            }
            else
            {
                displayValue = buttonPressed;
            }

            if (buttonPressed !== '.' && buttonPressed !== '0')
            {
                displayValue = '' + parseFloat(displayValue);
            }

            console.log("display value: " + displayValue);
        }

        setDisplayValue(displayValue);
    }

    return ( 
        <Button onClick = {buttonClicked}> {value} </Button>
     );
}
 
export default Button;