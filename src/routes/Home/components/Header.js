import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
  const { currency, value, onChangeValue } = props

  return (
    <div className="header">
      <div className="title">USD - United States Dollars</div>
      <div className="wrapper">
        <div className="initial-currency">{currency}</div>
        <input
          type="text"
          value={value}
          onChange={onChangeValue}
          className="initial-value"
        />
      </div>
    </div>
  )
}

Header.defaultProps = {
  currency: 'USD',
  value: '',
}

Header.propTypes = {
  currency: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChangeValue: PropTypes.func,
}

export default Header
