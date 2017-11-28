const TelegramBot = require('node-telegram-bot-api');
var giphy = require('giphy-api')();
const messagesBeforeSendGif = 10


// replace the value below with the Telegram token you receive from @BotFather
const token = '';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/ [whatever]"
bot.onText(/\/(.+)/, (msg, match) => {


  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  giphy.search(resp, function (err, res) {

     bot.sendMessage(chatId, res.data[0].url);
  });
})



let counter = 0
bot.on('message', (msg) => {



  const chatId = msg.chat.id;

  let word = find_longest_word(msg.text)
  // send a message to the chat acknowledging receipt of their message
//  bot.sendMessage(chatId, 'Received your message');

  if (counter == messagesBeforeSendGif ) {

    giphy.search(word, function (err, res) {
    //  console.log(res.data[0].url);
     bot.sendMessage(chatId, res.data[0].url);
        });
        counter = 0
      }else {
        counter++
      }
});


function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    }
  }
  return result;
}
