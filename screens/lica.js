import React from 'react';
import { Button, View, Text, Pressable, } from 'react-native';
import { globalStyles } from '../styles/global';



export default function Lica({ navigation }) {

  return (
    <View style={globalStyles.container}>
      <View style={{padding: 5}}>
        <Button
          title="Pretraga lica"
          onPress={() => navigation.navigate('LicaPretraga')}
        />
      </View>
      <View style={{padding: 5}}>
        <Button
          title="Unos lica"
          onPress={() => navigation.navigate('LicaUnos')}
        />
      </View>
    </View>
  );
  
}
