import React from 'react'
import PropTypes from 'prop-types'

const AddCurrency = props => {
  const {
    list,
    displayAddMenu,
    showAddMenu,
    addToDisplay,
    selectedMenu,
    onChangeAddMenu,
    loading,
  } = props
  return (
    <div className="currencies-add">
      {displayAddMenu ? (
        <div className="menu-wrapper">
          <select
            onChange={onChangeAddMenu}
            value={selectedMenu.symbol}
            className="menu"
          >
            {list.map((g, i) => (
              <option key={i} value={g.symbol}>
                {g.symbol}
              </option>
            ))}
          </select>
          <button
            className="btn-submit"
            onClick={() => addToDisplay(selectedMenu)}
          >
            Submit
          </button>
        </div>
      ) : loading ? null : (
        <button className="btn-add" onClick={showAddMenu}>
          (+) Add More Currencies
        </button>
      )}
    </div>
  )
}

AddCurrency.defaultProps = {
  list: [],
  displayAddMenu: false,
  selectedMenu: '',
  loading: false,
}

AddCurrency.propTypes = {
  list: PropTypes.array,
  displayAddMenu: PropTypes.bool,
  addToDisplay: PropTypes.func,
  showAddMenu: PropTypes.func,
  selectedMenu: PropTypes.object,
  onChangeAddMenu: PropTypes.func,
  loading: PropTypes.bool,
}

export default AddCurrency
