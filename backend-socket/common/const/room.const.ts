import { Room, RoomType } from "../interface/room-chat";
import { User } from "../interface/user";
import { MOCK_USERS } from "./user.const";

const masterUser: User = {
  id: ".kf5sudjv6un",
  username: "MaStEr",
  userAvatar: "panda.png"
};
export const MOCK_ROOMS: Room[] = [
  {
    id: "1",
    type: RoomType.Group,
    name: "Room 1",
    members: [MOCK_USERS[0], MOCK_USERS[1], MOCK_USERS[2], masterUser],
    messages: [
      {
        id: "1",
        sender: MOCK_USERS[0],
        content: "Hello",
        timestamp: Date.now()
      },
      {
        id: "2",
        sender: MOCK_USERS[1],
        content: "Hi",
        timestamp: Date.now()
      },
      {
        id: "3",
        sender: MOCK_USERS[2],
        content: "Hey",
        timestamp: Date.now()
      },
      {
        id: "4",
        sender: masterUser,
        content: "Welcome",
        timestamp: Date.now()
      }
    ]
  }
];
