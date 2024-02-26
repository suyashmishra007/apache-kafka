const { kafka } = require("./client");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  const producer = kafka.producer();
  await producer.connect();

  rl.setPrompt("> ");
  rl.prompt();

  rl.on("line", async (line) => {
    const [name, location] = line.split(" ");
    await producer.send({
      topic: process.env.TOPIC,
      messages: [
        {
          value: JSON.stringify({ name, location }),
          partition: location.toLowerCase() === "north" ? 1 : 0,
        },
      ],
    });
  }).on("close", async () => {
    await producer.disconnect();
  });
}

init();
