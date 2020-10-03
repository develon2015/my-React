import { Component } from 'react';
import css from './style.css';
import Code from '@/components/Code';

function Transition() {
    return (
        <div className={css['demo']}>
            <div className={css['button']}>
                <div>Like this</div>
            </div>
            <div className={css['button']}>
                <div>Real told You, I Love React.js</div>
            </div>
            <div className={css['button']}>
                <div style={{ width: '200px' }}>OK</div>
            </div>
        </div>
    );
}

class Demo extends Component {
    render() {
        return (
            <div>
                <Transition />
                <hr />
            </div>
        );
    }
}

export default () => {
    return <Demo />;
};