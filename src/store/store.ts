import {configureStore} from '@reduxjs/toolkit'
import {errorLoggingMiddleware} from '@app/store/middlewares/errorLogging.middleware'
import rootReducer from '@app/store/slices'

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(errorLoggingMiddleware),
})

console.log('store', store)
console.log('store.getState', store.getState()) // efficiently debug

export type RootState = ReturnType<typeof store.getState> // all type defined
export type AppDispatch = typeof store.dispatch
