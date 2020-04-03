const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, resp) => {
	resp.json({
		message: 'Goodbye World'
	});
});

const port = 3030;
app.listen(port, () => {
	console.log(`Server running at port ${port}`);
});
