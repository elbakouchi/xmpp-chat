import Client from '@/xmpp/Client';
import { Presence } from '@/xmpp/connection/AbstractConnection';

export function disconnect() {
   return new Promise(resolve => {
      Client.getPresenceController().registerCurrentPresenceHook((presence:any) => {
         if (presence === Presence.offline) {
            resolve();
         }
      });

      if (Client.getAccountManager().getAccount()) {
         Client.getPresenceController().setTargetPresence(Presence.offline);
      } else {
         resolve();
      }
   });
}
