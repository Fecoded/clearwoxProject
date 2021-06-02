import React, {useEffect, Fragment} from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {getStocks} from '../../../../redux/retail/retail.action'
import {SelectStocks} from '../../../../redux/retail/retail.selector'

const Stocks = ({getStocks, stocks}) => {
    useEffect(() => {
      getStocks()
    }, [getStocks])

    return(
      <Fragment>
        <div className="container-fluid">
      <div className="card">
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <h6 className="card-title font-size-22">Stocks</h6>
            </div>
        </div>

            <div className="card-body">
            {stocks.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead>
                                    <tr key={"header"}>
                                      {Object.keys(stocks[0]).map(stock => (
                                        <th>{stock}</th>
                                      ))}
                                    </tr>
                                </thead>
                            {stocks.map((stock) => (
                                        <tbody>
                                            <tr key={stock.ProductId} className="cursor-pointer">
                                            {Object.values(stock).map((item) => (
                                              <td>{item}</td>
                                            ))} 
                                    </tr>
                                </tbody>
                                ))}
                            </table>
                        </div>
            ) : (
                    <div className="d-flex justify-content-center mb-5">
                        No Stock Available
                    </div>
            )}
            </div>

            </div>
    </div>
    </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
  stocks: SelectStocks
})

export default connect(mapStateToProps, {getStocks})(Stocks)

