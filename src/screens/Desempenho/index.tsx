import React ,{ useState, useRef, useEffect  } from 'react';
import { Text, View, TextInput, ScrollView, Pressable, Alert, TouchableOpacity } from 'react-native';
import { selectStyles, styles, badgeStyle } from '../../styles/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation, NavigationProp  } from '@react-navigation/native';
import { RootStackParamList } from '../../@types/rootstack';


export default function Desempenho() {

const navigation = useNavigation<NavigationProp<RootStackParamList>>();

const scrollViewRef = useRef<ScrollView | null>(null);

const getPaddingBottom = () => (open_dias ? 350 : 200);

const [horarios, setHorarios] = useState<{ [key: string]: { inicio: string; fim: string }[] }>({});

const renderDropdownDesempenho = (
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
        dropDownDirection={open_desempenho ? 'BOTTOM' : 'TOP'}
        listMode="SCROLLVIEW"
      />
    );
    
  };

// Função para renderizar o dropdown
const renderDropdownDias = (
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
        dropDownDirection={ open_dias ? 'BOTTOM' : 'TOP'}
        multiple={true} // Ativa a seleção múltipla
        mode="BADGE" // Exibe os itens selecionados como badges
        badgeDotColors={['#00b4d8', '#00b4d8', '#00b4d8']} // Cor dos badges
        badgeStyle={badgeStyle.badgestyle}
        badgeDotStyle={badgeStyle.dotStyle}
        listMode="SCROLLVIEW"
      />
    );
  }

const handleOpenDesempenho = () => {
    console.log('Abrindo estilo de desempenho...'); // Log para depuração
    setOpen_dias(false);
    setOpen_desempenho((prevOpen) => !prevOpen); 
};

const handleOpenDias = () => {
    console.log('Abrindo estilo de dia...'); // Log para depuração
    setOpen_desempenho(false);
    setOpen_dias((prevOpen) => !prevOpen); 
};

const adicionarIntervalo = (dia: string) => {
    setHorarios(prevHorarios => ({
      ...prevHorarios,
      [dia]: [...(prevHorarios[dia] || []), { inicio: '', fim: '' }],
    }));
};

const handleHorarioChange = (dia: string, index: number, tipo: 'inicio' | 'fim', valor: string) => {
    setHorarios(prevHorarios => {
      const horariosDoDia = prevHorarios[dia] || []; // Garante que é um array
      return {
        ...prevHorarios,
        [dia]: horariosDoDia.map((intervalo, i) =>
          i === index ? { ...intervalo, [tipo]: valor } : intervalo
        ),
      };
    });
};

// Desempenho DropDown
const [open_desempenho, setOpen_desempenho] = useState(false);
const [value_desempenho, setValue_desempenho] = useState<string | null>(null);
const items_desempenho = [
{ label: '1 - Muito abaixo do esperado', value: '1' },
{ label: '2 - Abaixo do esperado', value: '2' },
{ label: '3 - Dentro do esperado', value: '3' },
{ label: '4 - Acima do esperado', value: '4' },
{ label: '5 - Excelente desempenho', value: '5' },
];

// Desempenho DropDown
const [open_dias, setOpen_dias] = useState(false);
const [value_dias, setValue_dias] = useState<string[]>([]);
const items_dias = [
{ label: 'Domingo', value: 'domingo' },
{ label: 'Segunda', value: 'segunda' },
{ label: 'Terça', value: 'terca' },
{ label: 'Quarta', value: 'quarta' },
{ label: 'Quinta', value: 'quinta' },
{ label: 'Sexta', value: 'sexta' },
{ label: 'Sabado', value: 'sabado' },
];

  return (
    <ScrollView nestedScrollEnabled={true} ref={scrollViewRef} style={styles.scrollStyle} contentContainerStyle={[styles.container_scroll, { paddingBottom: getPaddingBottom() }]}>
    <View style={styles.container}>
    <View style={styles.title}>
        <Text style={styles.texttittle}>Cadastro</Text>
    </View>
    <View style={styles.selectfields}>
      <Text style={styles.textinput}>Desempenho : (1 a 5)</Text>
      {renderDropdownDesempenho(open_desempenho, value_desempenho, items_desempenho, handleOpenDesempenho, 
      setValue_desempenho, "Selecione uma nota", 3000)}
    </View>
    <View style={styles.selectfields}>
    <Text style={styles.textinput}>Dias disponíveis:</Text>
    {renderDropdownDias(open_dias, value_dias, items_dias, handleOpenDias, 
      setValue_dias, "Selecione seus estilos (max 3)", 2000)}
    </View>
    <View>
    {value_dias.map(dia => (
          <View key={dia} style={styles.horarioContainer}>
            <Text style={styles.textinput}>{dia}</Text>
            {(horarios[dia] || [{ inicio: '', fim: '' }]).map((intervalo, index) => (
              <View key={index} style={styles.intervaloContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Início"
                  value={intervalo.inicio}
                  onChangeText={(text) => handleHorarioChange(dia, index, 'inicio', text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Fim"
                  value={intervalo.fim}
                  onChangeText={(text) => handleHorarioChange(dia, index, 'fim', text)}
                />
              </View>
            ))}
            <TouchableOpacity
              style={styles.adicionarBotaoHorario}
              onPress={() => adicionarIntervalo(dia)}
            >
              <Text style={styles.botaoTextoHorario}>+ Adicionar outro intervalo</Text>
            </TouchableOpacity>
          </View>
        ))}
    </View>
    <View style={(styles.buttonfields)}>
    <Pressable
        style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? '#005BBB' : '#1E90FF'}
        ]}
        //onPress={() => navigation.navigate('')}
    >
        <Text style={styles.buttonText}>Concluir</Text>
    </Pressable>
    </View>
    </View>
    </ScrollView> 
  );
  
};
