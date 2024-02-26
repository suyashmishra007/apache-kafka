const { kafka } = require("./client");
async function init() {
  try {
    const admin = kafka.admin();
    await admin.connect();
    console.log("Admin Connected");
    await admin.createTopics({
      topics: [
        {
          topic: process.env.TOPIC,
          numPartitions: 2,
        },
      ],
    });
    console.log(`Topic Created Success ${process.env.TOPIC}`);
    await admin.disconnect();
    console.log("Admin Disconnected");
  } catch (error) {
    console.log(error.message);
  }
}

init();
