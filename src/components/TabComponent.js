import React,{useState,useEffect} from 'react'
import {Button, Col, Row} from 'reactstrap'
import List from './List'


const TabComponent = ()=> {
    const [activeTab,setActiveTab] = useState(1)
    
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    useEffect(()=>{console.log('active: ' + activeTab)},[activeTab])


  return (
    <div>
      <Row className="w-100">
        <Col sm="6">
          <Button
            className="w-100"
            onClick={() => {
              setActiveTab(1);
            }}
          >
            <img src=""></img> Afad
          </Button>
        </Col>
        <Col sm="6">
          <Button
            className="w-100"
            onClick={() => {
              setActiveTab(2);
            }}
          >
            Kandilli
          </Button>
        </Col>
      </Row>
      <Row>
        <Col sm="4"></Col>
        <Col sm="4">
          <div
            className={`logo ${activeTab === 1 ? "bgAfad" : "bgKandilli"}`}
          ></div>
        </Col>
        <Col sm="4"></Col>
      </Row>
      <List activeTab={activeTab}></List>
    </div>
  );
}

export default TabComponent;