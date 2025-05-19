const { nanoid } = require('nanoid');

const generateId = () => nanoid(16);

const getTimestamp = () => new Date().toISOString();

module.exports = { generateId, getTimestamp };
