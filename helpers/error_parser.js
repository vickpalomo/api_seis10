const errorParser = ({ data }) => {
  if (data) {
    if (data.data) {
      data = data.data
    }

    const sanitized = []
    Object.keys(data).forEach((key) => {
      const err = []
      data[key].forEach(({ keyword }) => {
        err.push(keyword)
      })

      const error = {
        field: key,
        error: err
      }
      sanitized.push(error)
    })
    return { status: 400, message: sanitized }
  } else return { status: 500, message: 'Internal Server Error' }
}

module.exports = errorParser
