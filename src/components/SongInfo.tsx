import React, { PropsWithChildren } from 'react'
import { Text, View } from 'react-native'
import { Track } from 'react-native-track-player'
import { styles } from '../Styles'

type SongInfoProps = PropsWithChildren<{
    track: Track | null | undefined
}>

const SongInfo = ({ track }: SongInfoProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{track?.title}</Text>
            <Text style={styles.desc}>{track?.artist}</Text>
            <Text style={styles.desc}>{track?.album}</Text>
        </View>
    )
}

export default SongInfo