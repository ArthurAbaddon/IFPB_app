import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      backgroundColor: '#101545',
      paddingHorizontal: 30,
    },
    header: {
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
        overflow: 'visible', 
    },
    textlogo: {
        color: '#F0F0F0',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center', 
    },
    texttittle: {
        color: '#F0F0F0',
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
    scrollStyle: {
        flex: 1,
        backgroundColor: '#101545', // Cor de fundo do ScrollView
        
    },
    container_scroll: {
        paddingBottom: 200,   
        backgroundColor: '#101545',
    },
    buttonfields:{
        marginTop: 20,
        alignItems: "center",
    },
    button: {
        height: 52,
        borderRadius: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    buttonText: {
        textAlign: 'center',
        color: '#F0F0F0',
        fontSize: 20,
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
        maxHeight: 300,
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
        color: '#1A1A1A',
        // fontWeight: 'bold', 
    },
});
  
export const navigator = StyleSheet.create({
    headernavigator: {
        backgroundColor: '#101545',
    },    
    headertextcolor: {
        
    },
    headertextstyle:{
        color: '#fff',
        fontWeight: 'bold',
    },


});

export const badgeStyle = StyleSheet.create({
    badgestyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
    },
    dotStyle: {
        borderRadius: 2
    },
    badgeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '80%',
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
    },
    badgeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#eee',
        borderRadius: 12,
        marginRight: 5,
        marginBottom: 5,
    },
    badgeText: {
        fontSize: 12,
    },
    removeBadge: {
        color: 'red',
        marginLeft: 5,
    },
})