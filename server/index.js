const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(
	express.urlencoded({
		extended: true
	})
);
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));

require('./api')(app);

//connect to mongodb database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/devlr', {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useFindAndModify: false
});

app.listen(PORT, () => {
	console.log(`Server online and listening on ${PORT}`);
});
