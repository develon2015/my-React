import css from './style.css';
import { useHistory, } from 'react-router-dom';
import Button from '../../components/Button';
import Code from '@/components/Code';
import { createElement } from 'react';
import code from '!raw-loader!.'
import compiledCode from 'raw-loader!.'

export default () => {
    return (
        <div className={css.container}>
            <div className={css.content}>
                {createElement(() => { // 钩子函数只能在调用createElement()函数时使用, 所以需要"套娃"
                    const history = useHistory();
                    return <Button onClick={() => {
                        history.push('/');
                    }}>返回主页(JavaScript)</Button>;
                })}
            </div>
            <div>
                <h1>代码实现:</h1>
                <Code>{code}</Code>
            </div>
            <div>
                <h1>Babel编译后:</h1>
                <Code>{compiledCode}</Code>
            </div>
        </div>
    );
};