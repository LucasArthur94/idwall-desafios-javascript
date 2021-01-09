/*
 * Paginação
 */

/* ENUNCIADO
 *
 *  Você deve escrever uma função de paginação de listas que receba o número da página e o número de itens por página como parâmetros
 *  e retorne no seguinte formato:
 * 
 * 
 *  {
        currentPage: 1,
        perPage: 10,
        total: 20,
        totalPages: 2,
        data: [
            {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur (...)"
            },
            [...]
        ]
    }
 */

const paginate = (posts, pageNumber = 1, itemsPerPage = 10) => {
  if (typeof posts === 'string') throw new Error('Expect array and got string')

  const totalPages = Math.ceil(posts.length / itemsPerPage)

  const firstIndex = itemsPerPage * (pageNumber - 1)

  const dataSubset = posts.slice(firstIndex, firstIndex + itemsPerPage)

  return {
    currentPage: pageNumber,
    perPage: itemsPerPage,
    total: posts.length,
    totalPages,
    data: dataSubset,
  }
}

module.exports = paginate
