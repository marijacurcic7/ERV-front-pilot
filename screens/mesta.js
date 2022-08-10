import React from 'react';
import { Button, View, Text, Pressable, } from 'react-native';
import { globalStyles } from '../styles/global';
import { StyleSheet } from 'react-native';


export default function Mesta({ navigation }) {

  return (
    <View style={globalStyles.container}>
      <View style={{padding: 5}}>
        <Button
          title="Pretraga"
          onPress={() => navigation.navigate('MestaPretraga')}
        />
      </View>
    </View>
  );
  
}

