

const webhookUrl = 'https://discord.com/api/webhooks/1205380902004203520/_7eQFGkvT9GmlhP317cHlgQjKfLRHYYilE7I399466Cc-7gq7fMtxeTCw2bdQ-DMf3le';

function sendToDis(webhookUrl) {
  window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "content": `Someone is on your website from ${navigator.appVersion.slice(5, 33)}
          `,
      })
    })
    console.log('sent');
  });
}

sendToDis(webhookUrl);
