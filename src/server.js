import net from 'net';
import initServer from './init/index.js';
import { config } from './config/config.js';

const server = net.createServer((socket) => {
  console.log(`Client connected from: ${socket.remoteAddress}: ${socket.remotePort}`);

  socket.on('data', (data) => {
    console.log(data);
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });

  socket.on('error', (err) => {
    console.error('Socket error:', err);
  });
});

initServer()
  .then(() => {
    server.listen(config.server.port, config.server.host, () => {
      console.log(`Server listening on ${config.server.host}:${config.server.port}`);
      console.log(server.address());
    });
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
