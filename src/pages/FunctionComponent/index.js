import css from './style.css';
import Tag from '@/components/Tag';
import Button from '@/components/Button';
import Code from '@/components/Code';
import Alert from '@/components/Alert';

export default (
    <div className={css.container}>
        <div className={css.content}>
            <Button onClick={() => {
                //
                Alert();
            }}>提示框</Button>
        </div>
    </div>
);