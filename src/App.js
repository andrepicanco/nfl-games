import styled from "styled-components";
import AppContainer from "./components/AppContainer";
import {Header, NflLogo, Subtitle, Title} from "./components/Header";
import React, { useState } from "react";
import GlobalStyle from './GlobalStyle';
import Accordion from "./components/Accordion";
import teams from './data/teams.json'
import ScheduleTable from './servicos/schedules'

function App() {
  return (
  <AppContainer>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap');
    </style>
    <GlobalStyle/>
      <NflLogo/>
        <Header>
          <Title>
            NFL SCHEDULES FOR 2025 SEASON
            <Subtitle>#2 Building an Accordion component (<a href="https://reactpractice.dev/exercise/build-an-accordion-component/?utm_source=calendar.reactpractice.dev&utm_medium=social&utm_campaign=calendar-v1">reactpractice.dev</a>)</Subtitle>
          </Title>
          {  
            teams.map(teamObj => {
              const [abbr, name] = Object.entries(teamObj)[0];
              return (
                <Accordion title={name.toUpperCase()}>
                  <div>{name}'s 2025 season: <br/><br/>{ScheduleTable(abbr)}</div>
                </Accordion>
              );
            })       
          }
        </Header>
  </AppContainer>
  );
}

export default App;
