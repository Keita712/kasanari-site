const fetch = require("node-fetch");

exports.handler = async (event) => {
  const email = event.path.split("/").pop();
  const res = await fetch(`http://192.168.11.18:3000/api/setuserid/${email}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const body = await res.text();
  return {
    statusCode: res.status,
    body,
  };
};
