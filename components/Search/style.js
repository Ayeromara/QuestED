import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style= StyleSheet.create({
    searchInput:{
        flex:1,
        marginRight: horizontalScale(6),
        height: '100%',
        fontSize: scaleFontSize(20),
        lineHeight: scaleFontSize(14),
        fontFamily: 'DMSans-Medium'
    },
    searchContainer:{
        flexDirection:'row',
        paddingHorizontal: horizontalScale(16),
        backgroundColor: '#FCFCFF',
        height: verticalScale(50),
        alignItems:'center',
        borderRadius: horizontalScale(10)
    }
});

export default style;