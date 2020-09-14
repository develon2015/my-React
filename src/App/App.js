import { createElement as e, Component, } from 'react';
import { Router, Route } from 'react-router-dom';
import css from './style.css';
import Index from '../components/Index';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={css.app}>
                <Router>
                    <Route component={Index}></Route>
                </Router>
            </div>
        );
    }
}

export default App;