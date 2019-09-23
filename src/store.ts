import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
// import 'es6-promise/auto'; // for Promise polyfill
import { getField, updateField } from 'vuex-map-fields';
Vue.use(Vuex)
moment.locale('fr-Fr')

export default new Vuex.Store({
  state: {
    form: {
      login: '',
      password: '',
      domain: '',
      bosh: '',
      mission: '',
      negotiation: '',
      missionPoster: '',
      freelancer: '',
    },
    messages: [],
    myself:{},
    participants: [],
    chatTitle: '',
    placeholder: ''
  },
  mutations: {
    updateField,
    newMessage: (state, message) => {
      state.messages = [...state.messages, message];
    },
    setParticipants: (state, participants) => {
      state.participants = participants;  
    },
    setMyself: (state, myself) => {
      state.myself = myself;
    },
    setMessages: (state, messages) => {
      messages.map(message => {
        message.timestamp = moment(message.timestamp)
      })
      state.messages = messages;
    },
    setChatTitle: (state, title) => {
      state.chatTitle = title;
    },
    setPlaceholder: (state, placeholder) => {
      state.placeholder = placeholder;
    }
  },
  actions: {

  },
  getters: {
    getField,
    getParticipantById: (state) => (id) => {
      let curr_participant;
      state.participants.forEach(participant => {
        if(participant.id == id){
          curr_participant = participant;
        }
      })

      return curr_participant;
    }
  }
})