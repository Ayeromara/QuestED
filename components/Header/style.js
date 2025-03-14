import { StyleSheet } from "react-native";
import { scaleFontSize } from "../../assets/styles/scaling";


const style = StyleSheet.create({
    title1 : {
        fontFamily:'DMSans-Bold' ,
        fontSize: scaleFontSize(14),
        color: '#FCFCFF',
    },
    title2 : {
        fontFamily:'DMSans-Bold' ,
        fontSize: scaleFontSize(14),
        color: '#161719',
    },
    title3 : {
        fontFamily:'DMSans-Bold' ,
        fontSize: scaleFontSize(24),
        color: '#FCFCFF',
    },
    title4 : {
        fontFamily:'DMSans-Bold' ,
        fontSize: scaleFontSize(12),
        color: '#6360FF',
    },
})

export default style;