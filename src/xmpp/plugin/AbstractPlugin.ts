import { IPluginAPI } from './PluginAPI.interface'

export enum PluginType {
   Encryption
}

export enum PluginState {
   Enabled, Ready, Disabled
}

export enum EncryptionState {
   Plaintext,
   VerifiedEncrypted,
   UnverifiedEncrypted,
   Ended
}

export interface IPlugin {
   new(pluginAPI: IPluginAPI): AbstractPlugin
   getId(): string
   getName(): string
}

export abstract class AbstractPlugin {
   public static getId(): string {
      return null;
   }

   public static getName(): string {
      return null;
   }

   constructor(protected minVersion: string, protected maxVersion: string, protected pluginAPI: IPluginAPI) {
      if (!this.isSupportingClientVersion()) {
         throw new Error('This plugin doesn\'t support this client version');
      }
   }

   public destroy() {

   }

   private isSupportingClientVersion(): boolean {
      let clientVersionNumber = this.getVersionNumber(this.pluginAPI.getVersion());
      let minVersionNumber = this.getVersionNumber(this.minVersion);
      let maxVersionNumber = this.getVersionNumber(this.maxVersion);

      return clientVersionNumber >= minVersionNumber && clientVersionNumber <= maxVersionNumber;
   }

   private getVersionNumber(version: string): number {
      let versions = version.split('.').map(function(v) { return parseInt(v, 10); });

      return versions[0] * 1000000 + versions[1] * 1000 + versions[2];
   }
}
