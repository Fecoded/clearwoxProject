import { createSelector } from 'reselect'

const selectRetail = (state) =>  state.retail;

export const selectLoading = createSelector(
    [selectRetail],
    (retail) => retail.loading
);
export const selectProductItems = createSelector(
    [selectRetail],
    (retail) => retail.productItems
);
export const selectServiceItems = createSelector(
    [selectRetail],
    (retail) => retail.serviceItems
);
export const selectCategoryItems = createSelector(
    [selectRetail],
    (retail) => retail.categoryItems
);
export const selectManufacturerItems = createSelector(
    [selectRetail],
    (retail) => retail.manufacturerItems
);
export const selectDepartmentItems = createSelector(
    [selectRetail],
    (retail) => retail.departmentItems
);
export const selectCustomerItems = createSelector(
    [selectRetail],
    (retail) => retail.customers
);
export const selectStaff = createSelector(
    [selectRetail],
    (retail) => retail.staffs
);
export const selectSupplierItems = createSelector(
    [selectRetail],
    (retail) => retail.suppliers
);
export const selectStatusCode = createSelector(
    [selectRetail],
    (retail) => retail.statusCode
);
export const selectCurrentItems = createSelector(
    [selectRetail],
    (retail) => retail.current
);

export const selectFilteredItems = createSelector(
    [selectRetail],
    (retail) => retail.filtered
)
export const selectStore = createSelector(
    [selectRetail],
    (retail) => retail.stores
)
export const selectOutlet = createSelector(
    [selectRetail],
    (retail) => retail.outlets
)
export const selectInventory = createSelector(
    [selectRetail],
    (retail) => retail.inventories
)
export const selectStockAdjust = createSelector(
    [selectRetail],
    (retail) => retail.stockAdjusts
)
export const selectAdjustmentType = createSelector(
    [selectRetail],
    (retail) => retail.adjustmentTypes
)
export const selectPurchaseItems = createSelector(
    [selectRetail],
    (retail) => retail.purchaseItems
)
export const selectStoreProductItems = createSelector(
    [selectRetail],
    (retail) => retail.storeProducts
)
export const selectExpenseItems = createSelector(
    [selectRetail],
    (retail) => retail.expenseItems
)
export const selectExpenses = createSelector(
    [selectRetail],
    (retail) => retail.expenses
)
export const selectQualifications = createSelector(
    [selectRetail],
    (retail) => retail.qualifications
)
export const selectDesignation = createSelector(
    [selectRetail],
    (retail) => retail.designations
)
export const SelectStocks = createSelector(
    [selectRetail],
    (retail) => retail.stocks
)
export const SelectSales = createSelector(
    [selectRetail],
    (retail) => retail.sales
)
