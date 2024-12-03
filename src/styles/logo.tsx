import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';

export default function LogoTitle() {
    return (
    <>
      <View>
        <Image
          style={{ width: 50, height: 50 }}
          source={require('assets/logo.png')} 
        />
      </View>
    </>
    );
  }