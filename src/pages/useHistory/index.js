import css from './style.css';
import { useHistory, } from 'react-router-dom';
import Button from '../../components/Button';
import Code from '@/components/Code';
import { createElement } from 'react';

const code = `
return (
        <div className={css.container}>
            <div className={css.content}>
                {createElement(() => {
                    const history = useHistory();
                    return <Button onClick={() => {
                        history.push('/');
                    }}>返回主页(JavaScript)</Button>;
                })}
            </div>
            <div>
                <h1>实现方式:</h1>
                <Code>{code}</Code>
            </div>
        </div>
    );
`;

export default () => {
    return (
        <div className={css.container}>
            <div className={css.content}>
                {createElement(() => {
                    const history = useHistory();
                    return <Button onClick={() => {
                        history.push('/');
                    }}>返回主页(JavaScript)</Button>;
                })}
            </div>
            <div>
                <h1>实现方式:</h1>
                <Code>{code}</Code>
            </div>
        </div>
    );
};