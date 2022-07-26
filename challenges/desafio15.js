db.produtos.updateMany(
    {}, 
    {
      $addSet: {
        avaliacao: 0,
      },
    },
);

db.produtos.updateMany({ tags: { $regex: { } } }, { $addSet: { avalicao: 5 } });

db.produtos.updateMany({ tags: { $regex: { } } }, { $addSet: { avalicao: 3 } });

db.produtos.find({}, { _id: false, nome: true, avalicao: true });