import { createElement as e, Component, } from 'react';
import css from './style.css';

class Index extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={css.index}>
                <h1>Index of Application</h1>
            </div>
        );
    }
}

export default Index;