import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function TopNavbar(props) {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Col xs={2}>
                    <Navbar.Brand href="#home">Большое РЖДшное лого</Navbar.Brand>
                </Col>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Главная</Nav.Link>
                    <Nav.Link href="#stations">Станции</Nav.Link>
                    <Nav.Link href="#logs">Логи</Nav.Link>
                    <Nav.Link href="#users">Пользователи</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default TopNavbar;