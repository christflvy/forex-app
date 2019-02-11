import React, { Fragment } from 'react'
import ajax from './ajax'
import Header from './components/Header'
import { mappingData, numberOnly } from '../../utils/format'
import Currencies from './components/Currencies'
import AddCurrency from './components/AddCurrency'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initialCurrency: 'USD',
      initialValue: '10.0',
      list: [],
      display: [],
      loading: true,
      displayAddMenu: false,
      selectedMenu: {},
    }
    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount() {
    this.fetchData()
  }

  async fetchData() {
    const { initialCurrency } = this.state

    let response = await ajax.getRate(initialCurrency)
    let list = mappingData(response.rates)

    let display = list.filter(
      g =>
        g.symbol === 'IDR' ||
        g.symbol === 'EUR' ||
        g.symbol === 'GBP' ||
        g.symbol === 'SGD',
    )

    list = list.filter(
      g =>
        g.symbol !== 'IDR' &&
        g.symbol !== 'EUR' &&
        g.symbol !== 'GBP' &&
        g.symbol !== 'SGD',
    )

    let selectedMenu = list[0]
    this.setState({ list, display, selectedMenu, loading: false })
  }

  onChangeInitialValue = e => {
    let initialValue = e.target.value
    initialValue = numberOnly(initialValue)
    this.setState({ initialValue })
  }

  addToDisplay = currency => {
    let display = [...this.state.display, currency]
    let list = this.state.list.filter(g => g.symbol !== currency.symbol)
    let selectedMenu = list[0]
    this.setState({ list, display, selectedMenu, displayAddMenu: false })
  }

  removeFromDisplay = currency => {
    let list = [...this.state.list, currency]
    let display = this.state.display.filter(g => g.symbol !== currency.symbol)
    this.setState({ list, display })
  }

  showAddMenu = () => {
    this.setState({ displayAddMenu: true })
  }

  onChangeAddMenu = e => {
    let selectedMenu = this.state.list.find(g => g.symbol === e.target.value)
    this.setState({ selectedMenu })
  }

  render() {
    const {
      initialCurrency,
      initialValue,
      list,
      display,
      loading,
      displayAddMenu,
      selectedMenu,
    } = this.state

    return (
      <Fragment>
        <Header
          currency={initialCurrency}
          value={initialValue}
          onChangeValue={this.onChangeInitialValue}
        />
        <Currencies
          display={display}
          loading={loading}
          initialCurrency={initialCurrency}
          initialValue={initialValue}
          removeFromDisplay={this.removeFromDisplay}
        />
        <AddCurrency
          displayAddMenu={displayAddMenu}
          selectedMenu={selectedMenu}
          list={list}
          display={display}
          showAddMenu={this.showAddMenu}
          addToDisplay={this.addToDisplay}
          onChangeAddMenu={this.onChangeAddMenu}
          loading={loading}
        />
      </Fragment>
    )
  }
}

export default Home
