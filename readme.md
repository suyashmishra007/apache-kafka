To start a Zookeeper container and expose port 2181, use the following Docker command:

```bash
docker run -p 2181:2181 zookeeper
```

To start a Kafka container with the required environment variables and port 9092 exposed, use the following Docker command:

```bash
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

To set up environment variables for `PRIVATE_IP`, `CLIENT_ID`, and `TOPIC`, use the following commands:

```bash
PRIVATE_IP="172.16.100.62"
CLIENT_ID="my-app"
TOPIC="COOK_UPDATES"
```

### Running Node Scripts

To run the provided Node.js scripts, follow these steps:

#### Step 1: Run `admin.js`

```bash
node admin.js
```

#### Step 2 Run `consumer.js`

```bash
node consumer.js group-1
```

#### Step 3 Run `producer.js`

```bash
node producer.js
```
