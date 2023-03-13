import React, { useState,useContext } from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Form,
  Button,
  FormGroup,
  Input,
  Row,
  Col,
} from "reactstrap";

function Navi() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
          <NavItem>
              <NavLink className="nav-link" to="/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Earthquakes
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem > <NavLink className="nav-link" to="/earthquakes" state={{siteType:1,currentPage:1}}>Afad</NavLink></DropdownItem>
                <DropdownItem ><NavLink className="nav-link" to="/earthquakes" state={{siteType:2,currentPage:1}}>Kandilli</NavLink></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Form>
            <Row className="row-cols-lg-auto g-3 align-items-center">
              <Col>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Search"
                  type="text"
                />
              </Col>
              <Col>
                <Button color="outline-success" >Search</Button>
              </Col>
            </Row>
          </Form>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;
