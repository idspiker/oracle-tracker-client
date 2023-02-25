import io from 'socket.io-client';

export default function connectToServer() {
  const joinCode = localStorage.getItem('join-code');

  const socket = io.connect('http://54.160.88.180:5002', {
    auth: { joinCode },
  });

  return socket;
}
