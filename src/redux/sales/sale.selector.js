import { createSelector } from 'reselect'

const selectSale = (state) =>  state.sales;

export const selectSaleItems = createSelector(
    [selectSale],
    (sale) => sale.sales
);


export const selectSaleItemCount = createSelector(
    [selectSaleItems],
    (saleItems) => 
         saleItems.reduce((accumulatedQty, saleItem) => 
            accumulatedQty + saleItem.price, 0
        )
)

export const selectSaleTotal = createSelector([selectSaleItems], (saleItems) =>
    saleItems.reduce(
    (accumulatedQuantity, saleItem) =>
      accumulatedQuantity + saleItem.qty * saleItem.price,
    0
  )
);