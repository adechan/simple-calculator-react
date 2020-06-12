import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';

const Buttons = ({value}) => {

    const Container = styled.div`
    `

 
    const Div = styled.div`
    `

    return ( 
        <Container> 
            <Div>
                <Button value = 'AC' />
                <Button value = '+/-' /> 
                <Button value = '%'/>
                <Button value = '÷'/>
            </Div>

            <Div>
                <Button value = '7'/>
                <Button value = '8'/>
                <Button value = '9'/>
                <Button value = '×'/>
            </Div>

            <Div>
                <Button value = '4'/>
                <Button value = '5'/>
                <Button value = '6'/>
                <Button value = '-'/>
            </Div>
            
            <Div>
                <Button value = '1'/>
                <Button value = '2'/>
                <Button value = '3'/>
                <Button value = '+'/>
            </Div>

            <Div>
                <Button value = '0'/>
                <Button value = '.'/>
                <Button value = '='/>
            </Div>

        </Container>
     );
}
 
export default Buttons;