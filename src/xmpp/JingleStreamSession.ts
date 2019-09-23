import JingleHandler from '@/xmpp/connection/JingleHandler';
import Log from '@/xmpp/util/Log';
import JingleMediaSession from './JingleMediaSession';
import Notification from './Notification';
import Translation from '@/xmpp/util/Translation';

export default class JingleStreamSession extends JingleMediaSession {

   public onOnceIncoming() {
      Notification.notify({
         title: Translation.t('Incoming_stream'),
         message: Translation.t('from_sender') + this.peerContact.getName(),
         source: this.peerContact
      });

      // send signal to partner
      this.session.ring();
   }

   protected onIncoming() {
      Log.debug('incoming stream from ' + this.session.peerID);

      let videoDialog = undefined;// JingleHandler.getVideoDialog();

      videoDialog.showCallDialog(this).then(() => {
         videoDialog.addSession(this);
         videoDialog.showVideoWindow();

         this.session.accept();
      }).catch((reason) => {

         //@TODO hide user media request overlay

         //@TODO post reason to chat window
         if (reason !== 'aborted') {
            Log.warn('Decline call', reason)

            this.session.decline();
         }
      });
   }

   public getMediaRequest() {
      return [];
   }
}
