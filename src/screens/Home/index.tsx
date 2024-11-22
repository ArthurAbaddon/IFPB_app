import React, { useState, useRef } from 'react';
import { Text, View, TextInput, ScrollView, Pressable, TextStyle, StyleProp, ViewStyle } from 'react-native';
import { selectStyles, styles } from '../../styles/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../@types/rootstack';
import { useForm, Controller } from 'react-hook-form';

export default function Home() {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const scrollViewRef = useRef<ScrollView | null>(null);
  const [dropdownYPosition, setDropdownYPosition] = useState<number | null>(null);

  const getPaddingBottom = (isOpen: boolean) => (isOpen ? 350 : 200);

  const { control, handleSubmit, trigger, formState: { errors }, clearErrors } = useForm();

  // Função para renderizar o dropdown
  const renderDropdown = (
    open: boolean,
    value: string | null,
    items: { label: string; value: string }[],
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setValue: React.Dispatch<React.SetStateAction<string | null>>,
    style: StyleProp<ViewStyle>,
    placeholder_drop: string,
    placeholderStyle: StyleProp<TextStyle>,
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
        style={[selectStyles.dropdown, style]}
        dropDownContainerStyle={selectStyles.dropdownContainer}
        textStyle={selectStyles.textdrop}
        placeholderStyle={[selectStyles.placeholder, placeholderStyle]}
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
        return (
          <>
            <Text style={styles.textinput}>Série:</Text>
            <Controller
              control={control}
              name="fundamental"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                renderDropdown(open_fundamental, value_fundamental, items_fundamental, () => handleOpenSerie('fundamental'),
                  (selectedValue) => {
                    onChange(selectedValue); // Atualiza o valor no React Hook Form
                    setValue_fundamental(selectedValue); // Chama sua função de manipulação
                  }, { borderColor: errors.fundamental ? '#f05656' : '#FFFFFF' }, errors.fundamental ? 'Campo obrigatório' :
                  "Selecione sua série", { color: errors.fundamental ? '#f05656' : '#A9A9A9' }, 2000)
              )}
            />
          </>
        );
      case 'ensino_medio':
        return (
          <>
            <Text style={styles.textinput}>Série:</Text>
            <Controller
              control={control}
              name="medio"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                renderDropdown(open_medio, value_medio, items_medio, () => handleOpenSerie('medio'),
                  (selectedValue) => {
                    onChange(selectedValue); // Atualiza o valor no React Hook Form
                    setValue_medio(selectedValue); // Chama sua função de manipulação
                  }, { borderColor: errors.medio ? '#f05656' : '#FFFFFF' }, errors.medio ? 'Campo obrigatório' :
                  "Selecione sua série", { color: errors.medio ? '#f05656' : '#A9A9A9' }, 2000)
              )}
            />
          </>
        );
      case 'graduacao':
        return (
          <>
            <Text style={styles.textinput}>Curso:</Text>
            <Controller
              control={control}
              name="graduacao_curso"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[styles.input, { borderColor: errors.graduacao_curso ? '#f05656' : '#FFFFFF' }]}
                  placeholder={errors.graduacao_curso ? 'Campo obrigatório' : 'Digite seu curso'}
                  placeholderTextColor={errors.graduacao_curso ? '#f05656' : '#A9A9A9'}
                  onChangeText={(text) => { onChange(text) }}
                  value={value}
                />
              )}
            />
            <Text style={styles.textinput}>Período:</Text>
            <Controller
              control={control}
              name="graduacao_periodo"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[styles.input, { borderColor: errors.graduacao_periodo ? '#f05656' : '#FFFFFF' }]}
                  placeholder={errors.graduacao_periodo ? 'Campo obrigatório' : 'Digite seu período'}
                  placeholderTextColor={errors.graduacao_periodo ? '#f05656' : '#A9A9A9'}
                  keyboardType="numeric"
                  maxLength={2}
                  onChangeText={(text) => { onChange(text) }}
                  value={value}
                />
              )}
            />
          </>
        );
      case 'pos_graduacao':
        return (
          <>
            <Text style={styles.textinput}>Curso:</Text>
            <Controller
              control={control}
              name="pos_graduacao_curso"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[styles.input, { borderColor: errors.pos_graduacao_curso ? '#f05656' : '#FFFFFF' }]}
                  placeholder={errors.pos_graduacao_curso ? 'Campo obrigatório' : 'Digite seu curso'}
                  placeholderTextColor={errors.pos_graduacao_curso ? '#f05656' : '#A9A9A9'}
                  onChangeText={(text) => { onChange(text) }}
                  value={value}
                />
              )}
            />
            <Text style={styles.textinput}>Período:</Text>
            <Controller
              control={control}
              name="pos_graduacao_periodo"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[styles.input, { borderColor: errors.pos_graduacao_periodo ? '#f05656' : '#FFFFFF' }]}
                  placeholder={errors.pos_graduacao_periodo ? 'Campo obrigatório' : 'Digite seu período'}
                  placeholderTextColor={errors.pos_graduacao_periodo ? '#f05656' : '#A9A9A9'}
                  keyboardType="numeric"
                  maxLength={2}
                  onChangeText={(text) => { onChange(text) }}
                  value={value}
                />
              )}
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
  const items_fundamental = [
    { label: '6° Ano', value: 'sexto' },
    { label: '7º Ano', value: 'setimo' },
    { label: '8° Ano', value: 'oitavo' },
    { label: '9° Ano', value: 'nono' },
  ];
  // Serie Fundamental DropDown
  const [open_medio, setOpen_medio] = useState(false);
  const [value_medio, setValue_medio] = useState<string | null>(null);
  const items_medio = [
    { label: '1° Ano', value: 'primeiro' },
    { label: '2º Ano', value: 'segundo' },
    { label: '3° Ano', value: 'terceiro' },
  ];

  const handleAvancar = async () => {
    clearErrors(); // Limpa erros antes de validar
    const result = await trigger(); // Dispara a validação dos campos
    console.log("Resultado da validação:", result); // Verifique o resultado da validação
    console.log("Erros de validação:", errors); // Inspecione o objeto de erros


    if (result) {
      console.log("Todos os campos estão válidos. Avançando...");
      navigation.navigate('Aprendizagem'); // Navegar para a próxima página
    } else {
      console.log("Existem campos obrigatórios que não foram preenchidos.");
    }
  };

  return (
    <ScrollView nestedScrollEnabled={true} ref={scrollViewRef} style={styles.scrollStyle} contentContainerStyle={[styles.container_scroll, { paddingBottom: getPaddingBottom(open_escolaridade || open_fundamental || open_medio) }]}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.texttittle}>Cadastro</Text>
        </View>
        <View style={styles.inputfields}>
          <Text style={styles.textinput}>Nome:</Text>
          <Controller
            control={control}
            name="nome"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, { borderColor: errors.nome ? '#f05656' : '#FFFFFF' }]}
                placeholder={errors.nome ? 'Campo obrigatório' : 'Digite seu nome'}
                placeholderTextColor={errors.nome ? '#f05656' : '#A9A9A9'}
                onChangeText={(text) => { onChange(text) }}
                value={value}
              />
            )}
          />
          <Text style={styles.textinput}>Idade:</Text>
          <Controller
            control={control}
            name="idade"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, { borderColor: errors.idade ? '#f05656' : '#FFFFFF' }]}
                placeholder={errors.idade ? 'Campo obrigatório' : 'Digite sua idade'}
                placeholderTextColor={errors.idade ? '#f05656' : '#A9A9A9'}
                keyboardType="numeric"
                maxLength={2}
                onChangeText={(text) => { onChange(text) }}
                value={value}
              />
            )}
          />
        </View>
        <View style={styles.selectfields}>
          <Text style={styles.textinput}>Escolaridade:</Text>
          <Controller
            control={control}
            name="escolaridade"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              renderDropdown(open_escolaridade, value_escolaridade, items_escolaridade, handleOpenEscolaridade,
                (selectedValue) => {
                  onChange(selectedValue); // Atualiza o valor no React Hook Form
                  setValue_escolaridade(selectedValue); // Chama sua função de manipulação
                }, { borderColor: errors.escolaridade ? '#f05656' : '#FFFFF' }, errors.escolaridade ? 'Campo obrigatório' : 'Selecione sua escolaridade',
                { color: errors.escolaridade ? '#f05656' : '#A9A9A9' }, 3000)
            )}
          />
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
                { backgroundColor: pressed ? '#005BBB' : '#1E90FF' }
              ]}
              onPress={handleAvancar}
            >
              <Text style={styles.buttonText}>Avançar</Text>
            </Pressable>
          </View>
        )}
      </View>
    </ScrollView>
  );
} 