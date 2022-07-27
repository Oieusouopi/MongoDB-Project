db.produtos.updateMany(
    {
      nome: "Cheddar McMelt",
    },
    {
      $pop: { ingredientes: 1 },
    },
    );

db.produtos.find({}, { _id: false, ingredientes: true, nome: true });