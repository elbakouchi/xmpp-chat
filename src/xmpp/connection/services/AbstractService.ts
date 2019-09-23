import { IConnection } from '@/xmpp/connection/Connection.interface';
import Account from '@/xmpp/Account';
import {Strophe} from 'strophe.js'

type Send = (stanzaElement: Element | Strophe.Builder) => void;
type SendIQ = (stanzaElement: Element | Strophe.Builder) => Promise<Element>;

export default abstract class AbstractService {
   constructor(protected send: Send, protected sendIQ: SendIQ,
               protected connection: IConnection, protected account: Account) {

   }
}
