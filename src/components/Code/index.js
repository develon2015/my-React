import css from './style.css';

export default (props) => {
    let line_number = 0;
    // 空格和<>等符号替换为html转义字符
    let html = props.children
        .replaceAll('&', '&amp;') // 先替换&符号
        .replaceAll('<', '&lt;').replaceAll('>', '&gt;')
        .replaceAll(' ', '&nbsp;')
        ;
    // 字符串中的换行替换为<br>, 并添加行号
    let unline_html = html.split('\n');
    let final_html = '';
    if (props.inline) {
        unline_html.forEach(line => {
            final_html += `${line}<br>`;
        });
    } else {
        unline_html.forEach(line => {
            final_html += `<div style="user-select: none; color: pink; display: inline-block; width: 40px">${++line_number < 10 ? '0' + line_number : line_number}</div>${line}<br>`;
        });
    }
    return (
        <span className={css.code} dangerouslySetInnerHTML={{ __html: final_html }}
            style={props.inline ? { display: "inline-block" } : null}>
        </span>
    );
};