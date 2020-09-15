import { HashRouter as Router, Switch, Route, Link, } from 'react-router-dom';
import Index from '../Index';
import Title from '../Title';
import Button from '../Button';
import './style.css';
import Test from '../Test';

// 由于App不是一个通用组件, 不需要继承Component类, 直接导出一个React组件即可
export default App => (
    <div>
        <div>
            <Title>
                <Button onClick={function () { 
                    console.log(this);
                }}>Home</Button>
            </Title>
        </div>
        <div>
            <Router>
                <Switch>
                    <Route path="/test"><Test /></Route>
                    <Route path="/"><Index /></Route>
                </Switch>
            </Router>
        </div>
    </div>
);