import { Room, RoomType } from "../interface/room-chat";
import { User } from "../interface/user";
import { MOCK_USERS } from "./user.const";

export const MOCK_ROOMS: Room[] = [
  {
    id: "1",
    type: RoomType.Group,
    name: "Room 1",
    members: [MOCK_USERS[0], MOCK_USERS[1], MOCK_USERS[2]],
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
      }
    ]
  }
];
