import React, { Component } from "react";
import { View, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/global';


export default class LicaUnos extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      naziv : '',
      sifra : '',
      
    };
  }


  Sacuvaj=()=>{
    var naziv = this.state.naziv;
    var sifra = this.state.sifra;

    var InsertAPIURL = "http://erv.test04.bisoftis.rs/app/scripts/proces/react/unos_l.php";
  
    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
      
    var Data = {
      sifra: sifra,
      naziv: naziv,
    };


    fetch(InsertAPIURL, {
        method:'POST',
        headers: headers,
        body: JSON.stringify(Data)
    })
    .then((response)=> response.json())
    .then((response)=>{
      if(!response.hasErrors) {
        alert("Uspešno ste sačuvali лице!");
      }
      else {
        alert(response.errors);
      }

    })
    .catch((error)=>{
        alert("Error Occured" + error);
    });

  }

  render() {

      return (
        <View style={globalStyles.container}>
          <TextInput
          style={{height: 40}}
          textAlign={'center'}
          placeholder="Unesite IDbroj"
          onChangeText={sifra=>this.setState({sifra})}
          />
          <TextInput
          style={{height: 40}}
          textAlign={'center'}
          placeholder="Unesite ime lica"
          onChangeText={naziv=>this.setState({naziv})}
          />
          <Button
          title="Sačuvaj"
          onPress={() => this.Sacuvaj()}
          />
        </View>
      );
  }
}