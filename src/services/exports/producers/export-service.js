import amqp from 'amqplib';

const ExportService = {
    sendMessage: async (queue, message) => {
        const connection = await amqp.connect({
            protocol: 'amqp', // atau 'amqps' untuk SSL
            hostname: process.env.RABBITMQ_HOST || 'localhost',
            port: process.env.RABBITMQ_PORT || 5672,
            username: process.env.RABBITMQ_USER || 'guest',
            password: process.env.RABBITMQ_PASSWORD || 'guest'
        });

        const channel = await connection.createChannel();
        await channel.assertQueue('export:notes', {
            durable: true,
        });

        await channel.sendToQueue(queue, Buffer.from(message));

        setTimeout(() => {
            connection.close();
        }, 1000);
    },
};

export default ExportService;