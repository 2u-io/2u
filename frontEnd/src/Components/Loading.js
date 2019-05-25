import React from 'react';
import {Row,Col,Preloader} from 'react-materialize'

const Loading = () => {
    return (
        <React.Fragment>
            <Row>
                <Col s={4}>
                    <Preloader size="small" />
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Loading;
