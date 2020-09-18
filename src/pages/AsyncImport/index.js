import css from './style.css';
import Button from '../../components/Button';
import Code from '@/components/Code';
import { createElement, Component, } from 'react';

class Demo extends Component {
    constructor() {
        super();
        this.state = { code: '等待异步加载代码' };
    }
    render() {
        return (
    <div className={css.container}>
        <div className={css.content}>
            <Button onClick={() => {
                // 异步import
                import('!raw-loader!.').then(({ default: text }) => {
                    this.setState({ code: text });
                });
            }}>异步加载文件内容</Button>
        </div>
        <div>
            <h1>代码实现:</h1>
            <Code>{this.state.code}</Code>
        </div>
    </div>
        );
    }
}

export default <Demo />;