const Pages = ['Keyframes', 'WhatsJSX', 'useHistory', 'AsyncImport', '字体'];
const ReactPages = Pages.map(page => require(`@/pages/${page}`).default);

export { Pages, ReactPages };