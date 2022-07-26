db.produtos.updateMany(
    {},
    { $set: {
        criadoPor: "Ronald McDonald",
    } },
    );
db.produtos.find({}, { criadoPor: true, nome: true, _id: false });