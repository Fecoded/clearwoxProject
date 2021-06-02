export const addProductToOutlet = (stockItems, stockItemToAdd) => {
    const existingStockItem = stockItems.find(
      (stockItem) => stockItem.id === stockItemToAdd.id
    );
  
    if (existingStockItem) {
      return stockItems.map((stockItem) =>
        stockItem.id === stockItemToAdd.id
          ? { ...stockItem, quantity: stockItem.quantity + 1 }
          : stockItem
      );
    }
  
    return [...stockItems, { ...stockItemToAdd, quantity: 1 }];

}