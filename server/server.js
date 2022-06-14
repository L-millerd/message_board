import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import fs from 'fs';


const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'twitter2'
  });

const server = express();
server.use(cors());
server.use(express.json());

server.listen(4400, function(){
    console.log('server is successfully running on port 4400')
})

db.connect(error =>{
    if(error){
        console.log("sorry, cannot connect to db", error);
    }
    else{
        console.log ("connected to mysql db");
    }
})

server.get('/tweets', (req, res)=>{
    let query = "CALL `getTweets`()";
    db.query(query, (error, alltweets)=>{
        if(error){
            res.json({ alltweets: false, message: error})
        }
        else{
            res.json({alltweets: alltweets[0], message: "returned tweets" });
        }
    })
})

server.post('/tweets', (req, res)=>{
    let query = "CALL `addTweet`(?, ?, ?, ?, ?, ?, ?)";
    let profilepic = req.body.profilePic;
    let username = req.body.userName;
    let twitterhandle = req.body.twitterHandle;
    let feed = req.body.feed;
    let comments = req.body.comments;
    let retweets = req.body.retweets;
    let likes = req.body.likes
    db.query(query, [profilepic, username, twitterhandle, feed, comments, retweets, likes], (error, newTweet)=>{
        if(error){
            res.json({newtweet: false, message: error});
        }
        else{
            res.json({newtweet: newTweet[0], message: "tweet successfully added" })
        }
    })
})

server.get('/get-tweets/:id', (req, res) =>{
    let query = "CALL `getTweetById`(?)";
    let id = req.params.id;
    db.query(query, id, (error, getTweet)=>{
        if(error){
            res.json({getTweet: false, message: error});
        }
        else{
            res.json({getTweet: getTweet[0][0], message: "Recieved Tweet"})
        }
    })
})



server.put('/edit-tweets/:id', (req, res) =>{
    let query = "CALL `editTweet`(?, ?)";
    let tweetID = req.params.id;
    let feed = req.body.feed;
    db.query(query, [tweetID, feed], (error, editTweet) =>{
        if(error){
            res.json({editTweet: false, message: error})
        }
        else{
            res.json({editTweet: true, message: "Successfully Edited"})
        }
    })
})

server.delete('/delete-tweets/:id', (req, res) =>{
    let query = "CALL `deleteTweet`(?)";
    let tweetID = req.params.id;
    db.query(query, [tweetID], (error, deleteTweet) =>{
        if(error){
            res.json({deleteTweet: false, message: error})
        }
        else{
            res.json({deleteTweet: true, message: "you have deleted your tweet"})
        }
    })
})


server.post('/add-user', (req, res) =>{
    let query = "CALL `addUser`(?, ?, ?, ?, ?)";
    let profilePic = req.body.profilepic;
    let twitterHandle = req.body.twitterhandle;
    let userName = req.body.username;
    let password = req.body.password
    let email = req.body.email
    db.query(query, [profilePic, twitterHandle, userName, password, email], (error, data)=>{
        if(error){
            res.json({addUser: false, message: error})
        }
        else{
            res.json({addUser: true, data, message: "You have successfully added a user"})
        }
    })
})

server.post('/login', (req, res)=>{
    let query = "CALL `login`(?, ?)";
    let email = req.body.email;
    let password = req.body.password;
    db.query(query, [email, password], (error, data)=>{
        if(error){
            res.json({loggedIn: false, message: error})
        }
        else{
            res.json({loggedIn: true, data, message:"you have logged in"})
        }
    })
})