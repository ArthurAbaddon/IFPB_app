import { Text, View, StatusBar, TextInput } from 'react-native';
import { styles } from '../../styles/styles';
import { Picker } from '@react-native-picker/picker';

export function Home() {
  return ( <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
    <View style={styles.header}>
        <Text style={styles.textlogo}>LOGO</Text>   
    </View>
    <View style={styles.title}>
        <Text style={styles.texttittle}>Cadastro</Text>
    </View>
    <View style={styles.inputfields}>
        <Text style={styles.textinput}>Nome:</Text>
        <TextInput
            style={styles.input}
            placeholder="Digite seu nome e sobrenome"
            placeholderTextColor="#A9A9A9" 
            //onChangeText={"setInputValue"} 
            //value={"nome"}
        />
        <Text style={styles.textinput}>Idade:</Text>
        <TextInput
            style={styles.input}
            placeholder="Digite sua idade"
            placeholderTextColor="#A9A9A9" 
            keyboardType="numeric" 
            maxLength={2}
            //onChangeText={"setInputValue"} 
            //value={"nome"}
        />
        <Text style={styles.textinput}>Escolaridade:</Text>
        <Picker
          // selectedValue={selectedEducation}
          // onValueChange={(itemValue) => setSelectedEducation(itemValue)}
          style={styles.select}
        >
          <Picker.Item label="Selecione a escolaridade" value="" enabled={false} /> 
          <Picker.Item label="Ensino Fundamental" value="fundamental" />
          <Picker.Item label="Ensino Médio" value="medio" />
          <Picker.Item label="Graduação" value="graduacao" />
          <Picker.Item label="Pós-graduação" value="pos-graduacao" />
        </Picker>
    </View>
    <View style={styles.selectfields}>

    </View>
  </View>
  );
}