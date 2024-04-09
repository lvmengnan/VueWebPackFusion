const path = require('path');
const { getReg } = require('packlv_utils');

module.exports.dirpath = (_path) =>  path.resolve(__dirname, _path);
module.exports.env = process.env.NODE_ENV;

module.exports.getReg = getReg;