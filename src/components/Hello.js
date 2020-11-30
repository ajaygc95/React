import React from 'react'

const Hello = () => {
    return React.createElement('div',
    {id:'hello',className:'dummyclass'},
     React.createElement('h1',null, 'Hello Freaking World'));
}


export default Hello;