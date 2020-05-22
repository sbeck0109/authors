const { Author } = require("../models/author.model");

module.exports.list = (request, response) => {
  Author.find({})
    .then((authors) => {
      response.json(authors);
    })
    .catch((err) => {
      response.status(400).json(err);
    });
};

module.exports.create = (request, response) => {
  const { name } = request.body;
  Author.create({
    name,
  })

    .then((author) => {
      response.json(author);
    })
    .catch((err) => {
      response.status(400).json(err);
    });
};

module.exports.detail = (request, response) => {
  Author.findById(request.params.id)
    .then((author) => {
      response.json(author);
    })
    .catch((err) => {
      response.status(400).json(err);
    });
};

module.exports.update = (request, response) => {
  Author.findByIdAndUpdate(request.params.id, request.body)
    .then((updatedAuthor) => {
      response.json(updatedAuthor);
    })
    .catch((err) => {
      response.status(400).json(err);
    });
};

module.exports.delete = (request, response) => {
  Author.findByIdAndDelete(request.params.id)
    .then((author) => {
      response.json(author);
    })
    .catch((err) => {
      response.status(400).json(err);
    });
};
