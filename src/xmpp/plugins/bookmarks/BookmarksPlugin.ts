import { AbstractPlugin } from '../../plugin/AbstractPlugin'
import PluginAPI from '../../plugin/PluginAPI'
import { PubSubService } from './services/PubSubService';
import LocalService from './services/LocalService';
import BookmarkProvider from './BookmarkProvider';
import Translation from '@/xmpp/util/Translation';

const MIN_VERSION = '4.0.0';
const MAX_VERSION = '4.0.0';

export default class BookmarksPlugin extends AbstractPlugin {
   public static getId(): string {
      return 'bookmarks';
   }

   public static getName(): string {
      return 'Bookmarks';
   }

   public static getDescription(): string {
      return Translation.t('setting-bookmarks-enable');
   }

   constructor(pluginAPI: PluginAPI) {
      super(MIN_VERSION, MAX_VERSION, pluginAPI);

      let contactManager = pluginAPI.getContactManager();
      let provider = new BookmarkProvider(contactManager, pluginAPI.createMultiUserContact.bind(pluginAPI));

      provider.registerService(new LocalService(pluginAPI.getStorage()));

      //@TODO test if pubsub is available
      let pubSub = new PubSubService(pluginAPI.getConnection());
      provider.registerService(pubSub);

      pluginAPI.registerContactProvider(provider);
   }
}
