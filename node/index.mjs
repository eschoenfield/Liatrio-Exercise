import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    const intro = 'My name is Ely Schoenfield'
    const unixEpoch = moment().unix()
    console.log(intro)
    res.send(intro)
    console.log(unixEpoch)
    res.send(unixEpoch)
})