db.produtos.updateMany(
    {

    },
    {
      $pull: { ingredientes: "cebola" },
    },
    );

db.produtos.find({}, { _id: false, ingredientes: true, nome: true });