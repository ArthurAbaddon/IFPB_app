import React ,{ useState, useRef, useEffect  } from 'react';
import { Text, View, TextInput, ScrollView, Pressable, Alert } from 'react-native';
import { selectStyles, styles, badgeStyle } from '../../styles/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation, NavigationProp  } from '@react-navigation/native';
import { RootStackParamList } from '../../@types/rootstack';


export default function Aprendizagem() {

const navigation = useNavigation<NavigationProp<RootStackParamList>>();

const scrollViewRef = useRef<ScrollView | null>(null);

// Função para renderizar o dropdown
const renderDropdown = (
  open: boolean,
  value: string[] | null,
  items: { label: string; value: string }[],
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setValue: React.Dispatch<React.SetStateAction<string[] | ([])>>,
  placeholder_drop: string,
  zindex: number,
) => {
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={handleValueChange}
      placeholder= {placeholder_drop}
      style={selectStyles.dropdown}
      dropDownContainerStyle={selectStyles.dropdownContainer}
      textStyle={selectStyles.textdrop}
      placeholderStyle={selectStyles.placeholder}
      selectedItemLabelStyle={selectStyles.selectedItemLabel}
      labelStyle={selectStyles.itemLabelSelected}
      selectedItemContainerStyle={selectStyles.selectedItemContainer}
      listItemContainerStyle={selectStyles.itemContainer}
      listItemLabelStyle={selectStyles.itemLabel}     
      zIndex={zindex} // Para sobreposição quando aberto
      dropDownDirection={ open_aprendizagem ? 'BOTTOM' : 'TOP'}
      multiple={true} // Ativa a seleção múltipla
      mode="BADGE" // Exibe os itens selecionados como badges
      badgeDotColors={['#00b4d8', '#00b4d8', '#00b4d8']} // Cor dos badges
      badgeStyle={badgeStyle.badgestyle}
      badgeDotStyle={badgeStyle.dotStyle}
      listMode="SCROLLVIEW"
    />
  );
}

const handleOpenAprendizagem = () => {
    console.log('Abrindo estilo de aprendizagem...'); // Log para depuração
    setOpen_aprendizagem((prevOpen) => !prevOpen); 
};

  // Função para lidar com a seleção de novos valores
  const handleValueChange = (newValue: string[] | null) => {
    if (newValue === null) return; // Se o valor for null, não faz nada

    if (newValue.length > 3) {
      Alert.alert("Limite de seleção", "Você pode selecionar no máximo 3 estilos.");
    } else {
      setValue_aprendizagem(newValue); // Atualiza o estado com os valores selecionados
    }
  };

// Aprendizagem DropDown
const [open_aprendizagem, setOpen_aprendizagem] = useState(false);
const [value_aprendizagem, setValue_aprendizagem] = useState<string[]>([]);
const items_aprendizagem = [
{ label: 'Visual', value: 'visual' },
{ label: 'Auditivo', value: 'auditivo' },
{ label: 'Prático', value: 'pratico' },
{ label: 'Leitura/Escrita', value: 'leitura_escrita' },
{ label: 'Lógico', value: 'logico' },
{ label: 'Em grupo', value: 'grupo' },
{ label: 'Sozinho', value: 'sozinho' },
];

  return (
    <ScrollView nestedScrollEnabled={true} ref={scrollViewRef} style={styles.scrollStyle} contentContainerStyle={styles.container_scroll}>
    <View style={styles.container}>
    <View style={styles.title}>
        <Text style={styles.texttittle}>Cadastro</Text>
    </View>
    <View style={styles.selectfields}>
      <Text style={styles.textinput}>Estilos de aprendizagem:</Text>
      {renderDropdown(open_aprendizagem, value_aprendizagem, items_aprendizagem, handleOpenAprendizagem, 
      handleValueChange, "Selecione seus estilos (*max 3*)", 3000)}
    </View>
    <View style={styles.inputfields}>
        <Text style={styles.textinput}>Disciplina com maior afinidade:</Text>
        <TextInput
            style={styles.input}
            placeholder="Digite a disciplina"
            placeholderTextColor="#A9A9A9" 
            //onChangeText={"setInputValue"} 
            //value={"nome"}
        />
        <Text style={styles.textinput}>Disciplina com menor afinidade:</Text>
        <TextInput
            style={styles.input}
            placeholder="Digite a disciplina"
            placeholderTextColor="#A9A9A9" 
            //onChangeText={"setInputValue"} 
            //value={"nome"}
        />
    </View>
    <View style={(styles.buttonfields)}>
    <Pressable
        style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? '#005BBB' : '#007AFF'}
        ]}
        //onPress={() => navigation.navigate('')}
    >
        <Text style={styles.buttonText}>Avançar</Text>
    </Pressable>
    </View>
    </View>
    </ScrollView> 
  );
  
};
