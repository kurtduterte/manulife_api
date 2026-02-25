function generateId() {
  return Date.now();
}

function getPagingObject(query) {
  var page = parseInt(query.page) || 1;
  var limit = parseInt(query.limit) || 10;
  var offset = (page - 1) * limit;
  return { page: page, limit: limit, offset: offset };
}

module.exports = { generateId, getPagingObject };
