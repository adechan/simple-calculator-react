import React from 'react';
import styled from '@emotion/styled';

const Display = ({computedValue}) => {

    const Container = styled.div`
        margin: 0 auto;
        background: rgb(133, 134, 148);
        height: 125px;
        text-align: right;
        justify-content: space-around;

    `
    const Value = styled.h3`
        font-family: 'Sans Sans', sans-serif;
        font-size: 100px;
        font-weight: normal;
        padding: 0px;
        padding-right: 25px;
        margin: 0px;
    `

    return (  
        <Container> 
            <Value> {computedValue} </Value>
        </Container>
    );
}
 
export default Display;