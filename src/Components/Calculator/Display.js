import React from 'react';
import styled from '@emotion/styled';

const Display = ({displayValue}) => {

    const Container = styled.div`
        margin: 0 auto;
        background: rgb(133, 134, 148);
        height: 15vh;
        text-align: right;
        justify-content: space-around;

    `
    const Value = styled.h3`
        font-family: 'Sans Sans', sans-serif;
        font-size: 12vh;
        font-weight: normal;
        padding: 0px;
        padding-right: 3vh;
        margin: 0px;
        padding-top: 1vh;
    `

    return (  
        <Container> 
            <Value> {displayValue} </Value>
        </Container>
    );
}
 
export default Display;