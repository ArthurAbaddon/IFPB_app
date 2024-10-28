import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    scrollContainer: {
        padding: 1,
        flexGrow: 1,
    },
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
        marginBottom: 5,
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
});

export const selectStyles = StyleSheet.create({
    dropdown: {
        height: 40,
        width: '100%',
        marginTop: 5,
        borderColor: '#FFFFF',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
    },
    dropdownContainer: {
        borderRadius: 10,
        borderColor: '#FFFFF',
        borderWidth: 1,
        backgroundColor: '#D9D9D9',
    },
    textdrop: {
        color: '#1E90FF',
        fontSize: 18,
    },
    placeholder: {
        color: '#A9A9A9',
        fontSize: 18,
    },
    selectedItemLabel: {
        color: '#FFFFFF', 
        fontWeight: 'bold',
    },
    itemLabelSelected: {
        color: '#1A1A1A', 
    },
    selectedItemContainer: {
        backgroundColor: '#3498F9', 
    },
    itemContainer: {
        borderWidth: 1, 
        borderColor: '#101545', 
        marginVertical: 0.2, 
        backgroundColor: '#D9D9D9', 
    },
    itemLabel: {
        color: '#1A1A1A', // Cor do texto dos itens
        // fontWeight: 'bold', 
    },
});
  
