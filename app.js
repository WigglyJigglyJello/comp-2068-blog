const express = require(`express`);

const app = express();

app.get(`/`, (request, response) => {
	response.send(`Welcome to the site.`);
});

app.get(`/about`, (request, response) => {
	response.send(`Yeet`);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));