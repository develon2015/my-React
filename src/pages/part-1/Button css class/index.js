import { Component } from 'react';
import useBorder from './useBorder.css';
import useBoxShadow from './useBoxShadow.css';
import Code from '@/components/Code';

function Transition() {
    return (
        <div className={useBorder['demo']}>
            <div className={useBorder['button']}>
                <div>Like this</div>
            </div>
            <div className={useBorder['button']}>
                <div>Real told You, I Love React.js</div>
            </div>
            <div className={useBorder['button']}>
                <div style={{ width: '200px' }}>OK</div>
            </div>
        </div>
    );
}

function Button() {
    return (
        <div>
            <div className={useBoxShadow['button']}>
                <div>单独div</div>
            </div>
            <div className={useBoxShadow['button']}>
                <div>单独span</div>
            </div>
            <div className={useBoxShadow['button']} style={{ height: '100px', borderRadius: '400px' }}>
                <span>设定父元素CSS属性</span>
            </div>
            <div className={useBoxShadow['button']} style={{ height: '100px', width: '460px', borderRadius: '400px' }}>
                <div style={{ padding: '0', display: 'flex', height: '100%', widht: '100%' }}>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <span>指定父元素大小并设置子元素居中</span>
                    </div>
                </div>
            </div>
            <div className={useBoxShadow['button']}>
                <div style={{ height: 'auto', padding: '20px 10px' }}>
                    <div>A</div>
                    <div>B</div>
                    <div>C</div>
                    <div>元素</div>
                    <div>分段</div>
                </div>
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
                <Button />
                <hr />
            </div>
        );
    }
}

export default () => {
    return <Demo />;
};