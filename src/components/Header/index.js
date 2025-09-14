import styled from "styled-components";
import logo from '../../nfl-logo.svg'

const Header = styled.header`
    flex: display;
    min-height: 1vh;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`
const NflLogoImg = styled.img`
    flex: display;    
    align-items: center;
    margin-top: 5vh;
    height: 10vmin;
    pointer-events: none;   
`

const Title = styled.h1`
    flex: display;
    text-align: center;
    font-size: calc(10px + 2vmin);
    color: #002f8dff;
    padding: 2vh;
    margin: 2vh auto 10vh auto;
    width: 100vh;
    border: 1px #002f8dff;
    border-bottom-style: solid;
    // font-family: Arial;
`

const Subtitle = styled.p`
    font-size: calc(1px + 2vmin);
    font-family: Roboto;
    font-style: italic;
    color: #777777ff;
`

const NflLogo = () => <NflLogoImg src={logo} alt="NFL Logo"/>

export {Header, NflLogo, Title, Subtitle}