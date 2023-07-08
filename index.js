import React from 'react';
import { StyleSheet, View, Button, TextInput, Alert, Text } from 'react-native';


const TCNOKontrol = (TCNO) => {
  const tek = [0, 2, 4, 6, 8].reduce((sum, index) => sum + parseInt(TCNO[index]), 0) * 7;
  const cift = [1, 3, 5, 7].reduce((sum, index) => sum + parseInt(TCNO[index]), 0);
  const sonuc = Math.abs(tek - cift);
  const TCToplam = Array.from(TCNO).slice(0, 10).reduce((sum, digit) => sum + parseInt(digit), 0);

  if (
    TCNO.length !== 11 ||
    isNaN(TCNO) ||
    TCNO[0] === "0" ||
    sonuc % 10 !== parseInt(TCNO[9]) ||
    TCToplam % 10 !== parseInt(TCNO[10])
  ) {
    return false;
  }
  return true;
};


const App = () => {
  const [TCNO, setTCNO] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TC Kimlik No Kontrol</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setTCNO}
          value={TCNO}
          placeholder="TC kimlik no giriniz"
          keyboardType="numeric"
        />
      </View>
      <Button
        title="Kontrol Et"
        onPress={() => {
          if(TCNOKontrol(TCNO)) {
            Alert.alert("Doğru TC kimlik no");
          } else {
            Alert.alert("Yanlış TC kimlik no");
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 5,
    borderRadius:5,
  },
  input: {
    flex: 1,
    height: 55,
    marginLeft: 5,
  }
});

export default App;
