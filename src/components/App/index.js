import { HashRouter as Router, Switch, Route, Link, } from 'react-router-dom';
import Index from '../Index';
import Title from '../Title';
import Button from '../Button';
import './style.css';
import Test from '../Test';

// 由于App不是一个通用组件, 不需要继承Component类, 直接导出一个React组件即可
export default App => (
    <Router>
        <div>
            <div>
                <Title>
                    <Link to="/" type="div"><Button>Home</Button></Link>
                </Title>
            </div>
            <div>
                <Switch>
                    <Route path="/test"><Test /></Route>
                    <Route path="/"><Index /></Route>
                </Switch>
            </div>
        </div>
    </Router>
);