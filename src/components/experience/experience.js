// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';

// Recebe os parâmetros passadados para o Component na variável props
const Experience = (props) => (
  <Card>
      <Row>
        <Col s={2} m={2}>
          <img src={props.avatar} className="square responsive-img" />
          { props.name }
        </Col>

        <Col s={10} s={10}>
          <p><b>{props.title} in <span className="indigo white-text">{props.company}</span></b></p>
          <p>{props.description}</p>
        </Col>
      </Row>
  </Card>
);

export default Experience;