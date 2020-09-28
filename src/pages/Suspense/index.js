import { Component, lazy, Suspense, createElement, useRef } from 'react';
import css from './style.css';

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

export default (
    <div id={css.app}>
        <Suspense fallback={<h1>正在联网获取用户名...</h1>}>
            <FunctionComponent/>
        </Suspense>
    </div>
);