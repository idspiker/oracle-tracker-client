import io from 'socket.io-client';

export default function connectToServer() {
  const joinCode = localStorage.getItem('join-code');

  const socket = io.connect('https://api.oracletracker.com', {
    auth: { joinCode },
  });

  return socket;
}
