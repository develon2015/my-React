const Pages = ['Keyframes', ];
const ReactPages = Pages.map(page => require(`@/pages/${page}`).default);

export { Pages, ReactPages };