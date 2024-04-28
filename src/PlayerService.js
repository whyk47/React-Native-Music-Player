import TrackPlayer, { Event, RepeatMode } from "react-native-track-player";
import { playlist } from "./constants";

export async function init() {
    let isSetUp = false
    try {
        await TrackPlayer.getActiveTrack()
        isSetUp = true
    } catch (e) {
        await TrackPlayer.setupPlayer()
        isSetUp = true
    } finally {
        return isSetUp
    }
}

export async function addPlaylist() {
    await TrackPlayer.add(playlist)
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

export async function playbackService() {
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause()
    })
    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play()
    })
    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext()
    })
    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious()
    })
    TrackPlayer.addEventListener(Event.RemoteSeek, (value) => {
        TrackPlayer.seekTo(value)
    })

}