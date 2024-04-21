import { Message } from '@/common/interface/room-chat'
import { User } from '@/common/interface/user'

export const getMockMessage = (user: User, targetUser: User): Message[] => {
  return [
    {
      id: '1',
      sender: user,
      content: 'Hello',
      timestamp: Number(new Date()) - 1000 * 60 * 60 * 24,
    },
    {
      id: '2',
      sender: targetUser,
      content: 'Hi',
      timestamp: Number(new Date()) - 1000 * 60 * 60 * 20,
    },
    {
      id: '3',
      sender: user,
      content: 'How are you',
      timestamp: Number(new Date()) - 1000 * 60 * 60 * 10,
    },
    {
      id: '4',
      sender: targetUser,
      content: 'I am fine',
      timestamp: Number(new Date()) - 1000 * 60 * 60 * 5,
    },
    {
      id: '5',
      sender: targetUser,
      content: 'What about you',
      timestamp: Number(new Date()),
    },
    {
      id: '6',
      sender: user,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus nec odio tincidunt posuere. Nulla facilisi. Donec nec lacus nec libero lacinia vehicula. Ut euismod, purus nec tincidunt ultricies, purus turpis ultricies nisl, nec aliquet eros purus nec eros. Nullam nec metus nec odio tincidunt posuere. Nulla facilisi. Donec nec lacus nec libero lacinia vehicula. Ut euismod, purus nec tincidunt ultricies, purus turpis ultricies nisl, nec aliquet eros purus nec eros.',
      timestamp: Number(new Date()),
    },
    {
      id: '7',
      sender: targetUser,
      content:
        'Loremipsumdolorsitamet,consecteturadipiscingelit.Nullamnecmetusnecodiotinciduntposuere.Nullafacilisi.Donecneclacusnecliberolaciniavehicula.Uteuismod,purusnectinciduntultricies,purusturpisultriciesnisl,necaliqueterospurusneceros.',
      timestamp: Number(new Date()),
    },
  ]
}
