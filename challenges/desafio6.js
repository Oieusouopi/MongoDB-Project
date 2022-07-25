db.produtos.find(
    { $and: [
      { curtidas: { $gt: 10 } },
      { curtidas: { $lt: 100 } },
    ] },
    { curtidas: true,
      _id: false,
      nome: true,
    },
);