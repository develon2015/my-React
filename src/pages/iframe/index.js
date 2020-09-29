import { Component, createRef } from "react";
import css from './style.css';
import html from './iframe.html';
import Button from '@/components/Button';

let iframe = createRef();
class Demo extends Component {
    handleClick() {
        // iframe.current.src = html; // 重新加载文档
        iframe.current.srcdoc = `<script>console.log('Hello, from iframe');</script>`;
    }
    componentDidMount() {
        iframe.current.addEventListener('load', (event) => {
            let iframe = event.target;
            let doc = iframe.contentDocument;
        });
    }
    render() {
        return (
            <div id={css['app']}>
                <iframe style={{ border: 'none' }} ref={iframe}>ok</iframe>
                <div>
                    <Button onClick={() => this.handleClick()}>Go</Button>
                </div>
            </div>
        );
    }
}

export default (
    <Demo />
);