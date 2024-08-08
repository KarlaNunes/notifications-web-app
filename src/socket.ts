// src/socket.ts
const BASE_URL = "ws://localhost:8000";
const getToken = (): string | null => {
  return '3e1978056c485cf7219e0dfaf3e4cbfd5667ce1d'; 
};

const token = getToken();
const SOCKET_URL = `${BASE_URL}/ws/notifications/?token=${token}`;

const socket = new WebSocket(SOCKET_URL);

export default socket;
