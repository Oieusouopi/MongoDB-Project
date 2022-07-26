db.produtos.deleteMany({ curtidas: { $lt: 50 } });
db.produtos.find();