import React, { useState, useRef, useEffect } from 'react';
import { Text, View, TextInput, ScrollView, Pressable, Alert } from 'react-native';
import { selectStyles, styles, badgeStyle } from '../../styles/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../@types/rootstack';
import { useForm, Controller } from 'react-hook-form';

export default function Aprendizagem() {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const scrollViewRef = useRef<ScrollView | null>(null);

  const getPaddingBottom = () => (open_aprendizagem ? 350 : 200);

  const { control, handleSubmit, trigger, formState: { errors }, clearErrors } = useForm();

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
        setValue={setValue}
        placeholder={placeholder_drop}
        style={[selectStyles.dropdown, { borderColor: errors.aprendizagem ? '#f05656' : '#FFFFF' }]}
        dropDownContainerStyle={selectStyles.dropdownContainer}
        textStyle={selectStyles.textdrop}
        placeholderStyle={[selectStyles.placeholder, { color: errors.aprendizagem ? '#f05656' : '#A9A9A9' }]}
        selectedItemLabelStyle={selectStyles.selectedItemLabel}
        labelStyle={selectStyles.itemLabelSelected}
        selectedItemContainerStyle={selectStyles.selectedItemContainer}
        listItemContainerStyle={selectStyles.itemContainer}
        listItemLabelStyle={selectStyles.itemLabel}
        zIndex={zindex} // Para sobreposição quando aberto
        dropDownDirection={open_aprendizagem ? 'BOTTOM' : 'TOP'}
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

  // Limita a seleção a 3 itens
  useEffect(() => {
    if (value_aprendizagem.length > 3) {
      Alert.alert("Limite de seleção", "Você pode selecionar no máximo 3 estilos.");
      setOpen_aprendizagem(false);
      setValue_aprendizagem(prev => prev.slice(0, 3)); // Limita o array para os primeiros 3 itens
    }
  }, [value_aprendizagem]);

  const handleAvancar = async () => {
    clearErrors(); // Limpa erros antes de validar
    const result = await trigger(); // Dispara a validação dos campos
    console.log("Resultado da validação:", result); // Verifique o resultado da validação
    console.log("Erros de validação:", errors); // Inspecione o objeto de erros
  
    // Verifica se o campo do dropdown está vazio
    const isDropdownValid = value_aprendizagem && value_aprendizagem.length > 0;
  
    if (result && isDropdownValid) {
      console.log("Todos os campos estão válidos. Avançando...");
      navigation.navigate('Desempenho'); // Navegar para a próxima página
    } else {
      console.log("Existem campos obrigatórios que não foram preenchidos.");
    }
  };

  return (
    <ScrollView nestedScrollEnabled={true} ref={scrollViewRef} style={styles.scrollStyle} contentContainerStyle={[styles.container_scroll, { paddingBottom: getPaddingBottom() }]}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.texttittle}>Cadastro</Text>
        </View>
        <View style={styles.selectfields}>
          <Text style={styles.textinput}>Estilos de aprendizagem:</Text>
          <Controller
            control={control}
            name="aprendizagem"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              renderDropdown(open_aprendizagem, value_aprendizagem, items_aprendizagem, handleOpenAprendizagem,
                (selectedValue) => {
                  onChange(selectedValue); // Atualiza o valor no React Hook Form
                  setValue_aprendizagem(selectedValue); // Chama sua função de manipulação
                }, errors.aprendizagem ? 'Campo obrigatório' : 'Selecione seus estilos (max 3)', 3000)
            )}
          />
    </View>
        <View style={styles.inputfields}>
          <Text style={styles.textinput}>Disciplina com maior afinidade:</Text>
          <Controller
            control={control}
            name="maior_afinidade"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, { borderColor: errors.maior_afinidade ? '#f05656' : '#FFFFFF' }]}
            placeholder={errors.maior_afinidade ? 'Campo obrigatório' : 'Digite a disciplina'}
            placeholderTextColor={errors.maior_afinidade ? '#f05656' : '#A9A9A9'}
            onChangeText={(text) => {onChange(text)}} 
            value={value}
          />
        )}
        />
          <Text style={styles.textinput}>Disciplina com menor afinidade:</Text>
          <Controller
            control={control}
            name="menor_afinidade"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, { borderColor: errors.menor_afinidade ? '#f05656' : '#FFFFFF' }]}
            placeholder={errors.menor_afinidade ? 'Campo obrigatório' : 'Digite a disciplina'}
            placeholderTextColor={errors.menor_afinidade ? '#f05656' : '#A9A9A9'}
            onChangeText={(text) => {onChange(text)}} 
            value={value}
          />
        )}
        />
        </View>
        <View style={(styles.buttonfields)}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#005BBB' : '#1E90FF' }
            ]}
            onPress={handleAvancar}
          >
            <Text style={styles.buttonText}>Avançar</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );

};
