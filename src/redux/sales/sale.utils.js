export const addSaleProduct = (saleItems, saleItemToAdd) => {
    const existingSaleItem = saleItems.find(
      (saleItem) => saleItem.id === saleItemToAdd.id
    );
  
    if (existingSaleItem) {
      return saleItems.map((saleItem) =>
        saleItem.id === saleItemToAdd.id && saleItem.qty < saleItemToAdd.quantity ?
           { ...saleItem, qty: saleItem.qty + 1 }
          : saleItem
      );
    }
  
    return [...saleItems, { ...saleItemToAdd, qty: 1 }];

}


export const replaceSaleProduct = (saleItems, saleItemToAdd) => { 
     let existingSaleItem = saleItems.find(
      (saleItem) => saleItem.id === saleItemToAdd.id
    )
  
  if(existingSaleItem) {
    return saleItems.map((saleItem) => saleItem.id === saleItemToAdd.id ? { ...saleItemToAdd } : saleItem)
  }

  return [...saleItems, {...saleItemToAdd}] 
}

export const addItemToCart = (saleItems, saleItemToAdd) => {
  const existingSaleItem = saleItems.find(
    (saleItem) => saleItem.id === saleItemToAdd.id
  );

  if (existingSaleItem) {
    return saleItems.map((saleItem) =>
      saleItem.id === saleItemToAdd.id && saleItem.qty < saleItemToAdd.quantity
        ? { ...saleItem, qty: saleItem.qty + 1 }
        : saleItem
    );
  }

  return [...saleItems, { ...saleItemToAdd, qty: 1 }];
};

export const removeItemFromCart = (saleItems, saleItemToRemove) => {
  const existingSaleItem = saleItems.find(
    (saleItem) => saleItem.id === saleItemToRemove.id
  );

  if (existingSaleItem.qty === 1) {
    return saleItems.filter((saleItem) => saleItem.id !== saleItemToRemove.id);
  }

  return saleItems.map((saleItem) =>
      saleItem.id === saleItemToRemove.id
      ? { ...saleItem, qty: saleItem.qty - 1 }
      : saleItem
  );
};