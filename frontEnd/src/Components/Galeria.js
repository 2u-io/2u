import React from 'react';
import {Carousel} from 'react-materialize'

const Galeria = () => {
    return (
        <React.Fragment>
            <Carousel options={{fullWidth: true,indicators: true}} images={[
            'https://picsum.photos/250/250?image=0',
            'https://picsum.photos/250/250?image=1',
            'https://picsum.photos/250/250?image=2'
            ]} />
        </React.Fragment>
    );
}

export default Galeria;
