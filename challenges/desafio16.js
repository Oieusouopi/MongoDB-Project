db.produtos.updateOne(
    { nome: 
        {
          $eq: "Big Mac", 
        } },
    { $currentDate: { ultimaModificacao: { $type: "timestamp" } } },
    );

db.produtos.find({ ultimaModificacao: { $exists: true } }, { nome: true, _id: false });
