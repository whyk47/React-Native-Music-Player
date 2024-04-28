import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { init, addPlaylist } from './PlayerService';
import MusicPlayer from './screens/MusicPlayer';
import { styles } from './Styles';

function App(): JSX.Element {
  const [playerReady, setPlayerReady] = React.useState(false);

  async function setup() {
    let isSetUp = await init();
    if (isSetUp) {
      await addPlaylist()
    }
    setPlayerReady(isSetUp)
  }

  useEffect(() => {
    setup()
  }, [])

  if (!playerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  return (
    <View style={styles.background}>
      <MusicPlayer/>
    </View>
  )
}

export default App