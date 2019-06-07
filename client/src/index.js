import React from 'react';
import { render } from 'react-dom';
var serverStr = 'server';
var root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);
render(React.createElement("p", null,
    "Client has types from ",
    serverStr,
    "!"), root);
//# sourceMappingURL=index.js.map