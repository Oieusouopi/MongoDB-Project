db.produtos.find(
    { $and: [
      { vendidos: { $ne: 50 } },
      { tags: { $exists: false } },
    ] },
    { vendidos: true,
      _id: false,
      nome: true,
    },
);