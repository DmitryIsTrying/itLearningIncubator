async function getRecord(url, recordId) {
  try {
    const response = await fetch(url)
    const data = await response.json()

    if (!data.records || !Array.isArray(data.records)) {
      throw new Error(`Неожиданный формат данных: ${url}`)
    }

    const record = data.records.find((record) => record.id === recordId)

    if (!record) {
      throw new Error(`Запись не найдена, id: ${recordId}`)
    }

    return {
      getTitle: () => record.title,
      getSummary: () => record.summary,
      getDetails: () => record.details,
    }
  } catch (error) {
    throw error
  }
}

module.exports = getRecord
