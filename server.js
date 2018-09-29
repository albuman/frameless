const express = require('express'),
	path = require('path');


var app = express();
app.use(express.static(path.resolve('./dist')));
app.use('*', (req, res) => {
	res.sendFile(path.resolve('./dist/index.html'));
});

app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.send(err.message);
});

app.listen(8080);