import dns from "dns";

dns.resolveSrv(
  "_mongodb._tcp.cluster0.i3bj1sk.mongodb.net",
  (err, addresses) => {
    console.log(err);
    console.log(addresses);
  }
);