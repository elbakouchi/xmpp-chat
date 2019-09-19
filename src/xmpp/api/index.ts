import { testBOSHServer } from './v1/testBOSHServer';
import Client from '../Client';
import * as v1 from './v1'
import { AbstractPlugin } from '@/xmpp/plugin/AbstractPlugin';
import { EncryptionPlugin } from '@/xmpp/plugin/EncryptionPlugin';

export default class JSXC {
   private static readonly __VERSION__ = '0.1.0';

   public static readonly version = JSXC.__VERSION__;

   public static readonly testBOSHServer = testBOSHServer;

   public static readonly register = v1.register;

   public static readonly AbstractPlugin = AbstractPlugin;

   public static readonly AbstractEncryptionPlugin = EncryptionPlugin;

   private static initialized = false;

   public numberOfCachedAccounts: number;

   public version: string = JSXC.__VERSION__;

   constructor(options:any) {
      if (JSXC.initialized) {
         throw new Error('JSXC was already initialized');
      }

      JSXC.initialized = true;

      this.numberOfCachedAccounts = Client.init(options);

      Object.assign(this, v1);
   }
}
