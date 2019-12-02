import React from "react";
import Card from 'react-bootstrap/Card';
import DateTimePicker from 'react-datetime-picker';
import Form from 'react-bootstrap/Form'

function RightMenu(props) {
    return(
        <div className="event-menu">
            <DateTimePicker/>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select">
                    <option>Категория</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
            <Card className="event-card">
                <Card.Header>
                    Потеряна связь со станцией
                </Card.Header>
                <Card.Body>
                    Связь со станцией верхние салды потеряна
                </Card.Body>
            </Card>
            <Card border="danger" className="event-card">
                <Card.Header>
                    Пожар!
                </Card.Header>
                <Card.Body>
                    Пожар везде
                </Card.Body>
            </Card>
        </div>
    )
}

export default RightMenu;