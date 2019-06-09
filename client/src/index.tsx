import * as React from 'react';
import { render } from 'react-dom';

type ClientType = 'client';

const root: HTMLDivElement = document.createElement( 'div' );
root.id = 'root';
document.body.appendChild( root );

render( <p>Client is running!</p>, root )

export default ClientType;
