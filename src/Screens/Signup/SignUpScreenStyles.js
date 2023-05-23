
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';

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
      borderColor: 'gray',
      marginBottom: hp('2%'),
      padding: wp('2%'),
    },
    button: {
      backgroundColor: 'blue',
      width: wp('80%'),
      height: hp('5%'),
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: hp('2%'),
    },
    buttonText: {
      color: 'white',
      fontSize: hp('3%'),
      marginBottom: hp('2%'),
    },
  });
  
  
    

export default styles;