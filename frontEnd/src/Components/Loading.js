import React from 'react';
import {Row,Col,Preloader} from 'react-materialize'

const Loading = () => {
    return (
        <React.Fragment>
            <div className="tarjetas">
                <Row>
                    <Col s={4}>
                        <Preloader size="small" />
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}

export default Loading;
