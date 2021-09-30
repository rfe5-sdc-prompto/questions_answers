const { questions } = require('../models/index');
const transformer = require('./transformer');

module.exports = {
  get: (req, res) => {
    let id = req.query.product_id;
    let count = req.query.count || 5;
    let page = req.query.page || 1;
    questions.readAll([id, count], (err, data) => {
      if (err) {
        console.error('Error: ', err);
        res.end();
      }
      res.json(transformer.questions(id, data));
    });
  },
  // post: (req, res) => {
  //   let dataArray = [name, description];
  //   questions.create(dataArray, (err, data) => {
  //     if (err) {
  //       console.error('Error: ', err);
  //       res.status(500).end();
  //     }
  //     questions.readOne(data.insertId, (err, data) => {
  //       if (err) {
  //         console.error('Error: ', err);
  //         res.status(500).end();
  //       }
  //       res.json(data);
  //     });
  //   });
  // },
  // put: (req, res) => {
  //   let dataArray = [id];
  //   questions.update(dataArray, (err, data) => {
  //     if (err) {
  //       console.error('Error: ', err);
  //       res.status(500).end();
  //     }
  //     res.json(data);
  //   });
  // },
  // delete: (req, res) => {
  //   let id = req.params.id;
  //   questions.delete(id, (err, data) => {
  //     if (err) {
  //       console.error('Error: ', err);
  //       res.status(500).end();
  //     }
  //     res.json(data);
  //   });
  // },
};
