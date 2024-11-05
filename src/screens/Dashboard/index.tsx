import React ,{ useState, useRef, useEffect  } from 'react';
import { Text, View, TextInput, ScrollView, Pressable, Alert, TouchableOpacity } from 'react-native';
import { styles, tutor } from '../../styles/styles';
import LottieView from 'lottie-react-native';
import { useNavigation, NavigationProp  } from '@react-navigation/native';
import { RootStackParamList } from '../../@types/rootstack';


export default function Dashboard() {


const scrollViewRef = useRef<ScrollView | null>(null);

const getPaddingBottom = (isOpen: boolean) => (isOpen ? 350 : 200);
const [isTyping, setIsTyping] = useState(false);
const [userQuestion, setUserQuestion] = useState('');
const [userQuestionDispaly, setuserQuestionDispaly] = useState('');
const [tutorResponses, setTutorResponses] = useState<string[]>([]); 
const [isInputVisible, setIsInputVisible] = useState(false);

const handleAskQuestion = () => {
    if (userQuestion.trim()) {
        setIsInputVisible(true);
        setIsTyping(true);
        // Simula um tempo de resposta do tutor
        setTimeout(() => {
            setTutorResponses([...tutorResponses, `Resposta do tutor para: ${userQuestion}`]);
            setUserQuestion(''); // Limpa o campo de entrada
            setuserQuestionDispaly(userQuestion)
            setIsTyping(false);
        }, 2000); // tempo em ms
    }
};

  return (
    <View style={styles.container}>
        {/* Caixa de diálogo do tutor */}
        <View style={tutor.chatfield}>
            <ScrollView style={tutor.studyRoutine}>
                {isTyping && (
                    <LottieView
                        source={require('../../assets/loading.json')} // substitua pelo caminho correto do arquivo JSON
                        autoPlay
                        loop
                        style={tutor.lottie}
                    />
                    )}
                    {/* Exibe todas as respostas armazenadas */}
                    {tutorResponses.map((response, index) => (
                    <Text key={index} style={tutor.tutorText}>{response}</Text>
                    ))}
                    {isInputVisible && (
                        <TextInput 
                            value={userQuestionDispaly}
                            style={[tutor.userText, tutor.alignRight]}
                            editable={false}>
                        </TextInput>
                    )}
            </ScrollView>
        </View>
        {/* Campo de entrada e botão */}
        <View style={tutor.inputChat}>
            <TextInput
            style={[tutor.input, tutor.alignLeft]}
            placeholder="Faça uma pergunta..."
            value = {userQuestion}
            placeholderTextColor='#A9A9A9'
            onChangeText={setUserQuestion}
            editable={!isTyping} // Impede a digitação enquanto o tutor está digitando
            />
            <Pressable style={[tutor.okButton, tutor.alignRight]} onPress={handleAskQuestion}>
            <Text style={tutor.buttonText}>OK</Text>
            </Pressable>
        </View>
        </View>
    );
};
