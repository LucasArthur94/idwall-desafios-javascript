/*
 * Normalização de estruturas
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que realize a
 * normalização da estrutura representada pela variável input de
 * forma que o retorno seja compatível com a variável output
 *
 */

/*
 * [INPUT] Object
 * {
 *   "id": "6197b77e-3942-11ea-a137-2e728ce88125",
 *   "user": {
 *     "id": "6197ba94",
 *     "name": "Laura"
 *   },
 *   "reports": [
 *     {
 *       "id": "51ddf1a9",
 *       "result": {
 *         "document": "356.4325-10",
 *         "status": "em análise",
 *       }
 *     }
 *   ]
 * }
 *
 * [OUTPUT] Object
 *  {
 *   "results": {
 *     "6197b77e-3942-11ea-a137-2e728ce88125": {
 *       id: "6197b77e-3942-11ea-a137-2e728ce88125",
 *       user: "6197ba94",
 *       reports: ["51ddf1a9"]
 *     }
 *   },
 *   "users": {
 *     "6197ba94": { "id": "6197ba94", "name": "Laura" }
 *   },
 *   "reports": {
 *     "51ddf1a9": {
 *        "id": "51ddf1a9",
 *        "user": "6197ba94",
 *        "document": "356.4325-10",
 *        "status": "em análise",
 *      }
 *    }
 *  }
 */

// Typescript cairia bem aqui nesse challenge rs
const normalizeData = (unormalized) => {
  const resultId = unormalized.id
  const userId = unormalized.user.id
  const processedReports = unormalized.reports.reduce(
    (allReports, report) => ({
      ...allReports,
      ...{
        [report.id]: {
          id: report.id,
          user: userId,
          document: report.result.document,
          status: report.result.status,
        },
      },
    }),
    {},
  )

  return {
    results: {
      [resultId]: {
        id: resultId,
        user: userId,
        reports: Object.keys(processedReports),
      },
    },
    users: {
      [userId]: unormalized.user,
    },
    reports: processedReports,
  }
}

module.exports = normalizeData
