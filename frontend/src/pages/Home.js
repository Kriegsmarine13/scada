import React from "react";
import TopNavbar from "../components/TopNavbar";
import LeftMenu from "../components/LeftMenu";
import MiddleScheme from "../components/MiddleScheme";
import RightMenu from "../components/RightMenu";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Home(props) {
    return(
        <div>
            <TopNavbar/>
            <Row>
                <Col xs={2} className="options-menu">
                    <LeftMenu/>
                </Col>
                <Col xs={8}>
                    <MiddleScheme/>
                </Col>
                <Col xs={2} className="event-menu">
                    <RightMenu/>
                </Col>
            </Row>
        </div>
    )
}

export default Home;