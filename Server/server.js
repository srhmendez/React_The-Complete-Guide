const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const spotifyApi = require('spotify-web-api-node');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.json())

app.post('/login', (req, res) => {
    const spotifyWebApi = new SpotifyWebApi({
        redirectUri: `http://localhost:3000`,
        clientID: `88e0416914c0497c96ae73628896734b`,
        clientSecre: `a6fbd070ba224305a37d30183c2062ce`
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.exipres_in
        })
    })
    .catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})

app.listen(3001)