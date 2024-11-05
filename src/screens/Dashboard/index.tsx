import React ,{ useState, useRef, useEffect  } from 'react';
import { Text, View, TextInput, ScrollView, Pressable, Alert, TouchableOpacity } from 'react-native';
import { styles, tutor } from '../../styles/styles';
import LottieView from 'lottie-react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
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
const [chatHistory, setChatHistory] = useState<{ type: 'user' | 'tutor'; text: string }[]>([]);

const handleAskQuestion = () => {
    if (userQuestion.trim()) {
        // Adiciona a pergunta do usuário ao histórico de chat
        setChatHistory(prevHistory => [
            ...prevHistory,
            { type: 'user', text: userQuestion }
        ]);
        setIsTyping(true);

        // Simula o tempo de resposta do tutor
        setTimeout(() => {
            setChatHistory(prevHistory => [
                ...prevHistory,
                { type: 'tutor', text: `Resposta do tutor para: ${userQuestion}` }
            ]);
            setUserQuestion(''); // Limpa o campo de entrada
            setIsTyping(false);
        }, 2000);
    }
};

  return (
    <View style={styles.container}>
        {/* Caixa de diálogo do tutor */}
        <View style={tutor.chatfield}>
            <ScrollView style={tutor.studyRoutine}>
                {chatHistory.map((message, index) => (
                        <View key={index} style={{ alignSelf: message.type === 'user' ? 'flex-end' : 'flex-start', marginBottom: 8, marginLeft:3, }}>
                            {/* {message.type === 'tutor' && (
                                <AntDesign name="user" size={32} color='#FFF' style={tutor.icon} />
                            )} */}
                            <TextInput  style={message.type === 'user' ? tutor.userText : tutor.tutorText} multiline={true} editable={false}>
                                {message.text}
                            </TextInput >
                        </View>
                    ))}
                    {isTyping && (
                        <LottieView
                            source={require('../../assets/loading.json')} // Substitua pelo caminho correto do arquivo JSON
                            autoPlay
                            loop
                            style={tutor.lottie}
                        />
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
