import React ,{ useState } from 'react';
import { Text, View, TextInput, FlatList } from 'react-native';
import { selectStyles, styles } from '../../styles/styles';
import DropDownPicker from 'react-native-dropdown-picker';

export function Home() {
  
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
      setItems={setItems_escolaridade} // Aqui você pode mudar se necessário
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
      onChangeValue={(value) => {
        setValue(value); // Define o valor selecionado
        setOpen(false); // Fecha o dropdown
        if (value) {
          // Se uma opção for selecionada, feche o dropdown de escolaridade
          setOpen_escolaridade(false)
          setOpen_fundamental(false); // Fecha o dropdown de série fundamental
          setOpen_medio(false); // Fecha o dropdown de série médio;
        }
      }} 
    />
  );
};
  const handleOpenEscolaridade = () => {
    setOpen_escolaridade(true);
    setOpen_fundamental(false); // Fecha o dropdown de série fundamental
    setOpen_medio(false); // Fecha o dropdown de série médio
    setValue_fundamental(null); // Reseta a série de fundamental
    setValue_medio(null); // Reseta a série de médio
  };
  // Função para renderizar o conteúdo com base na seleção do dropdown
  const renderSelectedValue = () => {
    switch (value_escolaridade) {
      case 'ensino_fundamental':
        return( 
          <>
            <Text style={styles.textinput}>Série:</Text>
            {renderDropdown(open_fundamental, value_fundamental, items_fundamental,setOpen_fundamental,
              setValue_fundamental, "Selecione sua série", 2000 )}
          </>
          );
      case 'ensino_medio':
        return <Text>Você selecionou Ensino Médio!</Text>;
      case 'graduacao':
        return <Text>Você selecionou Graduação!</Text>;
      case 'pos_graduacao':
        return <Text>Você selecionou Pós Graduação!</Text>;
      default:
        return null;
    }
  };
  // Escolaridade DropDown
  const [open_escolaridade, setOpen_escolaridade] = useState(false);
  const [value_escolaridade, setValue_escolaridade] = useState<string | null>(null);
  const [items_escolaridade, setItems_escolaridade] = useState([
    { label: 'Ensino Fundamental', value: 'ensino_fundamental' },
    { label: 'Ensino Médio', value: 'ensino_medio' },
    { label: 'Graduação', value: 'graduacao' },
    { label: 'Pós Graduação', value: 'pos_graduacao' },
  ]);
  // Serie Fundamental DropDown
  const [open_fundamental, setOpen_fundamental] = useState(false);
  const [value_fundamental, setValue_fundamental] = useState<string | null>(null);
  const [items_fundamental, setItems_fundamental] = useState([
    { label: '6° Ano', value: 'sexto' },
    { label: '7º Ano', value: 'setimo' },
    { label: '8° Ano', value: 'oitavo' },
    { label: '9° Ano', value: 'nono' },
  ]);
  // Serie Fundamental DropDown
  const [open_medio, setOpen_medio] = useState(false);
  const [value_medio, setValue_medio] = useState<string | null>(null);
  const [items_medio, setItems_medio] = useState([
    { label: '1° Ano', value: 'primeiro' },
    { label: '2º Ano', value: 'segundo' },
    { label: '3° Ano', value: 'terceiro' },
  ]);


  return (<View style={styles.container}>
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
    </View>
    <View style={styles.selectfields}>
      <Text style={styles.textinput}>Escolaridade:</Text>
      {renderDropdown(open_escolaridade, value_escolaridade, items_escolaridade, handleOpenEscolaridade, 
        setValue_escolaridade, "Selecione sua escolaridade", 3000)}
    </View>
    <View style={styles.selectfields}>
      {/* Renderizando o texto com base no valor selecionado */}
      {renderSelectedValue()}
    </View>
  </View>
  );
} 