const helpers = {
  response: (res, result, status, err) => {
    const resultPrint = {}
    if (status != '200') {
      resultPrint.status = 'Failed'
    } else {
      resultPrint.status = 'Success'
    }
    resultPrint.status_code = status
    resultPrint.result = result
    resultPrint.err = err || null
    return res.status(resultPrint.status_code).json(resultPrint)
  }
}

module.exports = helpers
