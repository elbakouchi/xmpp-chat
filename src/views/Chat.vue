<template>
  <div class="content">
      <div class="login-container">
            <LoginForm />
      </div>    
      <div class="chat-container">
        <Chat 
       :participants="participants"
       :myself="myself"
       :messages="messages"
       :onType="onType"
       :onMessageSubmit="onMessageSubmit"
       :chatTitle="chatTitle"
       :placeholder="placeholder"
       :colors="colors"
       :borderStyle="borderStyle"
       :hideCloseButton="hideCloseButton"
       :closeButtonIconSize="closeButtonIconSize"
       :submitIconSize="submitIconSize"
       :asyncMode="asyncMode"/>
      </div>
    </div>      
     
</template>

<script lang="ts">
import LoginForm from '@/components/LoginForm.vue';
import Chat from '@/components/Chat.vue';


export default {
  components: {
    Chat, LoginForm
  },
  data(){
    return {
      participants: [
        {
          name: 'Arnaldo',
          id: 1
        },
        {
          name: 'José',
          id: 2
        }
      ],
      myself: {
        name: 'Matheus S.',
        id: 3
      },
      messages: [
        {
          content: 'received messages', 
          myself: false,
          participantId: 1,
          timestamp: { year: 2019, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123 }
        },
        {
          content: 'sent messages', 
          myself: true,
          participantId: 3,
          timestamp: { year: 2019, month: 4, day: 5, hour: 19, minute: 10, second: 3, millisecond:123 }
        },
        {
          content: 'other received messages', 
          myself: false,
          participantId: 2,
          timestamp: { year: 2019, month: 5, day: 5, hour: 10, minute: 10, second: 3, millisecond: 123 }
        },
        {
            content: 'received messages', 
            myself: false,
            participantId: 1,
            timestamp: { year: 2019, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123 }
        }
      ],
      chatTitle: 'Joblinker Mission Negotiation',
      placeholder: 'send your message',
      colors:{
        header:{
          bg: '#d30303',
          text: '#fff'
        },
        message:{
          myself: {
            bg: '#fff',
            text: '#bdb8b8'
          },
          others: {
            bg: '#fb4141',
            text: '#fff'
          },
          messagesDisplay: {
            bg: '#f7f3f3'
          },
        },
        submitIcon: '#b91010'
      },
      borderStyle: {
        topLeft: '10px',
        topRight: '10px',
        bottomLeft: '10px',
        bottomRight: '10px',
      },
      hideCloseButton: false,
      submitIconSize: '20px',
      closeButtonIconSize: '20px',
      asyncMode: false
    }
  },
  methods: {
    onType: function (event){
      //here you can set any behavior
         console.log('typing');
    },
    onMessageSubmit: function(message){
      /*
      * example simulating an upload callback.
      * It's important to notice that even when your message wasn't send
      * yet to the server you have to add the message into the array
      */
      this.messages.push(message)

      /*
      * you can update message state after the server response
      */
     // timeout simulating the request
      setTimeout(() => {
        message.uploaded = true
      }, 2000)
    },
    // addMessage: function(){
    //   this.messages.push(
    //     {
    //       content: "Update state",
    //       myself: false,
    //       participantId: 1,
    //       timestamp: { year: 2014, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123 },
    //       uploaded: true,
    //       viewed: true
    //     }
    //   )
    // },

    // addParticipant: function() {
    //   const participant = {
    //      name: 'Karl',
    //       id: 4
    //     }
    //   this.participants.push(participant)
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content{
  width: 100%;
  display: flex;
  align-items:  center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.chat-container{
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(247, 243, 243);
  padding: 10px 0 10px 0;
  height: 500px;
  width: 350px;
}
.external-controller{
  background: #2c3e50;
  height: 300px;
  width: 600px;
  display: flex;
  color: #eee;
}

.controller-btn-container{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  flex-wrap: wrap;
}
.btn-message{
  cursor: pointer;
  background: #eee;
  border: none;
  height: 40px;
  color: #2c3e50;
  border-radius: 5px;
  outline: none;
  transition: 0.3s;
}
.btn-participant{
  cursor: pointer;
  background: #eee;
  border: none;
  height: 40px;
  color: #2c3e50;
  border-radius: 5px;
  outline: none;
  transition: 0.3s;
}
.btn-message:hover{
  background: rgb(255, 255, 255);
}
.custom-title{
  color: #eee;
}
.contaier-message-display{
    /* display: flex;
    flex-direction: column;
    justify-content: flex-end; */
    /* align-items: center; */
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    max-height: 100%;
}
.message-text{
    background: #fff;
    padding: 6px 10px;
    border-radius: 15px;
    margin: 5px 0 5px 0;
    max-width: 70%;
    overflow-wrap: break-word;
    text-align: left;
    white-space: pre-wrap;
}
.message-text > p {
    margin: 5px 0 5px 0;
    height: 100%;
}
.message-timestamp{
    padding: 2px 7px;
    border-radius: 15px;
    margin: 0;
    max-width: 50%;
    overflow-wrap: break-word;
    text-align: left;
    font-size: 10px;
    color: #bdb8b8;
    width: 100%;
    display: flex;
    align-items: center;
}
.my-message >.message-timestamp{
    text-align: right;
}
.my-message{
    justify-content: flex-end;
    padding-right: 15px;
    align-items: flex-end;
}
.other-message{
    justify-content: flex-start;
    padding-left: 15px;
    align-items: flex-start;
}
.other-message >.message-text{
    /* background: #fb4141;  */
    color: #fff;
    border-bottom-left-radius: 0px;
}
.my-message >.message-text{
    border-bottom-right-radius: 0px;
}
.message-container{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}
.message-username{
    font-size: 10px;
    font-weight: bold;
}
.icon-sent{
    width: 12px;
    padding-left: 5px;
    color: rgb(129, 127, 127);
}
.message-loading{
    height: 8px;
    width: 8px;
    border: 1px solid rgb(187, 183, 183);
    border-left-color: rgb(59, 59, 59);
    border-radius: 50%;
    margin-left: 5px;
    animation: spin 1.3s ease 13;
    
}
@keyframes spin{
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>