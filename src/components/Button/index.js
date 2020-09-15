import { Component, } from 'react';
import css from './style.css';

class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={css.button} onClick={() => this.props.onClick?.apply(this)}>
                {this.props.children}
            </div>
        );
    }
}

export default Button;