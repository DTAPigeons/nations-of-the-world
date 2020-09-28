import React from 'react';
import {H2, Col, Row} from 'native-base';

export const ErrorComponent = ({error}) => {
    return (
        <Row
            style={{
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: 'red',
            }}>
            <Col>
                <H2>{error}</H2>
            </Col>
        </Row>
    );
};
