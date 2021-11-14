module.exports = {
  apps: [
    {
      script: "app.js",
      name: "backend",
      node_args: "-r dotenv/config"
    }
  ]
}
