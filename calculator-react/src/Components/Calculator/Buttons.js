import React, { useState } from 'react';
import styled from '@emotion/styled';
import Button from './Button';

const Buttons = ({setDisplayValue, displayValue}) => {

    const Container = styled.div`
    `

    const Div = styled.div`
    `
 
    return ( 
        <Container> 
            <Div>
                <Button value = 'AC' setDisplayValue = {setDisplayValue} displayValue = {displayValue}/>
                <Button value = '+/-' setDisplayValue = {setDisplayValue} displayValue = {displayValue}/> 
                <Button value = '%' setDisplayValue = {setDisplayValue} displayValue = {displayValue}/>
                <Button value = '÷' setDisplayValue = {setDisplayValue} displayValue = {displayValue}/>
            </Div>

            <Div>
                <Button value = '7' setDisplayValue = {setDisplayValue} displayValue = {displayValue}/>
                <Button value = '8' setDisplayValue = {setDisplayValue} displayValue = {displayValue}/>
                <Button value = '9' setDisplayValue = {setDisplayValue} displayValue = {displayValue}/>
                <Button value = '×' setDisplayValue = {setDisplayValue} displayValue = {displayValue}/>
            </Div>

            <Div>
                <Button value = '4' setDisplayValue = {setDisplayValue} displayValue = {displayValue}/>
                <Button value = '5' setDisplayValue = {setDisplayValue} displayValue = {displayValue}/>
                <Button value = '6' setDisplayValue = {setDisplayValue} displayValue = {displayValue}/>
                <Button value = '-' setDisplayValue = {setDisplayValue} displayValue = {displayValue}/>
            </Div>
            
            <Div>
                <Button value = '1' setDisplayValue = {setDisplayValue} displayValue = {displayValue}/>
                <Button value = '2' setDisplayValue = {setDisplayValue} displayValue = {displayValue}/>
                <Button value = '3' setDisplayValue = {setDisplayValue} displayValue = {displayValue}/>
                <Button value = '+' setDisplayValue = {setDisplayValue} displayValue = {displayValue}/>
            </Div>

            <Div>
                <Button value = '0' width = 'wide' setDisplayValue = {setDisplayValue} displayValue = {displayValue}/>
                <Button value = '.' setDisplayValue = {setDisplayValue} displayValue = {displayValue}/>
                <Button value = '=' setDisplayValue = {setDisplayValue} displayValue = {displayValue}/>
            </Div>

        </Container>
     );
}
 
export default Buttons;