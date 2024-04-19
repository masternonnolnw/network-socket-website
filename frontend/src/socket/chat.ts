import { io } from 'socket.io-client'

import { SOCKET_URL } from '@/common/env'

export const chatSocket = io(SOCKET_URL)
