const mongoose = require('mongoose')
const db = require('../models')

mongoose.connect('mongodb://localhost:27017/devlr', {
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
useCreateIndex: true,
})

const userSeed = [
{
    _id : ObjectId("60a298987ec6b108b107ddb7"),
    following : [],
    followers : [],
    email : "b@gmail.com",
    password : "$2a$10$QSxpvRPve2WG7xL2/LoM4eGiFWo345Fi7ckwgjIECLihO2NJJpTVq",
    date : ISODate("2021-05-17T16:23:52.132Z"),
    __v : 0,
    accessToken : "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"
},
{
    _id : ObjectId("60a532c9266a4f2cc69925f6"),
    email : "brenna.mcleod@gmail.com",
    password : "$2a$10$/YLBRz8HtKmosuFpSXPhPeOHraXN8R6xN9H7NB/H4h/vnPh3GxFwa",
    date : ISODate("2021-05-19T15:46:17.512Z"),
    __v : 0,
    accessToken : "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"
},
{
    _id : ObjectId("60a5336e266a4f2cc69925f8"),
    email : "maggiemaywilder@gmail.com",
    password : "$2a$10$J6GpHjELcfHGAP5FK09KH.G1u.VSpiChBvDvH09KGl48.fOjPZWOy",
    date : ISODate("2021-05-19T15:49:02.441Z"),
    __v : 0,
    accessToken : "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"
},
{
    _id : ObjectId("60a533d0266a4f2cc69925fa"),
    email : "kolton.c.decker@gmail.com",
    password : "$2a$10$wwufUMA88PNQlCyvA4lj2eJPTfRrBVDAAnTwtJWThTStFkq6phGCm",
    date : ISODate("2021-05-19T15:50:40.443Z"),
    __v : 0,
    accessToken : "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"
},
{
    _id : ObjectId("60a5344d266a4f2cc69925fc"),
    email : "steve.babb@outlook.com",
    password : "$2a$10$YFATTMrJQuOUgo/4qTsjEuQADymcbMXqM1xpqNnE2t/97p027lZVO",
    date : ISODate("2021-05-19T15:52:45.669Z"),
    __v : 0,
    accessToken : "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"
},
]

const profileSeed = [
{
    _id : ObjectId("60a298987ec6b108b107ddb8"),
    skills : [ 
        "Web Dev", 
        "Full Stack"
    ],
    languages : [ 
        "Javascript", 
        "CSS"
    ],
    themePref : "222222",
    user : ObjectId("60a298987ec6b108b107ddb7"),
    name : "Brandy Quinlan",
    highestGraduation : "Masters",
    school : "KU",
    totalYearsofExperience : 1,
    currentPosition : "None",
    company : "None",
    from : ISODate("2021-05-05T00:00:00.000Z"),
    to : ISODate("2021-05-14T00:00:00.000Z"),
    githubUsername : "brandyquinlan",
    avatarUrl : "https://avatars.githubusercontent.com/u/73489664?u=d04ff688c61322f6f737ce805be049871747b0e9&v=4",
    __v : 0
},
{
    _id : ObjectId("60a532c9266a4f2cc69925f7"),
    following : [],
    followers : [],
    skills : [],
    languages : [],
    themePref : "222222",
    user : ObjectId("60a532c9266a4f2cc69925f6"),
    name : "Brenna McLeod",
    highestGraduation : "Masters",
    school : "KU",
    totalYearsofExperience : 3,
    currentPosition : "Student",
    company : "None",
    from : ISODate("2021-04-28T00:00:00.000Z"),
    to : ISODate("2021-05-18T00:00:00.000Z"),
    githubUsername : "bmcleod12",
    avatarUrl : "https://avatars.githubusercontent.com/u/73400680?u=d41d9b8afdf5c9a4408cc831f03c8247a5762883&v=4",
    __v : 0
},
{
    _id : ObjectId("60a5336e266a4f2cc69925f9"),
    following : [],
    followers : [],
    skills : [],
    languages : [],
    themePref : "222222",
    user : ObjectId("60a5336e266a4f2cc69925f8"),
    name : "Maggie May Wilder",
    highestGraduation : "Masters",
    school : "KU",
    totalYearsofExperience : 1,
    currentPosition : "Student",
    company : "None",
    from : ISODate("2021-05-05T00:00:00.000Z"),
    to : ISODate("2021-05-14T00:00:00.000Z"),
    githubUsername : "maggiemaywilder",
    avatarUrl : "https://avatars.githubusercontent.com/u/72891601?u=22b3a392a8e7c0b7aff4ec6aa8129738bdbc196b&v=4",
    __v : 0
},
{
    _id : ObjectId("60a533d0266a4f2cc69925fb"),
    following : [],
    followers : [],
    skills : [],
    languages : [],
    themePref : "222222",
    user : ObjectId("60a533d0266a4f2cc69925fa"),
    name : "Kolton Decker",
    highestGraduation : "Masters",
    school : "KU",
    totalYearsofExperience : 4,
    currentPosition : "Student",
    company : "None",
    from : ISODate("2021-05-07T00:00:00.000Z"),
    to : ISODate("2021-05-18T00:00:00.000Z"),
    githubUsername : "koltondecker",
    avatarUrl : "https://avatars.githubusercontent.com/u/71789549?u=1334b2c305f481963f9ee5be7d3f8992ac9168b6&v=4",
    __v : 0
},
{
    _id : ObjectId("60a5344d266a4f2cc69925fd"),
    following : [],
    followers : [],
    skills : [],
    languages : [],
    themePref : "222222",
    user : ObjectId("60a5344d266a4f2cc69925fc"),
    name : "Steve Babb",
    highestGraduation : "Masters",
    school : "KU",
    totalYearsofExperience : 3,
    currentPosition : "Student",
    company : "None",
    from : ISODate("2021-04-28T00:00:00.000Z"),
    to : ISODate("2021-05-12T00:00:00.000Z"),
    githubUsername : "verusbabb",
    avatarUrl : "https://avatars.githubusercontent.com/u/72149563?u=48be23f0175ac203672304c40610a8b12990919f&v=4",
    __v : 0
},
]
db.User.deleteMany({})
.then(() => db.User.collection.insertMany(userSeed))
.then((data) => {
    console.log(data)
    console.log(`${data.result.n}  'user records inserted!'`)
    // process.exit(0)
})
.catch((err) => {
    console.error(err)
    // process.exit(1)
})

db.Profile.deleteMany({})
.then(() => db.Profile.collection.insertMany(profileSeed))
.then((data) => {
    console.log(data)
    console.log(`${data.result.n}  'profile records inserted!'`)
    process.exit(0)
})
.catch((err) => {
    console.error(err)
    process.exit(1)
})
