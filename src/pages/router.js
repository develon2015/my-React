const Pages = ['Keyframes', 'WhatsJSX', 'useHistory', 'AsyncImport', 'font', 'FunctionComponent',
    'AsyncComponent',
    'Suspense',
    'Suspense2',
    'iframe',
];
const ReactPages = Pages.map(page => require(`@/pages/${page}`).default);

export { Pages, ReactPages };