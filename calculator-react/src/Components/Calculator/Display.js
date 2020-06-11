import React from 'react';
import styled from '@emotion/styled';

const Display = () => {

    const Container = styled.div`
        margin: 0 auto;
        background: rgb(130, 126, 140);
        height: 125px;
        text-align: right;
        justify-content: space-around;

    `
    const Value = styled.h3`
        font-family: 'Fira Sans', sans-serif;
        font-size: 100px;
        padding: 0px;
        margin: 0px;
    `

    return (  
        <Container> 
            <Value> 0.0 </Value>
        </Container>
    );
}
 
export default Display;