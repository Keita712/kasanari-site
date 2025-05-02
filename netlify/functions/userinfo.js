const fetch = require("node-fetch");

exports.handler = async (event) => {
  const method = event.httpMethod;

  if (method === "GET") {
    const res = await fetch("http://192.168.11.18:3000/api/userinfo", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    const body = await res.text();
    return {
      statusCode: res.status,
      body
    };
  }

  if (method === "POST") {
    const res = await fetch("http://192.168.11.18:3000/api/userinfo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: event.body
    });
    const body = await res.text();
    return {
      statusCode: res.status,
      body
    };
  }

  return {
    statusCode: 405,
    body: "Method Not Allowed"
  };
};