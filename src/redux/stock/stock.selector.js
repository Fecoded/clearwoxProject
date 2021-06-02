import { createSelector } from 'reselect'

const selectStock = (state) =>  state.stock;

export const selectStockItems = createSelector(
    [selectStock],
    (stock) => stock.stocks
);

export const selectStockName = createSelector(
    [selectStock],
    (stock) => stock.name
);

export const selectStockItemCount = createSelector(
    [selectStockItems],
    (stockItems) => 
        stockItems.reduce((accumulatedQty, stockItem ) => 
            accumulatedQty + stockItem.gross, 0
        )
)