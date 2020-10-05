/**
 * 我认为有两种方法组件
 * 一种是提示框这种应用场景, 我们需要在任何时候通过调用一个函数向document添加父容器并挂载React组件
 * 一种是传统意义上的方法组件, 与类组件对应, 通常是一种无状态的组件
 */
import css from './style.css';
import Tag from '@/components/Tag';
import Button from '@/components/Button';
import Code from '@/components/Code';
import Alert from '@/components/Alert';
import code from '!raw-loader!.';
import code_alert from '!raw-loader!@/components/Alert';
import { createElement, createRef, } from 'react';
import ReactDOM from 'react-dom';

export default () => {
    let container_code = createRef();
    return (
        <div className={css.container}>
            {/* 使用ref建立占位符, 按钮点击事件中动态挂载DOM */}
            <div ref={container_code}></div>
            <div className={css.content}>
                <Button onClick={() => {
                    // 调用Alert函数
                    let alert1 = Alert((
                        <div>
                            <Tag>注销账号?</Tag>
                            <div style={{ position: 'relative', margin: '20px' }}>
                                <Button onClick={() => {
                                    let alert2 = Alert((
                                        <div>
                                            <Tag>确认注销账号?</Tag>
                                            <div style={{ position: 'relative', margin: '20px' }}>
                                                <Button onClick={() => {
                                                    let alert3 = Alert((
                                                        <div>
                                                            <Tag>账号已注销</Tag>
                                                            <div style={{ textAlign: 'center', margin: '20px' }}>
                                                                {/* remove全部提示框 */}
                                                                <Button onClick={() => [alert1, alert2, alert3].forEach(it => it.remove())}>
                                                                    <span>确定</span>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    ));
                                                }}>Yes</Button>
                                                {/* 第二个提示框, No按钮 */}
                                                <span style={{ position: "absolute", right: 0, buttom: 0 }}>
                                                    <Button onClick={() => [alert1, alert2].forEach(it => it.remove())}>
                                                        <span>No</span>
                                                    </Button>
                                                </span>
                                            </div>
                                        </div>
                                    ));
                                }}>Yes</Button>
                                {/* 第一个提示框, No按钮 */}
                                <div style={{ position: "absolute", right: 0, buttom: 0, display: 'inline-block' }}>
                                    <Button onClick={() => alert1.remove()}>No</Button>
                                </div>
                            </div>
                        </div>
                    ));
                }}>提示框</Button>
                {/* 这里也是一个动态挂载 */}
                <Button onClick={() => ReactDOM.render((
                    <div>
                        <Tag>Alert组件:</Tag>
                        <Code>{code_alert}</Code>
                        <Tag>界面逻辑:</Tag>
                        <Code>{code}</Code>
                    </div>
                ), container_code.current)}>代码</Button>
            </div>
        </div>
    );
};