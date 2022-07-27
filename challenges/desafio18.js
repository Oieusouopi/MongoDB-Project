db.produtos.updateMany(
    {
      $or: [
        { nome: "Big Mac" },
        { nome: "Quarteirão com Queijo" },
      ],
    },
    { $addToSet: {
        ingredientes: "bacon",
    } },
    );

db.produtos.find({}, { _id: false, ingredientes: true, nome: true });