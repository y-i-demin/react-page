/**
 * Этот редьюсер необходим для формирования исходного состояния данного сегмента хранилища.
 * В случае его отсутствия и использования combineReducers redux будет генерировать ошибку
 * из-за невозможности связать сегмент хранилища с функцией-редьюсером
 * @reducer
 * @param {Array} state - текущее состояние
 * @param {Object} action - событие
 * @returns {Object} state
 */
export function goods(state = [], action = {}) {
    return state;
}
