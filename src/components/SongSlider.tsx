import React from 'react'
import TrackPlayer, { useProgress } from 'react-native-track-player'
import Slider from '@react-native-community/slider'
import { Text, View } from 'react-native'
import { styles } from '../Styles'

const SongSlider = () => {
  const { position, duration } = useProgress()
  const [value, setValue] = React.useState(position)

  return (
    <View style={styles.container}>
      <Slider
        value={position}
        minimumValue={0}
        maximumValue={duration}
        thumbTintColor='#FFFFFF'
        maximumTrackTintColor='#FFFFFF'
        style={styles.slider}
        onValueChange={value => setValue(value)}
        onSlidingComplete={_ => TrackPlayer.seekTo(value)}
      />
      <View style={[styles.row, styles.timeContainer]}>
        <Text style={{textAlign: 'left'}}>
          {new Date(position * 1000).toISOString().substring(15, 19)}
        </Text>
        <Text style={{textAlign: 'right'}}>
          {new Date((duration - position) * 1000).toISOString().substring(15, 19)}
        </Text>
      </View>
    </View>

  )
}

export default SongSlider