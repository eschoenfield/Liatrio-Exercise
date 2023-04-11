import express from 'express'
//import os from 'os'

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    const helloMessage = "My name is Ely Schoenfield"
    const todayDate = new Date()
    const curYear = todaysDate.getFullYear()
// 2022

    //const helloMessage = "Hello from the ${os.hostname()}" + os.hostname()
    console.log(helloMessage)
    res.send(helloMessage)
})

app.listen(PORT, () => {
    console.log('Web server is listening at port ${PORT}')
})