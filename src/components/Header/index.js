import styled from "styled-components";
import logo from '../../nfl-logo.svg'

const Header = styled.header`
    background-color: #0040c0ff;
    min-height: 1vh;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`
const NflLogoImg = styled.img`
    position: relative;
    height: 10vmin;
    pointer-events: none;   
`

const Title = styled.h1`
    text-align: center;
    font-size: calc(10px + 2vmin);
    color: white;
    background-color: #002f8dff;
`

const NflLogo = () => <NflLogoImg src={logo} alt="NFL Logo"/>

export {Header, NflLogo, Title}