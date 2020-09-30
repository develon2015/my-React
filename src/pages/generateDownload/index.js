/**
 * 演示使用a标签生成下载, 命名下载文件名, 数据转base64
 * Data URLs 由四个部分组成：前缀(data:)、指示数据类型的MIME类型、如果非文本则为可选的base64标记、数据本身：
 * data:[<mediatype>][;base64],<data>
 */
import { Component } from 'react';
import Button from '@/components/Button';
import Code from '@/components/Code';

class Demo extends Component {
    handleClick(event) {
        let a = document.createElement('a');
        let text = 'ABC你好'; // 要存放的utf-8文本, 无法使用btoa转base64编码
        switch (event.target.innerText) {
            case '使用URI编码文本后再base64编码的Data URLs': {
                a.href = `data: application/octet-stream; base64,${btoa(encodeURI(text))}`; // 文本中含有汉字而无法使用btoa转义, 因此使用URI编码文本
                break;
            }
            case '使用utf-8编码文本的Data URLs': {
                a.href = `data: application/octet-stream; utf-8,${text}`; // 不使用base64, 使用utf-8编码保存文件
                break;
            }
            /* 在每次调用 createObjectURL() 方法时，都会创建一个新的 URL 对象，即使你已经用相同的对象作为参数创建过。
             * 当不再需要这些 URL 对象时，每个对象必须通过调用 URL.revokeObjectURL() 方法来释放。
             */
            case '使用Blob创建ObjectURL本地链接': {
                let blob = new Blob([text, 123], { type: 'application/octet-stream' });
                console.log(blob); // Blob { size: 12, type: "application/octet-stream" }
                a.href = URL.createObjectURL(blob);
                console.log(a.href); // 一个以"blob:"开头的URL地址
                break;
            }
            case '使用FileReader将Blob编码为Data URLs': {
                let reader = new FileReader();
                reader.addEventListener('loadend', event => {
                    a.href = event.target.result;
                    console.log(a.href); // Data URLs
                    // 这里是异步的, 所以要重复操作
                    a.download = '文件.end'; // 8位位组八位字节流可以自定义文件后缀
                    a.click(); // 遗憾的是, 无法感知文件下载完成事件, 从而无法主动释放Blob对象创建的ObjectURL
                });
                let blob = new Blob([text], { type: 'application/octet-stream' });
                reader.readAsDataURL(blob);
                break;
            }
        }
        a.download = '文件.end'; // 8位位组八位字节流可以自定义文件后缀
        a.click(); // 遗憾的是, 无法感知文件下载完成事件, 从而无法主动释放Blob对象创建的ObjectURL
    }
    render() {
        return (
            <div>
                <Button onClick={_ => this.handleClick(_)}>使用URI编码文本后再base64编码的Data URLs</Button>
                <Button onClick={_ => this.handleClick(_)}>使用utf-8编码文本的Data URLs</Button>
                <Button onClick={_ => this.handleClick(_)}>使用Blob创建ObjectURL本地链接</Button>
                <Button onClick={_ => this.handleClick(_)}>使用FileReader将Blob编码为Data URLs</Button>
            </div>
        );
    }
}

export default (
    <div>
        <Demo />
        <Code>{require('!raw-loader!.').default}</Code>
    </div>
);