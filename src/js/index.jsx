import React from 'react';
import ReactDom from 'react-dom';
import '../sass/common.scss';

ReactDom.render(
    <div>
    <h1 className="hello">Hello, world!</h1>
    <div className="world">test</div>
    </div>,
    document.getElementById('example')
);