const { Client } = require('@elastic/elasticsearch');

const client = new Client({
    node: process.env.ELASTICSEARCH_NODE, // Replace with your Elasticsearch instance URL
});

module.exports = client;