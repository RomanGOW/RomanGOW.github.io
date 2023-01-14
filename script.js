
const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
const apiKey = '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';

async function sendMessage() {
  const message = document.getElementById('message-input').value;
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: message,
      temperature: 0.5
    })
  });
  const json = await response.json();
  const responseText = json.choices[0].text;
  document.getElementById('response').innerText = responseText;
}
