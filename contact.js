

const webhookUrl = 'https://discord.com/api/webhooks/1351828940607459371/yC-msH81RxpfD6GLiCtBw7oJ1VT_RjszCfHZ6hc1-_-ERUEuzYNsdaM4Zaps9xhDsYsk';

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
