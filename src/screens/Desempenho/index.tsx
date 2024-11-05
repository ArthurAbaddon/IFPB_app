import React, { useState, useRef, useEffect } from 'react';
import { Text, View, TextInput, ScrollView, Pressable, Alert, TouchableOpacity } from 'react-native';
import { selectStyles, styles, badgeStyle } from '../../styles/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../@types/rootstack';
import { TextInputMask } from 'react-native-masked-text';
import Dashboard from '../Dashboard';

// Define o tipo Horarios para garantir segurança nos tipos
type Horarios = {
  domingo: { inicio: Date | null; fim: Date | null }[];
  segunda: { inicio: Date | null; fim: Date | null }[];
  terca: { inicio: Date | null; fim: Date | null }[];
  quarta: { inicio: Date | null; fim: Date | null }[];
  quinta: { inicio: Date | null; fim: Date | null }[];
  sexta: { inicio: Date | null; fim: Date | null }[];
  sabado: { inicio: Date | null; fim: Date | null }[];
};

export default function Desempenho() {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const scrollViewRef = useRef<ScrollView | null>(null);

  const getPaddingBottom = (isOpen: boolean) => (isOpen ? 350 : 200);;

  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

  // Estado para armazenar horários de início e fim de cada dia
  const [horarios, setHorarios] = useState<Horarios>({
    domingo: [{ inicio: null, fim: null }],
    segunda: [{ inicio: null, fim: null }],
    terca: [{ inicio: null, fim: null }],
    quarta: [{ inicio: null, fim: null }],
    quinta: [{ inicio: null, fim: null }],
    sexta: [{ inicio: null, fim: null }],
    sabado: [{ inicio: null, fim: null }],
  });

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
        placeholder={placeholder_drop}
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
        placeholder={placeholder_drop}
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
        dropDownDirection={open_dias ? 'BOTTOM' : 'TOP'}
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

  const formatarDia = (dia: string) => {
    const diasFormatados: Record<string, string> = {
      domingo: 'Domingo',
      segunda: 'Segunda-feira',
      terca: 'Terça-feira',
      quarta: 'Quarta-feira',
      quinta: 'Quinta-feira',
      sexta: 'Sexta-feira',
      sabado: 'Sábado'
    };
    return diasFormatados[dia] || dia; // Retorna o nome formatado ou o próprio dia se não houver correspondência
  };

  const handleInputChange = (dia: keyof Horarios, index: number, tipo: 'inicio' | 'fim', text: string) => {
    console.log(`Texto recebido: ${text}`);

    let novoHorario: Date | null = null;

    // Atualiza o valor do TextInput imediatamente
    setInputValues((prev) => ({ ...prev, [`${dia}-${index}-${tipo}`]: text }));

    // Validação do texto
    if (text.length === 5 && text.includes(':')) {
        const [hourStr, minuteStr] = text.split(':');
        const hour = Number(hourStr);
        const minute = Number(minuteStr);

        // Verificação de horas e minutos válidos
        if (!isNaN(hour) && !isNaN(minute) && hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59) {
            novoHorario = new Date();
            novoHorario.setHours(hour, minute);

            // Verifica se o horário de fim é menor que o horário de início
            const horarioInicio = horarios[dia]?.[index]?.inicio;
            if (tipo === 'fim' && horarioInicio && novoHorario < horarioInicio) {
                Alert.alert('Erro', 'A hora de fim não pode ser menor que a hora de início.');
                novoHorario = null; // Limpa o horário em caso de erro
                setInputValues((prev) => ({ ...prev, [`${dia}-${index}-${tipo}`]: '' })); // Limpa o campo de entrada
                return;
            }
        } else {
            Alert.alert('Erro', 'Horário inválido. As horas devem ser entre 00 e 23 e os minutos entre 00 e 59.');
            novoHorario = null; // Limpa o horário em caso de erro
            setInputValues((prev) => ({ ...prev, [`${dia}-${index}-${tipo}`]: '' })); // Limpa o campo de entrada
            return;
        }

        // Atualiza o estado geral dos horários
        setHorarios((prevHorarios) => ({
            ...prevHorarios,
            [dia]: prevHorarios[dia].map((intervalo, idx) =>
                idx === index ? { ...intervalo, [tipo]: novoHorario } : intervalo
            ),
        }));
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
    { label: 'Segunda-Feira', value: 'segunda' },
    { label: 'Terça-Feira', value: 'terca' },
    { label: 'Quarta-Feira', value: 'quarta' },
    { label: 'Quinta-Feira', value: 'quinta' },
    { label: 'Sexta-Feira', value: 'sexta' },
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
            <View key={dia}>
              <Text style={[styles.textinput, { marginTop: 16 }]}>{formatarDia(dia)}</Text>
              {horarios[dia as keyof Horarios].map((intervalo, index) => (
                <View key={index} style={{ alignItems: 'center' }}>
                  <TextInputMask
                    type={'datetime'}
                    options={{
                      format: 'HH:mm', // Formato de 24 horas
                    }}
                    placeholder="Hora de início"
                    value={inputValues[`${dia}-${index}-inicio`] || ''}
                    onChangeText={(text) => handleInputChange(dia as keyof Horarios, index, 'inicio', text)}
                    style={styles.input}
                  />
                  <TextInputMask
                    type={'datetime'}
                    options={{
                      format: 'HH:mm', // Formato de 24 horas
                    }}
                    placeholder="Hora de Fim"
                    value={inputValues[`${dia}-${index}-fim`] || ''}
                    onChangeText={(text) => handleInputChange(dia as keyof Horarios, index, 'fim', text)}
                    style={styles.input}
                  />
                </View>
              ))}
            </View>
          ))}
        </View>
        <View style={(styles.buttonfields)}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#005BBB' : '#1E90FF' }
            ]}
            onPress={() => navigation.navigate('Dashboard')}
          >
            <Text style={styles.buttonText}>Concluir</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};
