require("cross-fetch/polyfill");
const core = require("@actions/core");
const github = require("@actions/github");
const fs = require("fs");

try {
  const groupId = core.getInput("group-id");
  const authToken = core.getInput("auth-token");
  const payload = {
    message: fs.readFileSync("./CHANGELOG.md", "utf8"),
    formatting: "MARKDOWN",
  };

  const headers = {
    Authorization: `Bearer ${authToken}`,
    "Content-Type": "application/json",
  };

  fetch(`https://graph.facebook.com/${groupId}/feed`, {
    method: "POST",
    redirect: "follow",
    headers: headers,
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
} catch (error) {
  core.setFailed(error.message);
}
