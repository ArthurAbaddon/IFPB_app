import React ,{ useState, useRef } from 'react';
import { Text, View, TextInput, ScrollView, Pressable } from 'react-native';
import { selectStyles, styles } from '../../styles/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../@types/rootstack';

export default function Home() {

const navigation = useNavigation<NavigationProp<RootStackParamList>>();

const scrollViewRef = useRef<ScrollView | null>(null);
const [dropdownYPosition, setDropdownYPosition] = useState<number | null>(null);

// Função para renderizar o dropdown
const renderDropdown = (
  open: boolean,
  value: string | null,
  items: { label: string; value: string }[],
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setValue: React.Dispatch<React.SetStateAction<string | null>>,
  placeholder_drop: string,
  zindex: number,
) => {
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
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
      dropDownDirection={open_escolaridade || open_fundamental || open_medio ? 'BOTTOM' : 'TOP'}
      listMode="SCROLLVIEW"
    />
  );
  
};

// const scrollToDropdown = () => {
//   if (dropdownYPosition !== null) {
//     const targetY = dropdownYPosition + 100; // Adiciona um espaço extra
//     scrollViewRef.current?.scrollTo({ y: targetY, animated: true });
//   }
// };

// const handleDropdownLayout = (event: LayoutChangeEvent) => {
//   const { y } = event.nativeEvent.layout;
//   console.log(`Dropdown Y Position: ${y}`); // Log para verificar a posição do dropdown
//   setDropdownYPosition(y);
// };
const handleOpenEscolaridade = () => {
  console.log('Abrindo escolaridade...'); // Log para depuração
  // Reseta os valores de série
  setValue_fundamental(null);
  setValue_medio(null);

  // Fecha os dropdowns de série ao abrir escolaridade
  setOpen_fundamental(false);
  setOpen_medio(false);

  // Alterna o estado do dropdown de escolaridade
  setOpen_escolaridade((prevOpen) => !prevOpen); 
};

const handleOpenSerie = (serieType: 'fundamental' | 'medio') => {
  
    if (serieType === 'fundamental') {
      setOpen_fundamental((prevOpen) => !prevOpen);
    } else if (serieType === 'medio') {
      setOpen_medio((prevOpen) => !prevOpen);
    }
};
// Função para renderizar o conteúdo com base na seleção do dropdown
const renderSelectedValue = () => {
  switch (value_escolaridade) {
    case 'ensino_fundamental':
      return( 
        <>
          <Text style={styles.textinput}>Série:</Text>
          {renderDropdown(open_fundamental, value_fundamental, items_fundamental, () => handleOpenSerie('fundamental'),
            setValue_fundamental, "Selecione sua série", 2000)}

        </>
        );
    case 'ensino_medio':
      return( 
        <>
          <Text style={styles.textinput}>Série:</Text>
          {renderDropdown(open_medio, value_medio, items_medio, () => handleOpenSerie('medio'),
            setValue_medio, "Selecione sua série", 2000)}
        </>
        );
    case 'graduacao':
      return (
        <>
          <Text style={styles.textinput}>Curso:</Text>
          <TextInput
              style={styles.input}
              placeholder="Digite seu curso"
              placeholderTextColor="#A9A9A9" 
              //onChangeText={"setInputValue"} 
              //value={"graduacao_curso"}
          />
          <Text style={styles.textinput}>Período:</Text>
          <TextInput
              style={styles.input}
              placeholder="Digite seu período"
              placeholderTextColor="#A9A9A9" 
              keyboardType="numeric" 
              maxLength={2}
              //onChangeText={"setInputValue"} 
              //value={"graduacao_periodo"}
          />
        </>
      );
    case 'pos_graduacao':
      return (
        <>
          <Text style={styles.textinput}>Curso:</Text>
          <TextInput
              style={styles.input}
              placeholder="Digite seu curso"
              placeholderTextColor="#A9A9A9" 
              //onChangeText={"setInputValue"} 
              //value={"pos_graduacao_curso"}
          />
          <Text style={styles.textinput}>Período:</Text>
          <TextInput
              style={styles.input}
              placeholder="Digite seu período"
              placeholderTextColor="#A9A9A9" 
              keyboardType="numeric" 
              maxLength={2}
              //onChangeText={"setInputValue"} 
              //value={"pos_graduacao_periodo"}
          />
        </>
      );
    default:
      return null;
  }
};
  // Escolaridade DropDown
  const [open_escolaridade, setOpen_escolaridade] = useState(false);
  const [value_escolaridade, setValue_escolaridade] = useState<string | null>(null);
  const items_escolaridade = [
    { label: 'Ensino Fundamental', value: 'ensino_fundamental' },
    { label: 'Ensino Médio', value: 'ensino_medio' },
    { label: 'Graduação', value: 'graduacao' },
    { label: 'Pós Graduação', value: 'pos_graduacao' },
  ];
  // Serie Fundamental DropDown
  const [open_fundamental, setOpen_fundamental] = useState(false);
  const [value_fundamental, setValue_fundamental] = useState<string | null>(null);
  const items_fundamental= [
    { label: '6° Ano', value: 'sexto' },
    { label: '7º Ano', value: 'setimo' },
    { label: '8° Ano', value: 'oitavo' },
    { label: '9° Ano', value: 'nono' },
  ];
  // Serie Fundamental DropDown
  const [open_medio, setOpen_medio] = useState(false);
  const [value_medio, setValue_medio] = useState<string | null>(null);
  const items_medio= [
    { label: '1° Ano', value: 'primeiro' },
    { label: '2º Ano', value: 'segundo' },
    { label: '3° Ano', value: 'terceiro' },
  ];

  return (
    <ScrollView nestedScrollEnabled={true} ref={scrollViewRef} style={styles.scrollStyle} contentContainerStyle={styles.container_scroll}>
    <View style={styles.container}>
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
    </View>
    <View style={styles.selectfields}>
      <Text style={styles.textinput}>Escolaridade:</Text>
      {renderDropdown(open_escolaridade, value_escolaridade, items_escolaridade, handleOpenEscolaridade, 
        setValue_escolaridade, "Selecione sua escolaridade", 3000)}
    </View>
    <View style={styles.selectfields}>
      {renderSelectedValue()}
    </View>
    {/* O botão só é exibido se o dropdown não estiver aberto */}
    {!open_fundamental && !open_medio && (
      <View style={(styles.buttonfields)}>
        <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#005BBB' : '#007AFF'}
            ]}
            onPress={() => navigation.navigate('Aprendizagem')}
        >
            <Text style={styles.buttonText}>Avançar</Text>
        </Pressable>
      </View>
    )}
    </View>
    </ScrollView> 
  );
} 