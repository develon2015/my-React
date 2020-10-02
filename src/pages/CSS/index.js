import { Component } from 'react';
import css from './style.css';
import Code from '@/components/Code';

function Transition() {
    return (
        <div className={css['demo']}>
            <div className={css['button']}>
                <div>Like this</div>
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