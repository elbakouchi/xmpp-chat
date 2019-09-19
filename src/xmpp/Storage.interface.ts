export default interface IStorage {

   getName(): string
   generateKey(...args: string[]): string
   getPrefix(): string
   getBackend()

   setItem(type: string, key: string, value: any): void;
   setItem(key: string, value: any): void

   getItem(type: string, key: string): any;
   getItem(key: string): any;

   removeItem(type:any, key:any): void;
   removeItem(key:any): void;

   updateItem(type:any, key:any, variable:any, value:any): void;
   updateItem(key:any, variable:any, value:any): void;

   increment(key: string): void

   removeElement(type:any, key:any, name:any): void;
   removeElement(key:any, name:any): void;

   getItemsWithKeyPrefix(keyPrefix: string):any

   registerHook(eventName: string, func: (newValue: any, oldValue: any, key: string) => void):any

   removeHook(eventName: string, func?: (newValue: any, oldValue: any, key: string) => void):any

   removeAllHooks():any

   destroy():any
}
