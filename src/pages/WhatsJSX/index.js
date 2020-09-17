import css from './style.css';
import Code from '@/components/Code';

function Father() { return 'Father'; }

function Child() { return 'Child'; }

function whatsJSX() { return (<Father><Child /></Father>); }

function whatsJSX2() { return (<Father>{Child}</Father>); }

export default (
    <div className={css.container}>
        <div className={css.content}>
            <p>
                <Code inline>{`<Father><Child /></Father>`}</Code>
                <span>的实现:</span>
            </p>
            <Code>{whatsJSX.toString()}</Code>
            <p>
                <Code inline>{`<Father>{ Child }</Father>`}</Code>
                <span>的实现:</span>
            </p>
            <Code>{whatsJSX2.toString()}</Code>
        </div>
    </div>
);