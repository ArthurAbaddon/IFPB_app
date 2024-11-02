import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export default function LogoTitle() {
    return (
    <>
    <View style={styles.header}>
    <Text style={styles.textlogo}> LOGO </Text>   
    </View>
    </>
    // </View>
    //   <Image
    //     style={{ width: 50, height: 50 }}
    //     source={require('@expo/snack-static/react-native-logo.png')}
    //   />
  
    );
  }