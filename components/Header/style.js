import { StyleSheet } from "react-native";
import { scaleFontSize } from "../../assets/styles/scaling";


const style = StyleSheet.create({
    title1 : {
        fontFamily:'DMSans-Bold' ,
        fontSize: scaleFontSize(22),
        color: 'white',
    },
    title2 : {
        fontFamily:'DMSans-Bold' ,
        fontSize: scaleFontSize(22),
        color: '#161719',
    },
    title3 : {
        fontFamily:'DMSans-Bold' ,
        fontSize: scaleFontSize(28),
        color: '#161719',
    }
})

export default style;