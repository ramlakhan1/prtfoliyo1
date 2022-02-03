import React from 'react';
import {Row, Col} from 'reactstrap';

import {RiComputerLine} from 'react-icons/ri';
import {AiOutlineCloudServer, AiFillTool} from 'react-icons/ai';

const ExpTitle = ({title}) => {
  return (
    <h3 className="font-weight-bold text-white">{title}</h3>
  )
}

const Experience = () => {
  return (
    <Row className="font-weight-bold py-5 px-3" style={{backgroundColor: '#4c6d86', color: '#BBD2FF'}}>
      <Col className="text-center">
        <RiComputerLine size="4em" color="#FF8A59"/>
        <ExpTitle title="Front-end" />
        <p className="m-0">HTML5</p>
        <p className="m-0">CSS3</p>
        <p className="m-0">Bootstrap</p>
        <p className="m-0">JavaScript</p>
        {/* <p className="m-0">JQuery</p> */}
        <p className="m-0">React</p>
      </Col>
      <Col className="text-center">
        <AiOutlineCloudServer size="4em" color="#FF8A59"/>
        <ExpTitle title="Back-end" />
        <p className="m-0">NodeJS</p>
        <p className="m-0">NPM</p>
        {/* <p className="m-0"></p> */}
        {/* <p className="m-0">MySQL</p> */}
      </Col>
      <Col className="text-center">
        <AiFillTool size="4em" color="#FF8A59"/>
        <ExpTitle title="Tools" />
        <p className="m-0">VSCode</p>
        {/* <p className="m-0">Atom</p> */}
        <p className="m-0">Github</p>
        {/* <p className="m-0">LaTeX</p> */}
      </Col>
    </Row>
  )
}

export default Experience;
