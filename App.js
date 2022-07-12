import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [info, setInfo] = useState();

  const makeCall = () => {
    // make api call
    fetch("https://archive.org/metadata/principleofrelat00eins")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setInfo(json);
      });
  }

  if (info == undefined) {
    return (
      <View style={styles.container}>
        <Text>Make the API call</Text>
        <Button
          title="Make call"
          onPress={makeCall}
        />
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>TITLE</Text>
        <Text>SUBJECT - DATE</Text>
        <Text></Text>
        {info.metadata.creator.map((creator) => {
          return (<Text>{creator}</Text>);
        })}
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
