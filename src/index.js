const Hapi = require('@hapi/hapi');
const booksRoute = require('./routes/books');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 9000,
    host: '0.0.0.0',
    routes: { cors: true },
  });

  server.route(booksRoute);

  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
