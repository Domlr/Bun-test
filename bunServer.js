// bunServer.js
export default {
    port: 3000,
    fetch(request) {
      return new Response("This is a  bun serve");
    },
  };