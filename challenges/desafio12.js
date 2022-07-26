db.produtos.updateMany(
    { nome:
        { $ne: "McChicken" },
    },
    { $addToSet: {
        ingredientes: "ketchup",
    } },
    );
db.produtos.find({}, { ingredientes: true, nome: true, _id: false });