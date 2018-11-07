import * as functions from 'firebase-functions';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import getFacts from './src/facts';
import express from 'express';
import fs from 'fs';
const app = express();

//const index = fs.readFileSync(__dirname + '/index.html', 'utf-8');


app.get('**', (req, res) => {
  getFacts().then((data) => {
    const html = renderToString(<App facts={data} />);
    //const finalHtml = index.replace('<!--APP-->', html);
    res.set('Cache-Control', 'public, max-age=600,s-maxage=1200');
    res.send(html);
  });
});

export let ssrapp = functions.https.onRequest(app); 