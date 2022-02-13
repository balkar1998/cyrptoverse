import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApis';
import { cryptoNewsApi } from '../services/cryptoNewsApis';

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
});