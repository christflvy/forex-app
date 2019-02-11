import React from 'react'
import PropTypes from 'prop-types'
import { formatMoney } from '../../../utils/format'

const Currencies = props => {
  const {
    display,
    loading,
    initialCurrency,
    removeFromDisplay,
    initialValue,
  } = props
  return (
    <div className="currencies">
      {loading ? (
        <div className="loading">
          <i className="fa fa-spinner fa-spin fa-lg" />
        </div>
      ) : display.length > 0 ? (
        <ul className="currencies-list">
          {display.map((g, i) => {
            let value = parseFloat(initialValue) ? parseFloat(initialValue) : 0
            let total = (g.rate * value).toFixed(4)
            let rate = g.rate.toFixed(4)
            return (
              <li className="list" key={i}>
                <div className="list-content">
                  <div className="symbol">{g.symbol}</div>
                  <div className="total">{formatMoney(total)}</div>
                  <div className="desc">{`${g.symbol} - ${g.name}`}</div>
                  <div className="rate">{`1 ${initialCurrency} = ${
                    g.symbol
                  } ${formatMoney(rate)}`}</div>
                </div>
                <button
                  className="btn-remove"
                  onClick={() => removeFromDisplay(g)}
                >
                  (-)
                </button>
              </li>
            )
          })}
        </ul>
      ) : (
        <div className="nodata">
          No currency in the list. Please add a new one.
        </div>
      )}
    </div>
  )
}

Currencies.defaultProps = {
  display: [],
  loading: true,
  initialCurrency: '',
  initialValue: 10.0,
}

Currencies.propTypes = {
  loading: PropTypes.bool,
  initialCurrency: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  removeFromDisplay: PropTypes.func,
}

export default Currencies
