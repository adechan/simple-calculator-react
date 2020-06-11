import React from 'react';
import styled from '@emotion/styled';

const Buttons = () => {

    const Container = styled.div`
        background-color:  rgb(133, 134, 148);
        
    `

    const Button = styled.button`
    `
 
    const Div = styled.div`
    `

    return ( 
        <Container> 
            <Div>
            <Button> Meow </Button>
            <Button> Meow </Button>
            <Button> Meow </Button>
            <Button> Meow </Button>
            </Div>

        </Container>
     );
}
 
export default Buttons;