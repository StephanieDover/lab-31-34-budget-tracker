let intialState = {}
export default (state = intialState, action) => {
  let { type, payload } = action
  switch (type) {
  case 'CATEGORY_CREATE':
    return { ...state, [payload.id]: [] }
  case 'CATEGORY_DELETE':
    return { ...state, [payload.id]: undefined }
  case 'EXPENSE_CREATE':
    let { categoryId } = payload
    let categoryExpenses = state[categoryId]
    return { ...state, [categoryId]: [...categoryExpenses, payload] }

  default:
    return state
  }
}