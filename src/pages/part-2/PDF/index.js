import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
// 自带字体为拉丁文, 无法支持汉字
import { Font } from '@react-pdf/renderer';
import kanji_ttf from '!file-loader!./Kanji.ttf.xyz';
// 注册字体
// let kanji_ttf = ''; // 从远程URL加载
Font.register({
    src: kanji_ttf,
    family: 'kanji',
});

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 2,
        fontFamily: 'kanji',
        fontSize: 297,
    },
});

const MyDocument = () => {
    function loadded() {
        console.log('PDF已加载');
    }

    return (
        <Document onRender={loadded}>
            {
                [1, 2, 3, 4, 5].map(it => (
                    <Page key={it} size="A4" style={styles.page}>
                        <View style={styles.section}>
                            <Text>财务报表 {it}/100</Text>
                            <Text>然后按每个方格角点的施工高度算出填、挖土方量，并计算场地边坡的土方量，这样即得到整个场地的填、挖土方总量</Text>
                        </View>
                    </Page>
                ))
            }
        </Document>
    );
};

export default () => {
    return (
        <div style={{ width: '100vw', height: 'calc(100vh - 80px)', textAlign: 'center' }}>
            <PDFViewer style={{ width: 'calc(100% - 4px)', height: 'calc(100% - 8px)' }}>
                <MyDocument />
            </PDFViewer>
        </div>
    );
};