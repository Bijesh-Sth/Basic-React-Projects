//Redux toolkit is a collection of utilities that allows us to write redux logic in a much easier way,
//it is the official recommended approach for writing redux logic.
//It is a wrapper around redux, it is not a replacement of redux.
//It is a collection of utilities that allows us to write redux logic in a much easier way.

//Redux Toolkit is preferred over redux as:
//1. It is easier to understand
//2. It is easier to write
//3. Configuring Redux store is easier
//4. Redux needs a lot of boilerplate code, Redux Toolkit reduces the boilerplate code
//5. Redux needs a lot of packages, Redux Toolkit reduces the number of packages

//Hook in context API vs Redux ToolKit
//for eg: const ProdReducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD_PRODUCT':
//             return {
//                 ...state,
//                 products: [...state.products, action.payload]
//             };
//}}
// const ProductSlice = createSlice({
//     name: 'products',
//     initialState: {
//         products: []
//     },
//     reducers: {
//         addProduct: (state, action) => {
//             state.products.push(action.payload);
//         }
//     }
// })

//basic setting up redux toolkit
//1. npm install @reduxjs/toolkit
//2. create a folder called store
//3. create a file called index.js
//4. import { configureStore } from '@reduxjs/toolkit';
//5. import { ProductSlice } from './Slices/ProductSlice';
//6. export default configureStore({
//     reducer: {
//         products: ProductSlice.reducer
//     }
// })
//7. create a folder called Slices
//8. create a file called ProductSlice.js
//9. import { createSlice } from '@reduxjs/toolkit';
//10. export const ProductSlice = createSlice({
//     name: 'products',
//     initialState: {
//         products: []
//     },
//     reducers: {
//         addProduct: (state, action) => {
//             state.products.push(action.payload);
//         }
//     }
// })
//11. import { useDispatch } from 'react-redux';
//12. import { ProductSlice } from '../store/Slices/ProductSlice';
//13. const dispatch = useDispatch();
//14. const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(ProductSlice.actions.addProduct({

//     }))
// }
//15. import { useSelector } from 'react-redux';
//16. import { ProductSlice } from '../store/Slices/ProductSlice';
//17. const products = useSelector((state) => state.products.products);
//18. import { ProductSlice } from '../store/Slices/ProductSlice';
//19. const dispatch = useDispatch();
//20. const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(ProductSlice.actions.addProduct({
//         name: name,
//         price: price,
//         description: description,
//         image: image
//     }))
// }

//important hooks in redux toolkit
//1. useDispatch()
// useDispatch() is a hook that returns a reference to the dispatch function from the Redux store.
//2. useSelector()
// useSelector() is a hook that takes a selector function as an argument.
// The selector is called with the entire Redux store state as its argument.
// for eg: const products = useSelector((state) => state.products.products);
//3. createSlice()
// createSlice() is a function that accepts an initial state, an object full of reducer functions,
// and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
// for eg: export const ProductSlice = createSlice({
//     name: 'products',
//     initialState: {
//         products: []
//     },
//     reducers: {
//         addProduct: (state, action) => {
//             state.products.push(action.payload);
//         }
//     }
// })
//4. configureStore()
// configureStore() is a function that accepts a single configuration object argument with three fields:
// reducer - A function that returns the root reducer for the store
// middleware - An array of Redux middleware to install
// devTools - If true, enable Redux DevTools integration
// for eg: export default configureStore({
//     reducer: {
//         products: ProductSlice.reducer
//     }
// })
//5. createAction()
// createAction() is a function that accepts an action type string and returns an action creator function that,
// when called, returns an action object with a type property equal to the passed argument.
// for eg: export const addProduct = createAction('ADD_PRODUCT');

//dependencies of redux toolkit

//1. react-redux
//2. @reduxjs/toolkit






