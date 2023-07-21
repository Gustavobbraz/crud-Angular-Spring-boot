
const PROXY_CONFIG = [
{
  context: ['/api'],
  target: newFunction(),
  Secure: false,
  logLevel: 'debug'

}
];
module.exports = PROXY_CONFIG;
function newFunction() {
  return 'http://localhost:8080/';
}

