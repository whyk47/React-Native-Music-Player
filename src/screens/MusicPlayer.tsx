import { View, Text, Dimensions, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import TrackPlayer, { Track, useTrackPlayerEvents, Event } from 'react-native-track-player'
import { playlist } from '../constants'
import SongInfo from '../components/SongInfo'
import SongSlider from '../components/SongSlider'
import ControlCentre from '../components/ControlCentre'
import { styles } from '../Styles'

const { width, height } = Dimensions.get('window')

const MusicPlayer = () => {
    const [track, setTrack] = React.useState<Track | null | undefined>(null)

    useTrackPlayerEvents([Event.PlaybackTrackChanged, Event.PlaybackState], async event => {
        switch (event.type) {
            case Event.PlaybackTrackChanged:
                const track = await TrackPlayer.getTrack(event.nextTrack)
                if (track) {
                    setTrack(track)
                }
                break
            case Event.PlaybackState:
                setTrack(await TrackPlayer.getActiveTrack())
                break
        }
    })

    const renderArtwork = () => {
        return (
            <View style={styles.container}>
                {track?.artwork && (
                    <Image
                        style={styles.artwork}
                        source={{ uri: track?.artwork?.toString() }}
                    />
                )}
            </View>
        )
    }
    return (
        <ScrollView>
            {/* <FlatList 
      horizontal
      data={playlist}
      renderItem={renderArtwork}
      keyExtractor={item => item.id.toString()}
      /> */}
            {renderArtwork()}
            <SongInfo track={track} />
            {track == null && (
                <View style={styles.container}>
                    <Text style={styles.desc}>Press Play to Start Listening!</Text>
                </View>
            )}
            <SongSlider />
            <ControlCentre />

        </ScrollView>
    )
}

export default MusicPlayer