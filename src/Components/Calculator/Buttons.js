import React, { useState } from 'react';
import styled from '@emotion/styled';
import Button from './Button';

const Buttons = ({setDisplayValue, displayValue, setOperation, operation, setPrevious, previous, setNext, next}) => {

    const Container = styled.div`
    `

    const Div = styled.div`
    height: 17vh;
    `
 
    return ( 
        <Container> 
            <Div>
                <Button value = 'AC' 
                setDisplayValue = {setDisplayValue}
                displayValue = {displayValue}
                setOperation = {setOperation}
                operation = {operation}
                previous = {previous}
                setPrevious = {setPrevious}
                next = {next}
                setNext = {setNext}
                />

                <Button value = '+/-' 
                setDisplayValue = {setDisplayValue}
                displayValue = {displayValue}
                setOperation = {setOperation}
                operation = {operation}
                previous = {previous}
                setPrevious = {setPrevious}
                next = {next}
                setNext = {setNext}
                />

                <Button value = '%' 
                setDisplayValue = {setDisplayValue}
                displayValue = {displayValue}
                setOperation = {setOperation}
                operation = {operation}
                previous = {previous}
                setPrevious = {setPrevious}
                next = {next}
                setNext = {setNext}
                />

                <Button value = '÷' 
                setDisplayValue = {setDisplayValue}
                displayValue = {displayValue}
                setOperation = {setOperation}
                operation = {operation}
                previous = {previous}
                setPrevious = {setPrevious}
                next = {next}
                setNext = {setNext}
                />

            </Div>

            <Div>
                <Button value = '7' 
                setDisplayValue = {setDisplayValue}
                displayValue = {displayValue}
                setOperation = {setOperation}
                operation = {operation}
                previous = {previous}
                setPrevious = {setPrevious}
                next = {next}
                setNext = {setNext}
                />

                <Button value = '8' 
                setDisplayValue = {setDisplayValue}
                displayValue = {displayValue}
                setOperation = {setOperation}
                operation = {operation}
                previous = {previous}
                setPrevious = {setPrevious}
                next = {next}
                setNext = {setNext}
                />

                <Button value = '9' 
                setDisplayValue = {setDisplayValue}
                displayValue = {displayValue}
                setOperation = {setOperation}
                operation = {operation}
                previous = {previous}
                setPrevious = {setPrevious}
                next = {next}
                setNext = {setNext}
                />

                <Button value = '×' 
                setDisplayValue = {setDisplayValue}
                displayValue = {displayValue}
                setOperation = {setOperation}
                operation = {operation}
                previous = {previous}
                setPrevious = {setPrevious}
                next = {next}
                setNext = {setNext}
                />

            </Div>

            <Div>
                <Button value = '4' 
                setDisplayValue = {setDisplayValue}
                displayValue = {displayValue}
                setOperation = {setOperation}
                operation = {operation}
                previous = {previous}
                setPrevious = {setPrevious}
                next = {next}
                setNext = {setNext}
                />

                <Button value = '5' 
                setDisplayValue = {setDisplayValue}
                displayValue = {displayValue}
                setOperation = {setOperation}
                operation = {operation}
                previous = {previous}
                setPrevious = {setPrevious}
                next = {next}
                setNext = {setNext}
                />

                <Button value = '6' 
                setDisplayValue = {setDisplayValue}
                displayValue = {displayValue}
                setOperation = {setOperation}
                operation = {operation}
                previous = {previous}
                setPrevious = {setPrevious}
                next = {next}
                setNext = {setNext}
                />

                <Button value = '-' 
                setDisplayValue = {setDisplayValue}
                displayValue = {displayValue}
                setOperation = {setOperation}
                operation = {operation}
                previous = {previous}
                setPrevious = {setPrevious}
                next = {next}
                setNext = {setNext}
                />

            </Div>
            
            <Div>
                <Button value = '1' 
                setDisplayValue = {setDisplayValue}
                displayValue = {displayValue}
                setOperation = {setOperation}
                operation = {operation}
                previous = {previous}
                setPrevious = {setPrevious}
                next = {next}
                setNext = {setNext}
                />

                <Button value = '2' 
                setDisplayValue = {setDisplayValue}
                displayValue = {displayValue}
                setOperation = {setOperation}
                operation = {operation}
                previous = {previous}
                setPrevious = {setPrevious}
                next = {next}
                setNext = {setNext}
                />

                <Button value = '3' 
                setDisplayValue = {setDisplayValue}
                displayValue = {displayValue}
                setOperation = {setOperation}
                operation = {operation}
                previous = {previous}
                setPrevious = {setPrevious}
                next = {next}
                setNext = {setNext}
                />

                <Button value = '+' 
                setDisplayValue = {setDisplayValue}
                displayValue = {displayValue}
                setOperation = {setOperation}
                operation = {operation}
                previous = {previous}
                setPrevious = {setPrevious}
                next = {next}
                setNext = {setNext}
                />

            </Div>

            <Div>
                <Button value = '0' width = 'wide' 
                setDisplayValue = {setDisplayValue}
                displayValue = {displayValue}
                setOperation = {setOperation}
                operation = {operation}
                previous = {previous}
      setPrevious = {setPrevious}
      next = {next}
      setNext = {setNext}
                />

                <Button value = '.' 
                setDisplayValue = {setDisplayValue}
                displayValue = {displayValue}
                setOperation = {setOperation}
                operation = {operation}
                previous = {previous}
      setPrevious = {setPrevious}
      next = {next}
      setNext = {setNext}
                />

                <Button value = '=' 
                setDisplayValue = {setDisplayValue}
                displayValue = {displayValue}
                setOperation = {setOperation}
                operation = {operation}
                previous = {previous}
      setPrevious = {setPrevious}
      next = {next}
      setNext = {setNext}
                />

            </Div>

        </Container>
     );
}
 
export default Buttons;