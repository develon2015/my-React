import css from './style.css';
import Button from '@/components/Button';
import Code from '@/components/Code';
import Title from '@/components/Title';
import { createElement, Component, createRef, } from 'react';

let uta = 
`花謝花飛飛滿天，紅消香斷有誰憐？
游絲軟系飄春榭，落絮輕沾撲繡簾。
閨中女兒惜春暮，愁緒滿懷無釋處。
手把花鋤出繡簾，忍踏落花來復去？
柳絲榆莢自芳菲，不管桃飄與李飛。
桃李明年能再發，明年閨中知有誰？
三月香巢已壘成，梁間燕子太無情！
明年花發雖可啄，卻不道人去梁空巢也傾。
一年三百六十日，風刀霜劍嚴相逼。
明媚鮮妍能幾時？一朝漂泊難尋覓。
花開易見落難尋，階前悶死葬花人。
獨倚花鋤淚暗灑，灑上空枝見血痕。
杜鵑無語正黃昏，荷鋤歸去掩重門。
青燈照壁人初睡，冷雨敲窗被未溫。
怪奴底事倍傷神？半為憐春半惱春。
憐春忽至惱忽去，至又無言去不聞。
昨宵庭外悲歌發，知是花魂與鳥魂。
花魂鳥魂總難留，鳥自無言花自羞。
愿奴脅下生雙翼，隨花飛到天盡頭。
天盡頭，何處有香丘？
未若錦囊收艷骨，一抷凈土掩風流！
質本潔來還潔去，強于污淖陷渠溝。
爾今死去儂收葬，未卜儂身何日喪？
儂今葬花人笑癡，他年葬儂知有誰？
試看春殘花漸落，便是紅顏老死時。
一朝春盡紅顏老，花落人亡兩不知！`;

class Demo extends Component {
    constructor() {
        super();
        this.uta = createRef();
    }
    render() {
        return (
    <div className={css.container}>
        <div>
            <Title>葬花吟</Title>
            <p ref={this.uta} className={css.p}>{uta}</p>
        </div>
        <div>
            <Button onClick={() => {
                this.uta.current.classList.toggle(css.font);
            }}>切换</Button>
        </div>
    </div>
        );
    }
}

export default () => <Demo />;