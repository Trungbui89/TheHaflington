import { createStore, combineReducers } from "redux"
import { News } from './news'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            news: News
        })
    )

return store
}
