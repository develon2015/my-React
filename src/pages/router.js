import { lazy } from "react";

const part1 = ['Keyframes', 'WhatsJSX', 'useHistory', 'AsyncImport', 'font', 'FunctionComponent',
    'AsyncComponent',
    'Suspense',
    'Suspense2',
    'iframe',
    'generateDownload',
    'Button css class',
];
const part2 = [
];

const Pages = [
    ...part1.map(it => `part-1/${it}`),
    ...part2.map(it => `part-2/${it}`),
];

// const ReactPages = Pages.map(page => require(`@/pages/${page}`).default); // 臃肿的index.js

// 页面全部映射为lazy组件, 在Route中配置Suspense子组件, 并设置该Suspense组件的fallback和children属性
// Suspense组件的children属性就是延迟加载的页面组件
// 这些延迟加载的页面组件必须是函数或者类
const ReactPages = Pages.map(page => lazy(() => import(
    /* webpackChunkName: "page" */
    `@/pages/${page}`
)));

export { Pages, ReactPages };