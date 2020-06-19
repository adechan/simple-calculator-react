import React, { useState } from 'react';
import styled from '@emotion/styled';
import Button from './Button';

const Buttons = ({setDisplayValue, displayValue, setOperation, operation}) => {

    const Container = styled.div`
    `

    const Div = styled.div`
    `
 
    return ( 
        <Container> 
            <Div>
                <Button value = 'AC' setDisplayValue = {setDisplayValue} displayValue = {displayValue} setOperation = {setOperation} operation = {operation} />
                <Button value = '+/-' setDisplayValue = {setDisplayValue} displayValue = {displayValue} setOperation = {setOperation} operation = {operation} /> 
                <Button value = '%' setDisplayValue = {setDisplayValue} displayValue = {displayValue} setOperation = {setOperation} operation = {operation} />
                <Button value = '÷' setDisplayValue = {setDisplayValue} displayValue = {displayValue} setOperation = {setOperation} operation = {operation} />
            </Div>

            <Div>
                <Button value = '7' setDisplayValue = {setDisplayValue} displayValue = {displayValue} setOperation = {setOperation} operation = {operation} />
                <Button value = '8' setDisplayValue = {setDisplayValue} displayValue = {displayValue} setOperation = {setOperation} operation = {operation} />
                <Button value = '9' setDisplayValue = {setDisplayValue} displayValue = {displayValue} setOperation = {setOperation} operation = {operation} />
                <Button value = '×' setDisplayValue = {setDisplayValue} displayValue = {displayValue} setOperation = {setOperation} operation = {operation} />
            </Div>

            <Div>
                <Button value = '4' setDisplayValue = {setDisplayValue} displayValue = {displayValue} setOperation = {setOperation} operation = {operation} />
                <Button value = '5' setDisplayValue = {setDisplayValue} displayValue = {displayValue} setOperation = {setOperation} operation = {operation} />
                <Button value = '6' setDisplayValue = {setDisplayValue} displayValue = {displayValue} setOperation = {setOperation} operation = {operation} />
                <Button value = '-' setDisplayValue = {setDisplayValue} displayValue = {displayValue} setOperation = {setOperation} operation = {operation} />
            </Div>
            
            <Div>
                <Button value = '1' setDisplayValue = {setDisplayValue} displayValue = {displayValue} setOperation = {setOperation} operation = {operation} />
                <Button value = '2' setDisplayValue = {setDisplayValue} displayValue = {displayValue} setOperation = {setOperation} operation = {operation} />
                <Button value = '3' setDisplayValue = {setDisplayValue} displayValue = {displayValue} setOperation = {setOperation} operation = {operation} />
                <Button value = '+' setDisplayValue = {setDisplayValue} displayValue = {displayValue} setOperation = {setOperation} operation = {operation} />
            </Div>

            <Div>
                <Button value = '0' width = 'wide' setDisplayValue = {setDisplayValue} displayValue = {displayValue} setOperation = {setOperation} operation = {operation} />
                <Button value = '.' setDisplayValue = {setDisplayValue} displayValue = {displayValue} setOperation = {setOperation} operation = {operation} />
                <Button value = '=' setDisplayValue = {setDisplayValue} displayValue = {displayValue} setOperation = {setOperation} operation = {operation} />
            </Div>

        </Container>
     );
}
 
export default Buttons;