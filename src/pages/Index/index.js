import css from './style.css';
import { Link, } from 'react-router-dom';
import { Pages, } from '@/pages/router';
import Button from '@/components/Button';

const map_route = Pages.map((page, index) => (
    <Button key={index}><Link to={'/' + page}>{ page }</Link></Button>
));

export default (
    <div className={css.index}>
        <h1>Index of Application</h1>
        {map_route}
    </div>
);