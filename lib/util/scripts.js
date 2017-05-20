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
  const name = await osa(TRACK_NAME)
  const album = await osa(TRACK_ALBUM)
  const artist = await osa(TRACK_ARTIST)
  const duration = await osa(TRACK_DURATION)
  const artwork = await osa(TRACK_ARTWORK)

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
  const state = await osa(STATE)
  const position = await osa(POSITION)

  const currentTrack = {
    state,
    position,
  }
}
