import { configureStore,combineReducers } from '@reduxjs/toolkit'

import storage from "redux-persist/lib/storage"
import {
   persistReducer 
} from 'redux-persist';
import FavouriteReducer from '../reducers/FavouriteReducer';
import HomeReducer from '../reducers/HomeReducer';

import {encryptTransform} from "redux-persist-transform-encrypt"
import QueOfSongs from '../reducers/QueOfSongs';

// const secretKey=process.env.REACT_APP_ENV_SECRET_KEY

const persistConfig ={
    key:"root",
  
    storage,
    transforms: [
      encryptTransform({
        secretKey: "secretKey"
      }),
    ],

  }

  const reducers= combineReducers({
   favourites:FavouriteReducer,
   home:HomeReducer,
   Que:QueOfSongs
  })

  const persistedReducer = persistReducer(persistConfig, reducers)

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
  
  })
  export default store