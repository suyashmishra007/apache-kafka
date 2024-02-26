const { Kafka } = require("kafkajs");
require("dotenv").config();

exports.kafka = new Kafka({
  clientId: "my-app",
  brokers: [`${process.env.PRIVATE_IP}:9092`],
});
