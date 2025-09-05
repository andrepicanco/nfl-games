import styled from "styled-components";
import AppContainer from "./components/AppContainer";
import {Header, NflLogo, Title} from "./components/Header";

function App() {
  return (
    <AppContainer>
    <NflLogo/>
      <Header>
        <Title>
          Find out your team's last games!
        </Title>
      </Header>
    </AppContainer>
  );
}

export default App;
