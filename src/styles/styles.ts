import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#101545',
      paddingHorizontal: 30,
    },
    header: {
        marginTop: 30,
        alignItems: 'center',
    },
    title: {
        marginTop: 50,
        marginBottom: 30,
        alignItems: 'center',
    },
    inputfields: {
        marginBottom: 5,
    },
    selectfields: {

    },
    textlogo: {
        color: '#FFFFFF',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center', 
    },
    texttittle: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center', 
    },
    textinput: {
        color: '#F0F0F0',
        fontSize: 20,
        marginTop: 5,
        textAlign: 'left', 
    },
    input: {
        height: 45,
        borderRadius: 10,
        color: '#1A1A1A',
        width: '100%',
        marginTop: 5,
        backgroundColor: '#D9D9D9',
        borderColor: '#FFFFFF', 
        borderWidth: 1,
        padding: 10,
        fontSize: 18, 
        alignItems: 'center',
    },
    select: {
        height: 45,
        borderRadius: 10,
        color: '#1A1A1A',
        width: '100%',
        marginTop: 5,
        backgroundColor: '#D9D9D9',
        borderColor: '#FFFFFF', 
        borderWidth: 1,
        padding: 10,
        fontSize: 18, 
        alignItems: 'center',
    }
  });
  