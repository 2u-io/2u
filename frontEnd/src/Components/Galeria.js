import React from 'react';
import {Carousel} from 'react-materialize'

const Galeria = () => {
    return (
        <React.Fragment>
            <Carousel options={{fullWidth: true,indicators: true}} images={[
            'https://picsum.photos/250/250?image=0',
            ]} />
        </React.Fragment>
    );
}

export default Galeria;
