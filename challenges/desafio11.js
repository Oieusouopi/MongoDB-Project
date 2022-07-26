db.produtos.find(
    { $nor: [
        { nome: "Big Mac" },
        { nome: "McChicken" }] },
    {
    _id: false,
    nome: true,
    vendidos: true,
    curtidas: true },
    );