import JingleAbstractSession from './JingleAbstractSession';
import { IOTalkJingleMediaSession } from '@/xmpp/vendor/Jingle.interface';

export default abstract class JingleMediaSession extends JingleAbstractSession {
   protected session: IOTalkJingleMediaSession;

   public getRemoteStreams(): MediaStream[] {
      return this.session.pc.getRemoteStreams();
   }
}
