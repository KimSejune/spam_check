const express = require('express');
const app = express();


app.get('/', (req, res) => {
  const content = 'spam spam https://goo.gl/nVLutc';
  const spamLinkDomains = 'www.filekok.com';
  const redirectionDepth = 3;
  const flag = isSpam(content, spamLinkDomains, redirectionDepth);
  console.log(flag);
  res.send(flag)
});

function isSpam(content, spamLinkDomains, redirectionDepth) {

  const url = content.split(' ');
  const spamRedirectUrl = ['bit.ly', 'tvtv24.com', 'www.filekok.com'];
  if(spamLinkDomains == spamRedirectUrl[redirectionDepth-1]) {
    return true;
  }
  return false;
}


app.listen('3000', () => {
  console.log('Server Start')
});