import React ,{ useState, useRef, useEffect  } from 'react';
import { Text, View, TextInput, ScrollView, Pressable, Alert, TouchableOpacity } from 'react-native';
import { selectStyles, styles, badgeStyle } from '../../styles/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation, NavigationProp  } from '@react-navigation/native';
import { RootStackParamList } from '../../@types/rootstack';
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import Dashboard from '../Dashboard';

interface Intervalo {
  inicio: Date | null;
  fim: Date | null;
}

export default function Desempenho() {

const navigation = useNavigation<NavigationProp<RootStackParamList>>();

const scrollViewRef = useRef<ScrollView | null>(null);

const getPaddingBottom = (isOpen: boolean) => (isOpen ? 350 : 200);;

const [selectedDay, setSelectedDay] = useState<string | null>(null);
const [pickerType, setPickerType] = useState<'start' | 'end' | null>(null);

// Estado para armazenar horários de início e fim de cada dia
const [horarios, setHorarios] = useState<Record<string, Intervalo[]>>({});{
({
  domingo: { inicio: null, fim: null },
  segunda: { inicio: null, fim: null },
  terca: { inicio: null, fim: null },
  quarta: { inicio: null, fim: null },
  quinta: { inicio: null, fim: null },
  sexta: { inicio: null, fim: null },
  sabado: { inicio: null, fim: null },
});

const [showStartPicker, setShowStartPicker] = useState(false);
const [showEndPicker, setShowEndPicker] = useState(false);

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

// Função para adicionar um novo intervalo para um dia específico
const adicionarIntervalo = (dia: string) => {
  setHorarios((prevHorarios) => ({
    ...prevHorarios,
    [dia]: [...(prevHorarios[dia] || []), { inicio: null, fim: null }]
  }));
};

// Função para atualizar o horário de início ou fim
const handlePickerChange = (event: any, selectedDate: Date | undefined) => {
  if (selectedDay && pickerType && selectedDate) {
    setHorarios((prevHorarios) => ({
      ...prevHorarios,
      [selectedDay]: prevHorarios[selectedDay].map((intervalo, index) =>
        index === 0 ? { ...intervalo, [pickerType]: selectedDate } : intervalo
      )
    }));
  }
  pickerType === 'start' ? setShowStartPicker(false) : setShowEndPicker(false);
};

const openPickerForDay = (day: string, pickerType: 'start' | 'end') => {
  setSelectedDay(day);
  if (pickerType === 'start') {
    setShowStartPicker(true);
  } else {
    setShowEndPicker(true);
  }
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
    <ScrollView nestedScrollEnabled={true} ref={scrollViewRef} style={styles.scrollStyle} contentContainerStyle={[styles.container_scroll, { paddingBottom: getPaddingBottom(open_dias) }]}>
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
      setValue_dias, "Selecione os dias disponíveis", 2000)}
    </View>
    <View>
    {value_dias.map((dia) => (
          <View key={dia} style={styles.horarioContainer}>
            <Text style={styles.textinput}>{dia}</Text>
            {(horarios[dia] || [{ inicio: null, fim: null }]).map((intervalo: Intervalo, index: number) => (
              <View key={index} style={styles.intervaloContainer}>
                <TextInput
                  value={
                    intervalo.inicio
                      ? intervalo.inicio.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                      : ''
                  }
                  placeholder="Hora de Início"
                  onFocus={() => openPickerForDay(dia, 'start')}
                  style={{ borderColor: 'gray', borderWidth: 1, padding: 8, marginBottom: 5 }}
                />

                <TextInput
                  value={
                    intervalo.fim
                      ? intervalo.fim.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                      : ''
                  }
                  placeholder="Hora de Fim"
                  onFocus={() => openPickerForDay(dia, 'end')}
                  style={{ borderColor: 'gray', borderWidth: 1, padding: 8, marginBottom: 5 }}
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

        {showStartPicker && (
          <DateTimePicker
            value={horarios[selectedDay!]?.[0]?.inicio || new Date()}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={handlePickerChange}
          />
        )}

        {showEndPicker && (
          <DateTimePicker
            value={horarios[selectedDay!]?.[0]?.fim || new Date()}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={handlePickerChange}
          />
        )}
    </View>
    <View style={(styles.buttonfields)}>
    <Pressable
        style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? '#005BBB' : '#1E90FF'}
        ]}
        onPress={() => navigation.navigate('Dashboard')}
    >
        <Text style={styles.buttonText}>Concluir</Text>
    </Pressable>
    </View>
    </View>
    </ScrollView> 
  );
  }  
};
