import React, { useState } from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';


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
    height: 100%;
    width: ${widthButton};
    border: 1px solid rgb(133, 134, 148, .45);
    color: ${textColour};
    font-family: 'Sans Sans', sans-serif;
    font-size: 4vw;
    @media (max-width: 420px) {
        font-size: 7vw;
    }
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
        console.log("[buttonClicked]: " + buttonPressed);
        console.log("[buttonClicked start] displayValue: >" + displayValue + "<");
        // displayValue = {op}(buttonPressed)
        
        // if the value is a NUMBER
        if (Number.isInteger(parseInt(buttonPressed)) == true || buttonPressed === '.' || buttonPressed == '+/-')
        {   
            // 1. " " is found anywhere in the "displayValue" OR (start of calculator)
            // 2. " " is not found anywhere in the "displayValue" AND "previous" has a value AND "operation" doesn't have a value (reseting, start new calculation)
            // THEN just replace "displayValue" with a number

            if ((String(displayValue).indexOf(" ") !== -1) || 
                (String(displayValue).indexOf(" ") === -1 && previous !== "" && operation === ""))
            {
                console.log("[buttonClicked 1] displayValue: >" + displayValue + "<");
                displayValue = buttonPressed;
                console.log("[buttonClicked 2] displayValue: >" + displayValue + "<");
            }
            else if (next === "" || 
                    !(operation !== "" && next === "" && previous !== ""))
            {
                console.log("[buttonClicked 3] displayValue: " + displayValue);

                if (Number.isInteger(parseInt(displayValue)) == false)
                {
                    displayValue = "";   
                }

                displayValue += buttonPressed;
                console.log("[buttonClicked 4] displayValue: " + displayValue);

            }

            // to exclude multiplication: displayValue === operation && next !== "" && previous !== ""
            // to reset state after calculation: displayValue !=== "" && previous === "" && operation === "" && next === ""

            if (buttonPressed !== '.' && buttonPressed !== '0' && operation === "")
            {
                displayValue = '' + parseFloat(displayValue);
            }

            if (buttonPressed === '+/-')
            {
                console.log("[buttonClicked 3] displayValue: " + displayValue);
                displayValue = displayValue - 2 * displayValue;
                console.log("[buttonClicked 4] displayValue: " + displayValue);
            }

            // console.log("display value: " + displayValue);
        }
        setDisplayValue(displayValue);

        if (buttonPressed === '+' || 
            buttonPressed === '-' || 
            buttonPressed === '÷' ||
            buttonPressed === '%' ||
            buttonPressed === '×')
        {
            setOperation(buttonPressed);

            if (Number.isInteger(parseInt(displayValue)) == true)
            {
                setPrevious(displayValue);
            }

            displayValue = buttonPressed

            setDisplayValue(buttonPressed);
        }

        if (previous !== "")
        {
            setNext(displayValue);
        }

        if (operation !== "" && buttonPressed === "=")
        {
            let result = Calculate(operation, parseFloat(previous), parseFloat(next));

            setOperation("");
            setPrevious("");
            setNext("");
            setDisplayValue(' ' + result);
        }

        if (buttonPressed == "AC")
        {
            setDisplayValue(" 0");
            setOperation("");
            setPrevious("");
            setNext("");
        }
        
        console.log("[buttonClicked: " + buttonPressed +  "] displayValue: " + displayValue);
    }

    return ( 
        <Button onClick = {buttonClicked}> {value} </Button>
     );
}
 
export default Button;