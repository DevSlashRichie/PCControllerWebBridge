const Channels = require('pusher')

const {
  APP_ID: appId,
  KEY: key,
  SECRET: secret,
  CLUSTER: cluster,
} = process.env

const channels = new Channels({
  appId: "1096876",
  key: "83913f65af1492cd2762",
  secret: "d809356d49592e639548",
  cluster: "us2"
})

module.exports = (req, res) => {
  const data = req.body
  channels.trigger("my-channel", "my-event", {
    message: "hello world"
  })
  res.send("done")
}