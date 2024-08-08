"use client";
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('ws://localhost:8000');  // Django WebSocket server address

const WebSocketComponent = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to WebSocket server');
        });

        socket.on('message', (data) => {
            setMessage(data.message);
        });

        return () => {
            socket.off('connect');
            socket.off('message');
        };
    }, []);

    const sendMessage = () => {
        socket.send(JSON.stringify({ message: 'Hello from Next.js!' }));
    };

    return (
        <div>
            <button onClick={sendMessage}>Send Message</button>
            <p>Received: {message}</p>
        </div>
    );
};

export default WebSocketComponent;
