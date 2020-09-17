const Pages = ['Keyframes', 'WhatsJSX', 'useHistory'];
const ReactPages = Pages.map(page => require(`@/pages/${page}`).default);

export { Pages, ReactPages };