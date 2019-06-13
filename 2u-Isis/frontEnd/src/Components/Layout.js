import React from'react'

import Header from '../Components/Header'

function Layout(props) {
    // const children = props.children;
    return (
        <div>
            <Header/>
            {props.children}
        </div>
    );
}

export default Layout;