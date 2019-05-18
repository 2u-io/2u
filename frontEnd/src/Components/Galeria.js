import React from 'react';
import {Carousel} from 'react-materialize'

const Galeria = () => {
    return (
        <React.Fragment>
            <Carousel options={{fullWidth: true,indicators: true}} images={[
            'https://www.sanlorenzos.ie/wp-content/uploads/2014/11/Gift-Card-small.jpg',
            ]} />
        </React.Fragment>
    );
}

export default Galeria;
