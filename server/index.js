const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
// api_key: '21bd8a53-fbde-4152-bbd7-8a8164e4ff58'
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});