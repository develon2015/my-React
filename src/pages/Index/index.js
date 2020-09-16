import { createElement as e, Component, } from 'react';
import css from './style.css';
import { Link, } from 'react-router-dom';
import { Pages, ReactPages, } from '@/pages/pages';
import Button from '@/components/Button';

const map_route = ReactPages.map((it, index) => (
        <Button key={index}><Link to={'/'+Pages[index]}>Go</Link></Button>
));

export default class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={css.index}>
                <h1>Index of Application</h1>
                { map_route }
            </div>
        );
    }
}