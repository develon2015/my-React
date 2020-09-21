import css from './style.css';
import { Link, } from 'react-router-dom';
import { Pages, } from '@/pages/router';
import Button from '@/components/Button';
import Tag from '@/components/Tag';

const map_route = Pages.map((page, index) => (
    <Link to={'./' + page}  key={index}><Button>{ page }</Button></Link>
));

export default (
    <div className={css.index}>
        <Tag>Index of Application</Tag>
        {map_route}
    </div>
);