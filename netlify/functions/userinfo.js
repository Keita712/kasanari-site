const fetch = require("node-fetch");

exports.handler = async (event) => {
  const res = await fetch("http://192.168.11.18:3000/api/userinfo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: event.body,
  });

  const body = await res.text();
  return {
    statusCode: res.status,
    body,
  };
};
