import React, { useState } from 'react';
import styled from '@emotion/styled';
import Button from './Button';

const Buttons = ({setDisplayValue}) => {

    const Container = styled.div`
    `

    const Div = styled.div`
    `
 
    return ( 
        <Container> 
            <Div>
                <Button value = 'AC' setDisplayValue = {setDisplayValue}/>
                <Button value = '+/-' setDisplayValue = {setDisplayValue}/> 
                <Button value = '%' setDisplayValue = {setDisplayValue}/>
                <Button value = '÷' setDisplayValue = {setDisplayValue}/>
            </Div>

            <Div>
                <Button value = '7' setDisplayValue = {setDisplayValue}/>
                <Button value = '8' setDisplayValue = {setDisplayValue}/>
                <Button value = '9' setDisplayValue = {setDisplayValue}/>
                <Button value = '×' setDisplayValue = {setDisplayValue}/>
            </Div>

            <Div>
                <Button value = '4' setDisplayValue = {setDisplayValue}/>
                <Button value = '5' setDisplayValue = {setDisplayValue}/>
                <Button value = '6' setDisplayValue = {setDisplayValue}/>
                <Button value = '-' setDisplayValue = {setDisplayValue}/>
            </Div>
            
            <Div>
                <Button value = '1' setDisplayValue = {setDisplayValue}/>
                <Button value = '2' setDisplayValue = {setDisplayValue}/>
                <Button value = '3' setDisplayValue = {setDisplayValue}/>
                <Button value = '+' setDisplayValue = {setDisplayValue}/>
            </Div>

            <Div>
                <Button value = '0' width = 'wide' setDisplayValue = {setDisplayValue}/>
                <Button value = '.' setDisplayValue = {setDisplayValue}/>
                <Button value = '=' setDisplayValue = {setDisplayValue}/>
            </Div>

        </Container>
     );
}
 
export default Buttons;