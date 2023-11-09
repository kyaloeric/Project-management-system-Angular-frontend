import express from 'express'
import cron from 'node-cron'
import { welcomeUser } from './mailservices/welcomeUser'


const app = express()
const PORT = 4001;

const run = async()=>{
    cron.schedule('*/10 * * * * *', async()=>{
        console.log('Checking for a new user');
        
        await welcomeUser()
    })
    
}

run()


app.listen(PORT, ()=>{
    console.log('Mail server up and running ...'); 
})