/*
 * Regex
 */

/* ENUNCIADO
 *
 * Escreva uma função que busque no texto os valores de "height" e "width"
 * e retorne um objeto { "height": x, "width": y } contendo esses valores ignorando sua medida (px, %, em).
 *
 * Ex:1
 * [INPUT]
 * "<div style="height: 20px; width: 60px;">"
 * [OUTPUT]
 * {
 *   height: 20,
 *   width: 60
 * }
 *
 * Ex: 2
 * [INPUT] String
 * "<div style="background-color: red;"> <img style="width: 120px; height: 20%" /></div>"
 * [OUTPUT] Object
 * {
 *   width: 120,
 *   height: 20
 * }
 */

const MEASURE_REGEX = `[\\s]*:[\\s]*[0-9]+(px|%|em)`

const getMeasure = (htmlTemplate, rule) => {
  const regexRule = new RegExp(`${rule}${MEASURE_REGEX}`)

  const results = htmlTemplate.match(regexRule)

  const firstResult = results && results.length ? results[0] : ''

  if (!firstResult) return 0

  const [_dimension, value] = firstResult.split(':')

  return Number(value.match(/[0-9]+/)[0])
}

const extractSize = (htmlTemplate) => {
  return {
    width: getMeasure(htmlTemplate, 'width'),
    height: getMeasure(htmlTemplate, 'height'),
  }
}

module.exports = extractSize
