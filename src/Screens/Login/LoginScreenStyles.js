
import {StyleSheet} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: hp('5%'),
        marginBottom: hp('5%'),
      },
    input: {
      width: wp('80%'),
      height: hp('5%'),
      borderWidth: 1,
      borderColor: '#cccccc',
      borderRadius: 5,
      marginVertical: hp('1%'),
      paddingHorizontal: wp('2%'),
    },
    button: {
      backgroundColor: 'blue',
      width: wp('80%'),
      height: hp('5%'),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      marginTop: hp('2%'),
    },
    buttonTitle: {
      color: 'white',
      fontSize: hp('2%'),
    },
    forgotPassword:{
        textDecorationLine:'underline',
        fontSize: hp('2%'),
        marginTop: hp('3%'),
    },
    bottomTitleBody:{
        marginTop: hp('5%'),
    },
    bottomTitle:{
        fontSize: hp('2%'),
        marginTop: hp('3%'),
        // marginBottom: hp('5%'),
    },
  });
export default styles;