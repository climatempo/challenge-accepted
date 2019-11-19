
import '../../../public/css/cardWeather.css';

import React, { Component, Text } from 'react';
import { Card, Col, Row, Icon } from 'antd';
import { FaUmbrella, FaTint } from "react-icons/fa";

/**
 * Componente de listagem
 */
export default (props) => {

    let rowTitle = <Row>
        <Col>
            <span style={{ flex: 1, flexWrap: 'wrap' }}>{props.date}</span>
        </Col>
        <Col>
            <span className="textCardContent">{props.text}</span>
        </Col>
    </Row>
    return <React.Fragment>
        <Card className="card" title={rowTitle} bordered={false} style={{ width: 300 }}>
            <Row type="flex" justify="center" align="middle">
                <Col>
                    <Row type="flex" justify="center" align="middle">
                        <Col className="sizeIconBlock"><Icon style={{ fontSize: 32 }} type="arrow-up" /></Col>
                        <Col className="sizeTextBlock"><span className="fontSizeUp">{props.temperature.max}º</span></Col>
                    </Row>
                </Col>
                <Col>
                    <Row type="flex" justify="center" align="middle">
                        <Col className="sizeIconBlock"><Icon style={{ fontSize: 32 }} type="arrow-down" /></Col>
                        <Col className="sizeTextBlock"><span className="fontSizeDown">{props.temperature.max}º</span></Col>
                    </Row>

                </Col>
            </Row>
            <Row type="flex" justify="center" align="middle">
                <Col>
                    <Row type="flex" justify="center" align="middle">
                        <Col className="sizeIconBlock"><FaTint style={{ fontSize: 32 }} /></Col>
                        <Col className="sizeTextBlock"><span className="fontVolumePerc">{props.rain.precipitation}mm</span></Col>
                    </Row>
                </Col>
                <Col>
                    <Row type="flex" justify="center" align="middle">
                        <Col className="sizeIconBlock"><FaUmbrella style={{ fontSize: 32 }} /></Col>
                        <Col className="sizeTextBlock"><span className="fontVolumePerc">{props.rain.probability}%</span></Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    </React.Fragment>
}