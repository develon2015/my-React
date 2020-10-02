import { Component, lazy, Suspense, createElement, useRef } from 'react';
import css from './style.css';

/**
 * 异步组件使用lazy()函数加载, 传递一个使用import()函数的Promise异步方法, 该方法最终返回import()函数的结果
 */
const AsyncComponent = lazy(() => new Promise((resolve, reject) => {
    import('./AsyncComponent').then(AsyncComponent => {
        console.log('加载完毕, 延迟传送');
        setTimeout(() => {
            console.log('传送');
            resolve(AsyncComponent);
        }, 2000);
    });
}));

export default () => (
    <div id={css.app}>
        <Suspense fallback={<h1>正在lazy加载异步组件...</h1>}>
            <AsyncComponent />
        </Suspense>
    </div>
);