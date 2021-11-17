
const http = require('http')

const port = process.env.PORT || 80


http.createServer((request, response) => {
	switch (request.method) {
	case 'POST':
 response.statusCode = 200
  response.setHeader('Content-Type', 'text/xml')
  response.end('Ответ на POST запрос (XML)')
break;
	case 'GET':
 response.statusCode = 200
  response.setHeader('Content-Type', 'text/html')
  response.end('<meta charset="utf-8"> <h1>Ответ на GET запрос (HTML)</h1>')
break;
	case 'PUT':
 response.statusCode = 200
  response.setHeader('Content-Type', 'application/json')
  response.end('Ответ на PUT запрос (JSON)')
break;
}
}).listen(port);
