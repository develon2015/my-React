import css from './style.css';
import { Link, } from 'react-router-dom';
import { Pages, } from '@/pages/router';
import Button from '@/components/Button';

const map_route = Pages.map((page, index) => (
    <Link to={'/' + page}  key={index}><Button>{ page }</Button></Link>
));

export default (
    <div className={css.index}>
        <hr />
        <h1>Index of Application</h1>
        <hr />
        {map_route}
    </div>
);