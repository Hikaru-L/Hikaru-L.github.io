// Importando o React
import React from "react";
// Importando o component Home
import Home from "./components/home/home";
// Importando os components necessários da lib react-materialize
import { Container } from 'react-materialize'; 

import Contact from './components/contact/contact'

import Projects from './components/projects/projects'

import { Switch, Route } from 'react-router-dom'
const Main = () => (
  <main>
    <Container>
        <Switch>
            <Route exact path='/Portifolio' component = {Home}/>
            <Route path='/Portifolio/projects' component = {Projects}/>
            <Route path='/Portifolio/contact' component = {Contact}/>

        </Switch>
    </Container>
  </main>  
);

export default Main;