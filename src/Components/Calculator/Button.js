import React, { useState } from 'react';
import styled from '@emotion/styled';


const Button = ({value, width, setDisplayValue, displayValue, operation, setOperation, next, setNext, previous, setPrevious}) => {
//
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
    height: 8.2vw;
    width: ${widthButton};
    border: 1px solid rgb(133, 134, 148, .45);
    color: ${textColour};
    font-family: 'Sans Sans', sans-serif;
    font-size: 60px;
    font-weight: normal;
    padding: 0px;
    margin: 0px;
    `;

    const Calculate = (operation, number1, number2) =>
    {
        let result = 0; 

        switch(operation)
        {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '÷':
                result = number1 / number2; 
                break;
            case '%':
                result = number1 % number2;
                break;
            case '×':
                result = number1 * number2;
                break;
        }

        return result;
    }
    
    const buttonClicked = () =>
    {
        const buttonPressed = {value}.value;

        // if the value is a NUMBER
        if (Number.isInteger(parseInt(buttonPressed)) == true || buttonPressed === '.' || buttonPressed == '+/-')
        {
            if (displayValue != null && displayValue != "0")
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

            if (buttonPressed == '+/-')
            {
                displayValue = displayValue - 2 * displayValue;
            }

            // console.log("display value: " + displayValue);
        }
        setDisplayValue(displayValue);

        if (buttonPressed == '+' || 
            buttonPressed == '-' || 
            buttonPressed == '÷' ||
            buttonPressed == '%' ||
            buttonPressed == '×')
        {
            setOperation(buttonPressed);
            setPrevious(displayValue);
            setDisplayValue("0");
        }

        if (previous !== null)
        {
            setNext(displayValue);
        }

        if (operation !== null && buttonPressed == "=")
        {
            let result = Calculate(operation, parseFloat(previous), parseFloat(next));

            setDisplayValue(result);
        }

        if (buttonPressed == "AC")
        {
            setDisplayValue("0");
            setOperation("");
            setPrevious("");
            setNext("");
        }
        
    }

    return ( 
        <Button onClick = {buttonClicked}> {value} </Button>
     );
}
 
export default Button;