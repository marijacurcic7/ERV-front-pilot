import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView} from 'react-native';
import { globalStyles } from '../styles/global';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class Mesta extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      naziv : '',
      HeadTable: ['ID', 'Sifra', 'Naziv'],
      DataTable: []
      
    };
  }


  Pretrazi=()=>{
    var naziv = this.state.naziv;
    var InsertAPIURL = "http://erv.test04.bisoftis.rs/app/scripts/proces/test.php";
    
    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
      
    var Data = {
        naziv: naziv,
    };


    fetch(InsertAPIURL, {
        method:'POST',
        headers: headers,
        body: JSON.stringify(Data) //convert data to JSON
    })
    .then((response)=> response.json())
    .then((response)=>{
      var datatable = []
      for (var r of response.rows) {
        var tablerow = [r['mes_id'], r['mes_sifra'], r['mes_naziv']]
        datatable.push(tablerow)
        // console.log(datatable)
      }
      this.setState({DataTable: datatable});


    })
    .catch((error)=>{
        alert("Error Occured" + error);
    });

  }


  render() {

    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Mesta</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Unesite naziv mesta"
          onChangeText={naziv=>this.setState({naziv})}
        />
        <Button
          title="Pretraga"
          onPress={() => this.Pretrazi()}
        />
          <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
            <Row data={this.state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
          </Table>
          <ScrollView>
            <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
              <Rows data={this.state.DataTable} textStyle={styles.TableText}/>
            </Table>
          </ScrollView>


      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: '#ffffff' 
  },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    backgroundColor: '#ffe0f0'
  },
  TableText: { 
    margin: 10
  }
});