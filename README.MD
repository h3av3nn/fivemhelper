
# FivemJS

A useful statistics and steam hex conversion module for Fivem servers

## Usage/Examples

```javascript
const FivemJS = require('fivemhelper')

let FivemServer = new FivemJS.Server("IP:PORT")

FivemJS.SteamUrltoHex("https://steamcommunity.com/profiles/76561198392664069/", { steamprefix: true })
// steam:110000119c5e005

FivemJS.SteamUrltoHex("https://steamcommunity.com/profiles/76561198392664069/", { steamprefix: false })
// 110000119c5e005

FivemJS.HextoSteamUrl("steam:110000119c5e005", { url: true })
// https://steamcommunity.com/profiles/76561198392664069/

FivemJS.HextoSteamUrl("steam:110000119c5e005", { url: false })
// 76561198392664069

// Stat Functions


FivemServer.getServerStatus().then(data => console.log(data))

FivemServer.getPlayers().then(data => console.log(data))

FivemServer.getPlayersAll().then(data => console.log(data))

FivemServer.getMaxPlayers().then(data => console.log(data))

FivemServer.getResources().then(data => console.log(data))

FivemServer.getTags().then(data => console.log(data))

FivemServer.getServer().then(data => console.log(data))

FivemServer.getOnesync().then(data => console.log(data))

FivemServer.getLocale().then(data => console.log(data))

FivemServer.getGamename().then(data => console.log(data))

FivemServer.getEnhancedHostSupport().then(data => console.log(data))

FivemServer.getlicenseKeyToken().then(data => console.log(data))

FivemServer.getScriptHookAllowed().then(data => console.log(data))


```

## Support and Feedback

For support or feedback, join our [Discord Server](https://discord.gg/NjJJAcbmNc).