
import React from 'react';
import { WebView } from 'react-native-webview';
import { StackScreenProps } from '@react-navigation/stack';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

type RootStackParamList = {
  Webview: { uri: string };
};

type Props = StackScreenProps<RootStackParamList, 'Webview'>;

const WebviewScreen: React.FC<Props> = ({ route, navigation }) => {
  const { uri } = route.params;

  return (
    <View style={styles.container}>
      <WebView source={{ uri }} style={styles.webview} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default WebviewScreen;
