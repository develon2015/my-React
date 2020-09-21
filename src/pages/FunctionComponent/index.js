import css from './style.css';
import Tag from '@/components/Tag';
import Button from '@/components/Button';
import Code from '@/components/Code';
import Alert from '@/components/Alert';

export default (
    <div className={css.container}>
        <div className={css.content}>
            <Button onClick={() => {
                // 调用Alert函数
                Alert(<h1>1</h1>);
                Alert(<h1> 2</h1>);
            }}>提示框</Button>
        </div>
    </div>
);