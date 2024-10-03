const { createAuction, getBidsForAuction, getAuctionById, placeBid} = require("../../src/auction");

test("Adds an auction object into the 'auctions' array", () => {
    const newAuction = { id: 1, name: 'Leilão de arte', startingPrice: 100 };

    createAuction(newAuction);
    
    expect(getAuctionById(1)).toEqual(expect.objectContaining({ ...newAuction }));
});

test("Place a new bid", () => {
    const newAuction = { id: 1, name: 'Leilão de arte', startingPrice: 100 };

    createAuction(newAuction);
    placeBid(1, 1, 110);

    expect(getBidsForAuction(1)[0]).toEqual(expect.objectContaining({ auctionId: 1, userId: 1, amount: 110 }));
});

test("Tries to place impossible bids", () => {
    const newAuction = { id: 1, name: 'Leilão de arte', startingPrice: 100 };

    createAuction(newAuction);

    expect(() => placeBid(1, 1, 99)).toThrow('O valor do lance deve ser maior do que o preço inicial.');
    expect(() => placeBid(2, 1, 110)).toThrow('Leilão não encontrado.');
});
