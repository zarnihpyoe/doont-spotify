'use babel';

import DoontSpotifyView from './doont-spotify-view';
import { CompositeDisposable } from 'atom';
import { toggle, previous, next } from './util/scripts'

export default {

  doontSpotifyView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.doontSpotifyView = new DoontSpotifyView(state.doontSpotifyViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.doontSpotifyView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles to play or pause current track
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'doont-spotify:toggle': () => toggle()
    }));
    // Register command that jump to previous track
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'doont-spotify:previous': () => previous()
    }));
    // Register command that jump to next track
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'doont-spotify:next': () => next()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.doontSpotifyView.destroy();
  },

  serialize() {
    return {
      doontSpotifyViewState: this.doontSpotifyView.serialize()
    };
  },

  toggle() {
    console.log('DoontSpotify was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
