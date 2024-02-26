const { kafka } = require("./client");
const group = process.argv[2];

async function init() {
  const consumer = kafka.consumer({ groupId: group });

  await consumer.connect();
  await consumer.subscribe({ topic: process.env.TOPIC, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        group,
        topic,
        value: message.value.toString(),
        partition,
      });
    },
  });
}

init();
