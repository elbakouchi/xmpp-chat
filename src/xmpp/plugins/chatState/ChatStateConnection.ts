import * as Namespace from '@/xmpp/connection/xmpp/namespace'
import JID from '@/xmpp/JID'
import { STATE } from './State'
import { $msg } from '@/xmpp/vendor/Strophe'

export default class ChatStateConnection {
   constructor(private send) {

   }

   public sendPaused(to: JID, type: 'chat' | 'groupchat' = 'chat') {
      this.sendState(STATE.PAUSED, to, type);
   }

   public sendComposing(to: JID, type: 'chat' | 'groupchat' = 'chat') {
      this.sendState(STATE.COMPOSING, to, type);
   }

   private sendState(state: STATE, to: JID, type: 'chat' | 'groupchat' = 'chat') {
      let msg = $msg({
         to: to.full,
         type
      }).c(state, {
         xmlns: Namespace.get('CHATSTATES')
      });

      this.send(msg);
   }
}
