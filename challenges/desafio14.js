db.produtos.find(
    { ingredientes: {
        $elemMatch: {
            $eq: "picles",
        } } },
        {
        _id: false,
        valoresNutricionais: { $slice: 3 },
        ingredientes: true,
        nome: true,
        },
    );