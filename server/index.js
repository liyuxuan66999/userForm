const express = require('express');
const bodyParser = require('body-parser');
const { default: axios } = require('axios');
const cors = require('cors'); 
const {ofacApi, ofacApiKey} = require('./utils/enums');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../web/build')));

app.get('*', (req, res) => {
    // res.sendFile(
    //     path.join(__dirname, '../web/build/index.html'),
    //     function (err) {
    //         if (err) {
    //             res.status(500).send(err)
    //         }
    //     }
    // );
    res.sendFile(
        path.join(__dirname, '../web/build', 'index.html'),
        function (err) {
            if (err) {
                res.status(500).send(err)
            }
        }
    );
});

app.post('/validateUser', async (req, res) => {
    const { firstName, lastName, country, birthDay } = req.body;
    console.log('Request:', req.body);
    if (!firstName || !lastName || !country || !birthDay) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const ofacResponse = await axios.post(ofacApi.OFAC_API_SCREEN_URL, {
        apiKey: ofacApiKey,
        minScore: 95,
        source: ["sdn", "nonsdn", "eu"],
        types:['person'],
        cases: [{
            name: `${firstName} ${lastName}`,
            type: 'individual',
            dob: birthDay,
            citizenship: country
        }]
    });
    const {data: {results=[]}} = ofacResponse;
    const matchSummaries = results.flatMap(result =>
        result.matches?.map(match => match.matchSummary)
      );
    res.status(200).json({ matchSummaries });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});