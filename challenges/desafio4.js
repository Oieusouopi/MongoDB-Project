db.produtos.find(
  { $and: [
    { vendidos: { $gt: 50 } },
    { vendidos: { $lt: 100 } },
  ] },
  { vendidos: true,
    _id: false,
    nome: true,
  },
  ).sort({ vendidos: 1 });