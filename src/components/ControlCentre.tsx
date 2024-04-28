import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { playbackService } from '../PlayerService';
import { styles } from '../Styles';

const ControlCentre = () => {
    const playBackState = usePlaybackState().state
    const skipToNext = async () => {
        await TrackPlayer.skipToNext()
        const currentTrack = await TrackPlayer.getActiveTrack()
        if (currentTrack != null) {
          await TrackPlayer.play()
        }
    }
    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious()
        const currentTrack = await TrackPlayer.getActiveTrack()
        if (currentTrack != null) {
          await TrackPlayer.play()
        }
    }
    const togglePlayback = async () => {
        const currentTrack = await TrackPlayer.getActiveTrack()
        if (currentTrack != null) {
            if (playBackState === State.Paused || playBackState === State.Ready) {
                await TrackPlayer.play()
            } else {
                await TrackPlayer.pause()
            }
        }
    }
  return (
    <View style={[styles.container, styles.row]}>
      <TouchableOpacity onPress={skipToPrevious}>
        <Icon name="skip-previous" size={40} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => togglePlayback()}>
        <Icon name={playBackState === State.Playing ? "pause" : "play-arrow"} size={75} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={skipToNext}>
        <Icon name="skip-next" size={40} color="white" />
      </TouchableOpacity>

    </View>
  )
}



export default ControlCentre