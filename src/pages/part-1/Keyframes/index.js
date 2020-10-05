import css from './style.css';
import Code from '@/components/Code';

export default () => (
    <div className={css.container}>
        <div className={css.content}>
            <h1 className={css.h1}>Hello</h1>
        </div>
        <div>
            <h1>CSS实现:</h1>
            <Code>{require('!raw-loader!./style.css').default}</Code>
        </div>
    </div>
);