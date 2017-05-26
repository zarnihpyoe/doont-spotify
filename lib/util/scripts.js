'use babel';

import osa from './osascript'

const SPOTIFY = 'Application("spotify")'
const CURRENT_TRACK = `${SPOTIFY}.currentTrack`

/* actions scripts */
const TOGGLE = `${SPOTIFY}.playpause()`
export const toggle = async () => await osa(TOGGLE)

const PREVIOUS = `${SPOTIFY}.previousTrack()`
export const previous = async () => await osa(PREVIOUS)

const NEXT = `${SPOTIFY}.nextTrack()`
export const next = async () => await osa(NEXT)


/* ui scripts */
const TRACK_ID = `${CURRENT_TRACK}.id()`
const TRACK_NAME = `${CURRENT_TRACK}.name()`
const TRACK_ALBUM = `${CURRENT_TRACK}.album()`
const TRACK_ARTIST = `${CURRENT_TRACK}.artist()`
const TRACK_NUMBER = `${CURRENT_TRACK}.trackNumber()`
const TRACK_DURATION = `${CURRENT_TRACK}.duration()`
const TRACK_ARTWORK = `${CURRENT_TRACK}.artworkUrl()`
const TRACK_POPULARITY = `${CURRENT_TRACK}.popularity()`

export const currentTrack = async () => {
  const [ name, album, artist, duration, artwork ] = await Promise.all([
    osa(TRACK_NAME),
    osa(TRACK_ALBUM),
    osa(TRACK_ARTIST),
    osa(TRACK_DURATION),
    osa(TRACK_ARTWORK),
  ])

  const currentTrack = {
    name,
    album,
    artist,
    duration,
    artwork,
  }
}


/* ui scripts */
const STATE = `${SPOTIFY}.playerState()`
const POSITION = `${SPOTIFY}.playerPosition()`

export const currentState = async () => {
  const [ state, position ] = await Promise.all([
    osa(STATE),
    osa(POSITION),
  ])

  const currentTrack = {
    state,
    position,
  }
}
