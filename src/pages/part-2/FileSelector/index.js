import css from './style.css';
import Button from '@/components/Button';
import { Component } from 'react';

class FileSelector extends Component {
    constructor() {
        super();
        this.state = {
            files: [],
        };
    }
    onClick(event) {
        console.log(event);
        let a = document.createElement('input');
        a.type = 'file';
        a.accept = 'image/*';
        a.multiple = true;
        // a.webkitdirectory = true; // 选择目录，递归添加所有文件，丢失目录结构。非标准，但Chrome和Firefox均支持
        a.click();
        a.onchange = (event) => {
            let files = event.target.files;
            this.setState({ files });
        };
    }
    render() {
        return (
            <div>
                <Button onClick={(..._) => this.onClick(..._)}>
                    <div>选择文件</div>
                    
                </Button>
                {
                    Array.from(this.state.files).map((file, index) => {
                        let blobURL = URL.createObjectURL(file);
                        return (
                            <div key={index}>
                                <div>{file.name}</div>
                                <div>
                                    <img src={blobURL}/>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default () => (
    <div className={css.body}>
        <div className={[css.center, css.data].join(' ')}>
            <FileSelector></FileSelector>
        </div>
    </div>
);