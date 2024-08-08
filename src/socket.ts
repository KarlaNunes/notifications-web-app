import { io, Socket } from "socket.io-client";

const SOCKET_URL = "ws://localhost:8000'";

const socket: Socket = io(SOCKET_URL);

export default socket;
