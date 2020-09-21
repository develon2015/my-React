import css from './style.css';
import ReactDOM from 'react-dom';

const config = {
    title: 'Good',
};

let i = 0;
function getForegroundID() {
    return ++i;
}

function Alert() {
    return (
        <div>
            Hello
        </div>
    );
}

export default (props) => {
    let frame = document.createElement('div');
    frame.classList.add(css.frame);
    frame.id = `alert-${getForegroundID()}`;
    document.body.appendChild(frame);
    ReactDOM.render(Alert(), frame);
}