import { StyleSheet, ViewStyle  } from 'react-native';

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
    horarioContainer: {
        marginTop: 10,
    },
    intervaloContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    adicionarBotaoHorario: {
        backgroundColor: '#007AFF',
        padding: 8,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
      },
      botaoTextoHorario: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
      },
});

export const selectStyles = StyleSheet.create({
    dropdown: {
        height: 40,
        width: '100%',
        marginTop: 5,
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
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    dotStyle: {
        borderRadius: 2
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

export const tutor = StyleSheet.create({
    chatfield:{
        backgroundColor: "#0C1034",
        paddingHorizontal: 4,
        marginTop: 20,
        marginBottom: 10,
        flex: 1,
        
    },
    studyRoutine:{
        backgroundColor: "#0C1034",

    },
    texttutor:{
        color: '#FFFFFF',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 10,
    },
    userText:{
        backgroundColor: '#3599FA',
        maxHeight: '100%',
        color: "#FFFFFF",
        borderRadius: 20,
        maxWidth: '80%',
        textAlign: 'left',
        padding: 10,
        marginTop: 10,
        textAlignVertical: 'top',
    },
    alignRight: {
        alignSelf: 'flex-end', // Alinha o input à direita
    },
    alignLeft: {
        alignSelf: 'flex-start', // Alinha o input à direita
    },
    okButton:{
        backgroundColor: '#1E90FF',
        width: '25%',
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center', // Centraliza o conteúdo do botão verticalmente
        marginLeft: 15,
        marginRight: 0,
    },
    buttonText:{
        color: "#FFFFFF",
        textAlign: 'center',
        fontSize: 20,
    },
    tutorText:{
        color: "#FFFFFF",
        fontSize: 15,
    },
    inputChat: {
        marginTop: 1,
        marginBottom: 10,
        flexDirection: 'row', // Coloca os filhos lado a lado
        alignItems: 'center', // Centraliza verticalmente os filhos
    },
    tutorDialog: {
        marginVertical: 16,
        backgroundColor: '#2b2b4a',
        padding: 16,
        borderRadius: 8,
        minHeight: 60,
    },
    lottie:{
        width: '40%', 
        height: 30, 
        alignSelf: 'center', 
        marginVertical: 10, 
    },
    input:{
        width: '70%',
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        height: 40,
        textAlign: 'left',
        padding: 10,
    },
    icon:{
        marginRight: 8, // Espaço entre o ícone e o texto
    },
})