const Pages = ['Keyframes', 'WhatsJSX', 'useHistory', 'AsyncImport'];
const ReactPages = Pages.map(page => require(`@/pages/${page}`).default);

export { Pages, ReactPages };