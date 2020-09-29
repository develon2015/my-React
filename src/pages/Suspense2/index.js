/**
 * 如果组件需要重新渲染, 最好还是使用有状态的类组件, 可以继承父类强制更新
 */
import { Component, lazy, Suspense, createElement, useRef, createRef } from 'react';
import css from './style.css';
import Button from '@/components/Button';
import ReactDOM from 'react-dom';

// 单例
let fetchNameByInternet = () => new Promise(resolve => {
    console.log('网络请求开始了, 将于4秒后完成');
    setTimeout(() => resolve('develon'), 4000);
});

let resolved = false; // 标志网络请求是否已完成
let name = "Don't get the Name"; // 存储从网络获取的用户名

function fetchName() {
    console.log('尝试联网获取用户名...');
    if (resolved) {
        console.log(`获取到数据: "${name}" !`);
        return name;
    }
    throw fetchNameByInternet().then(network_name => {
        resolved = true;
        name = network_name;
    });
}

function FunctionComponent(props) {
    console.log('方法组件被调用, 尝试获取用户名并渲染UI...');
    let name = fetchName();
    console.log('方法组件继续执行, 开始渲染元素');
    return <h2>用户名: {name}</h2>
}

function loadUserName() {
    return (
        <Suspense fallback={<h1>正在联网获取用户名...</h1>}>
            <FunctionComponent />
        </Suspense>
    );
}

let div_name = createRef();
function refresh() {
    resolved = false; // 强制模拟请求
    div_name.current && ReactDOM.render(loadUserName(), div_name.current);
}

class Demo extends Component {
    handleClick() {
        this.forceUpdate();
    }
    render() {
        // setTimeout(refresh, 0);
        // Promise.resolve().then(refresh); // 还可以使用立即的Promise
        // refresh(); // ref尚未挂载
        return (
            <div id={css.app} className={css.container}>
                <div className={[css.center].join(' ')}>
                    <div ref={div_name} style={{ textAlign: 'center' }}>
                        {/* 占位 */}
                        {(() => { resolved = false; return loadUserName(); })()}
                    </div>
                    <div className={[css.container].join(' ')}>
                        <div className={[css.center].join(' ')}>
                            <Button onClick={() => this.handleClick()}>刷新</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default (
    <Demo />
);