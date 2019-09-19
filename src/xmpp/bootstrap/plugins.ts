import Client from '@/xmpp/Client'
import OTRPlugin from '@/xmpp/plugins/otr/Plugin'
import ReceiptPlugin from '@/xmpp/plugins/MessageDeliveryReceiptsPlugin'
import NotificationPlugin from '@/xmpp/plugins/Notification'
import MeCommandPlugin from '@/xmpp/plugins/MeCommandPlugin'
import MessageArchiveManagementPlugin from '@/xmpp/plugins/mam/Plugin'
import ChatStatePlugin from '@/xmpp/plugins/chatState/ChatStatePlugin'
import HttpUploadPlugin from '@/xmpp/plugins/httpUpload/HttpUploadPlugin'
import AvatarVCardPlugin from '@/xmpp/plugins/AvatarVCardPlugin'
import CarbonsPlugin from '@/xmpp/plugins/MessageCarbonsPlugin'
import OMEMOPlugin from '@/xmpp/plugins/omemo/Plugin'
import BookmarksPlugin from '@/xmpp/plugins/bookmarks/BookmarksPlugin'

Client.addPlugin(OTRPlugin);
Client.addPlugin(OMEMOPlugin);
Client.addPlugin(ReceiptPlugin);
Client.addPlugin(NotificationPlugin);
Client.addPlugin(MeCommandPlugin);
Client.addPlugin(MessageArchiveManagementPlugin);
Client.addPlugin(ChatStatePlugin);
Client.addPlugin(HttpUploadPlugin);
Client.addPlugin(AvatarVCardPlugin);
Client.addPlugin(CarbonsPlugin);
Client.addPlugin(BookmarksPlugin);
