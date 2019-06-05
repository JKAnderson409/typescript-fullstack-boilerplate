import React from 'react';
import { render } from 'react-dom';

type ClientStr = 'client';

console.log( `Client here!` );

const root: HTMLDivElement = document.createElement( 'div' );
root.id = 'root';
document.body.appendChild( root );

render( <p>Hello, world!</p>, root )

export default ClientStr;
