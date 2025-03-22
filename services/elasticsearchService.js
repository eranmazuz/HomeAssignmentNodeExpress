const client = require('../config/elasticsearchClient');

// Indexing a document
async function indexDocument(index, document) {
    await client.index({
        index,
        body: document,
    });
}

// Searching for documents
async function searchDocuments(index, query) {
    const { body } = await client.search({
        index,
        body: query,
    });
    return body.hits.hits;
}

module.exports = {
    indexDocument,
    searchDocuments,
};