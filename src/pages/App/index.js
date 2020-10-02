import { HashRouter as Router, Switch, Route, Link, useHistory, } from 'react-router-dom';
import css from './style.css';
import Index from '@/pages/Index';
import Title from '@/components/Title';
import Button from '@/components/Button';
import { Pages, ReactPages, } from '@/pages/router';
import { Suspense } from 'react';

// 页面全部打包到index.js中
// const map_route = ReactPages.map((el_or_func, index) => (
//     <Route key={index} path={'/' + Pages[index]}>
//         {/* 页面不是组件, 导出元素就不需要实例化Component对象再调用render函数 */}
//         {/* {new it().render()} */}
//         {/* 按理说这里每个页面的导出, 必须是React元素 */}
//         {/* 但是经过验证, 函数组件也是可以的(严格地说应该是一个返回组件的函数), 无须作为函数调用, 这确实非常方便 */}
//         {/* {el_or_func} */}
//     </Route>
// ));

const map_route = ReactPages.map((LazyComponent, index) => (
    <Route key={index} path={'/' + Pages[index]}>
        {
            // 如果Route的children是一个函数, 则可以接受route参数
            route => {
                return (
                    <Suspense fallback={<h1>加载中...</h1>}>
                        {/* LazyComponent是lazy函数返回的组件 */}
                        <LazyComponent></LazyComponent>
                    </Suspense>
                );
            }
        }
    </Route>
));

/** 应用程序头部 */
function Header() {
    const history = useHistory();
    return (
        <div>
            <Title>
                <div className={css.head} onClick={() => history.push("/")}>React Center</div>
            </Title>
        </div>
    );
}

// 由于App不是一个通用组件, 不需要继承Component类, 直接导出一个React组件即可
export default (
    <Router>
        <div className={css.app}>
            <Header />
            <div>
                <Switch>
                    {map_route}
                    <Route path="/">{Index}</Route>
                </Switch>
            </div>
        </div>
    </Router>
);