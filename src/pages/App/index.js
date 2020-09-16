import { HashRouter as Router, Switch, Route, Link, } from 'react-router-dom';
import './style.css';
import Index from '@/pages/Index';
import Title from '@/components/Title';
import Button from '@/components/Button';
import { Pages, ReactPages, } from '@/pages/router';

const map_route = ReactPages.map((it, index) => (
    <Route key={index} path={'/' + Pages[index]}>
        {/* 页面不是组件, 导出元素就不需要实例化Component对象再调用render函数 */}
        {/* {new it().render()} */}
        {it}
    </Route>
));

// 由于App不是一个通用组件, 不需要继承Component类, 直接导出一个React组件即可
export default (
    <Router>
        <div>
            <div>
                <Title>
                    <Button><Link to="/" type="div">React Center</Link></Button>
                </Title>
            </div>
            <div>
                <Switch>
                    {map_route}
                    <Route path="/">{ Index }</Route>
                </Switch>
            </div>
        </div>
    </Router>
);