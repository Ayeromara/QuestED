import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    bottomContainer:{
        flex: 1,
        marginTop: verticalScale(35),
    },
    signupredir:{
        justifyContent:'center',
        flexDirection:'row',
        marginTop: verticalScale(20)
    },
    topContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default style;