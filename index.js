const proxy = require("redbird")({ port: 80 });

proxy.register("seusite.com", "http://localhost:3000");
proxy.register("seusite2.com", "http://localhost:3001");
proxy.register("seusite3.com", "http://localhost:3003");
