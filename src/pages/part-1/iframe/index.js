import { Component, createRef } from "react";
import css from './style.css';
import html from './iframe.html';
import Button from '@/components/Button';
import Alert from "@/components/Alert";
import Code from "@/components/Code";

function executeFuncByIframe(func) {
    let iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.style.border = 'none';
    iframe.srcdoc = `<script>(${func.toString()})()</script>`;
    document.body.appendChild(iframe); // 不显示的frame, 必须要插入根文档中才会开始解析执行
    iframe.addEventListener('load', (event) => {
        let iframe = event.target;
        let doc = iframe.contentDocument; // 同源则可以访问子框架的文档, 不同源则为null, srcdoc方式则文档的head和body为null
        console.log('iframe已开始执行');
    });
}

class Demo extends Component {
    handleClick() {
        executeFuncByIframe(this.task);
        // this.task();
    }
    task() {
        let xhr = new XMLHttpRequest();
        xhr.open('post', 'http://baidu.com/api');
        xhr.setRequestHeader('Content-Type', 'application/json'); // 将触发OPTINOS预检请求
        xhr.send(JSON.stringify({ user_name: 'amdin', passwd: '123456' })); 
        xhr.addEventListener('error', event => {
            alert('预检失败! 请求被拦截 from iframe'); // 就没什么用, 不过还是了解一下这项技术吧
        });
    }
    render() {
        return (
            <div id={css['app']}>
                <div>
                    <Button onClick={() => this.handleClick()}>在iframe中执行ajax复杂请求</Button>
                </div>
                <div>
                    <Code>{require('!raw-loader!.').default}</Code>
                </div>
            </div>
        );
    }
}

export default () => (
    <Demo />
);