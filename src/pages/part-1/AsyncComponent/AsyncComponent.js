import { Component, lazy, Suspense } from 'react';
// const Component = require('react');

/**
 * 异步组件和编写组件没有太大关联, 需要注意的一点是, 由于webpack的import()函数只支持ES6模块, 因此不能使用CommonJS
 */

class _ extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h1 style={{ color: 'mediumspringgreen' }}>恭喜你, 异步的类组件加载完毕!</h1>;
    }
};

export default _;
// module.exports = _;