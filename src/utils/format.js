export function mappingData(data) {
  let list = []

  for (let i in data) {
    if (data.hasOwnProperty(i)) {
      list = [
        ...list,
        {
          symbol: i,
          name: mappingSymbol(i),
          rate: data[i],
        },
      ]
    }
  }

  return list
}

function mappingSymbol(symbol) {
  let result = ''
  switch (symbol) {
    case 'AUD':
      result = 'Australian Dollar'
      break
    case 'BGN':
      result = 'Bulgarian Lev'
      break
    case 'BRL':
      result = 'Brazilian Real'
      break
    case 'CAD':
      result = 'Canadian Dollar'
      break
    case 'CHF':
      result = 'Swiss Franc'
      break
    case 'CNY':
      result = 'Chinese Yuan Renminbi'
      break
    case 'CZK':
      result = 'Czech Koruna'
      break
    case 'DKK':
      result = 'Danish Krone'
      break
    case 'EUR':
      result = 'Euro'
      break
    case 'GBP':
      result = 'British Pound'
      break
    case 'HKD':
      result = 'Hong Kong Dollar'
      break
    case 'HRK':
      result = 'Croatian Kuna'
      break
    case 'HUF':
      result = 'Hungarian Forint'
      break
    case 'IDR':
      result = 'Indonesian Rupiah'
      break
    case 'ILS':
      result = 'Israeli New Shekel'
      break
    case 'INR':
      result = 'Indian Rupee'
      break
    case 'ISK':
      result = 'Icelandic Krona'
      break
    case 'JPY':
      result = 'Japanese Yen'
      break
    case 'KRW':
      result = 'South Korean Won'
      break
    case 'MXN':
      result = 'Mexican Peso'
      break
    case 'MYR':
      result = 'Malaysian Ringgit'
      break
    case 'NOK':
      result = 'Norwegian Krone'
      break
    case 'NZD':
      result = 'New Zealand Dollar'
      break
    case 'PHP':
      result = 'Philippine Peso'
      break
    case 'PLN':
      result = 'Polish Zloty'
      break
    case 'RON':
      result = 'Romanian Leu'
      break
    case 'RUB':
      result = 'Russian Robble'
      break
    case 'SEK':
      result = 'Swedish Krona'
      break
    case 'SGD':
      result = 'Singapore Dollar'
      break
    case 'THB':
      result = 'Thai Baht'
      break
    case 'TRY':
      result = 'Turkish Lira'
      break
    case 'USD':
      result = 'US Dollar'
      break
    case 'ZAR':
      result = 'South African Rand'
      break
    default:
      result = ''
      break
  }

  return result
}

export function numberOnly(value) {
  return value
    .toString()
    .replace(/[^0-9.]/g, '')
    .replace(/(\..*)\./g, '$1')
}

export function formatMoney(value) {
  let begin = parseInt(value)
    .toString()
    .replace(/\D/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  let end = value.toString().substring(value.indexOf('.'), value.length)

  let result = begin.toString() + end
  return result
}
