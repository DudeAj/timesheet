const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ProjectModel = require('./model/options');
require('dotenv').config();


mongoose.connect(process.env.DB, {}, err => {
    console.log(err);
});
const app = express();
app.use(express.json());
app.use(cors())

app.post('/project', async (req, res) => {
    const item = req.body.item;
    console.log(item);

    ProjectModel.updateOne({ _id: '61f8197916af4747020ec7e6' }, { $push: { project: item } }, (err, result) => {
        console.log(result);
        res.send(result);
    });
});

app.post('/task', async (req, res) => {
    const item = req.body.item;
    console.log(item);

    ProjectModel.updateOne({ _id: '61f8197916af4747020ec7e6' }, { $push: { task: item } }, (err, result) => {
        console.log(result);
        res.send(result);
    })
});


app.get('/getProject', async (req, res) => {
    ProjectModel.find({}, (err, data) => {
        const [{ project }] = data
        res.json(project);
    })
});

app.get('/getTask', async (req, res) => {
    ProjectModel.find({}, (err, data) => {
        const [{ task }] = data
        res.json(task);
    })
});

app.listen(8000, () => {
    console.log('Server Running on Port 8000');
})