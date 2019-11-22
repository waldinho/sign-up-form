import React from 'react';
import styled from 'styled-components';

const Header = () => {

    return (
        <Wrapper>
            <header className='App-header'>
                <img className='logo' src='https://www.southerncrossaustereo.com.au:443/media/1973/logo-sca.svg' alt='SCA' title='SCA'/>
                <h3>Subscribe</h3>
            </header>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.App-header {
    background-color: #333;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    min-width: 335px;
    padding: 30px 0 0 0;
    position: fixed;
    top: 0;
    width: -webkit-fill-available;
    z-index: 2;
    .logo {
        width: 120px;
    }
}
`

export default Header