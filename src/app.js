const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const API_URL = process.env.API_URL;

const SESSION_ID = process.env.SESSION_ID;

const start = () => {
  const app = express();

  if (!SESSION_ID || API_URL) {
    throw new Error('Session identifier is required');
  }

  app.all('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
    res.header(
      'Access-Control-Allow-Headers',
      req.header('access-control-request-headers')
    );

    if (req.method === 'OPTIONS') {
      res.send();
    } else {
      request(
        {
          url: `${API_URL}${req.url}`,
          method: req.method,
          json: req.body,
          headers: {
            Cookie: `session=${SESSION_ID}`,
          },
        },
        (error, response, body) => {
          if (error) {
            console.error('error: ' + response.statusCode);
          }
        }
      ).pipe(res);
    }
  });

  app.listen(PORT, () => console.log(`Keen proxy listening on port ${PORT}`));
};

start();
