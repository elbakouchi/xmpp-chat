import { IJID } from '@/xmpp//JID.interface';
import RoomBookmark from '@/xmpp/plugins/bookmarks/RoomBookmark';

export default abstract class AbstractService {
   public abstract getName(): string

   public abstract async getRooms(): Promise<RoomBookmark[]>

   public abstract async addRoom(room: RoomBookmark)

   public abstract async removeRoom(id: IJID)
}
