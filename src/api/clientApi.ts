import axios from 'axios'
import * as cheerio from 'cheerio'

export const fetchWorldsApi = async () => {
  try {
    const response = await axios.get('https://backend.jackhaynes.dev/proxy/')
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
    return dataObject
  } catch (error) {
    console.error('Error fetching', error)
  }
}
