import axios from 'axios'
import * as cheerio from 'cheerio'

export const fetchWorlds = async () => {
  try {
    const response = await axios.get('http://localhost:5000/proxy')

    const $ = cheerio.load(response.data)

    const dataObject = {} as any
    $('table tr').each((index, element) => {
      const columns = $(element).find('td')
      const key =
        Number(
          $(columns[0])
            .text()
            .trim()
            .replace('Old School ', '')
            .replace('OldSchool ', '')
        ) + 300
      const value = Number($(columns[1]).text().trim().replace(' players', ''))
      dataObject[key] = value
    })
    delete dataObject[300]
    console.log(dataObject)
    return dataObject
  } catch (error) {
    console.error('Error fetching', error)
  }
}
