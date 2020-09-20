import css from './style.css';
import Button from '../../components/Button';
import Code from '@/components/Code';
import { createElement, Component, } from 'react';

class Demo extends Component {
    constructor() {
        super();
        this.state = { code: '等待异步加载代码' };
    }
    render() {
        return (
            <div className={css.container}>
                <div className={css.content}>
                    <Button onClick={() => {
                        // 异步import, 模块的处理过程将作为一个分割点单独打包为独立模块, 再通过ajax请求
                        // 打包后的文件称为非入口点文件, 文件名可以通过Webpack配置中的config.output.chunkFilename确定
                        // Magic Comments可以通过js注释的方式控制每个非入口点文件, 官方文档:
                        // https://webpack.js.org/api/module-methods/#magic-comments
                        import(
                            // 指定文件名, 准确的说是[name]变量, 有重名的风险, 在Webpack配置中再指定[id]变量
                            /* webpackChunkName: "AsyncImport-source-code" */
                            '!raw-loader!.' // .表示当前js文件
                        ).then(({ default: text }) => {
                            this.setState({ code: text });
                        });
                    }}>异步加载文件内容</Button>
                </div>
                <div>
                    <h1>代码实现:</h1>
                    <Code>{this.state.code}</Code>
                </div>
            </div>
        );
    }
}

export default <Demo />;