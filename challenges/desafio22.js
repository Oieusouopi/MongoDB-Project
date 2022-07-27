db.produtos.updateMany(
    {
    
    },
    {
      $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] },
    },
    );

db.produtos.updateOne({ nome: "Big Mac" }, { $set: { "vendasPorDia.3": 60 } });

db.produtos.updateMany(
    { tags: { $elemMatch: { $eq: "bovino" } } },
    { $set: { "vendasPorDia.6": 120 } },
    );

db.produtos.find({}, { vendasPorDia: true, nome: true, _id: false });