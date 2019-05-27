const express = require(`express`);

const app = express();

app.get(`/`, (request, response) => {
	response.send(`Welcome to the site.`);
});

app.get(`/about`, (request, response) => {
	response.send(`Yeet`);
});

app.listen(4000, () => console.log(`Listening on port 4000`));