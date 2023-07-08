// TCNOKontrol.js dosyası
import React from 'react';
import { StyleSheet,Text } from 'react-native';

const TCNOKontrol = ({ TCNO }) => {
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
    return <Text style={styles.invalidText}>Yanlış TC kimlik no</Text>;
  }

  return <Text style={styles.validText}>Doğru TC kimlik no</Text>;
};

const styles = StyleSheet.create({
  invalidText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  validText: {
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
  },
});

export default TCNOKontrol;
