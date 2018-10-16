if (process.env.NODE_ENV === 'production') {
	module.exports = { mongoURI: ':P' };
} else {
	module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev' };
}
