/*eslint-disable*/
import axios from 'axios';

const yodaKey = 'hBdvLGPRO0mshmloVQYJ2IJduD37p1qEwK8jsnB3EPYnGvWH9Z';
const config = {headers: {"X-Mashape-Key": yodaKey, "Accept": "text/plain"}};

function processInputToTranslate(sentence) {
  const arrayOfStrings = sentence.split(' ');
  const joinArrayWithPlus = arrayOfStrings.join('+');
  return joinArrayWithPlus;
}

const yodaHelper = {
  requestYodaTranslation: sentence => {
    const processedSentence = processInputToTranslate(sentence);
    return axios.get('https://yoda.p.mashape.com/yoda?sentence=' + processedSentence, config)
      .then(response => {
        return response;
      })
      .catch(err => {
        console.warn('err in requestYodaTranslation', err);
      });
  }
};

module.exports = yodaHelper;
