const LOAD_PRODUCTS_OF_CATEGORY = '[PRODUCTS_OF_CATEDORY_CONTAINER] LOAD_PRODUCTS_OF_CATEGORY'
const FILTER_PRODUCTS_BY_PRICE = '[PRODUCTS_OF_CATEDORY_CONTAINER] FILTER_PRODUCTS_BY_PRICE'
const FILTER_PRODUCTS_BY_DISCOUNT = '[PRODUCTS_CONTAINER] FILTER_PRODUCTS_BY_DISCOUNT'
const SORT_PRODUCTS = '[PRODUCTS_CONTAINER] SORT_PRODUCTS'

export const loadProductsOfCategoryAction = payload => ({ type: LOAD_PRODUCTS_OF_CATEGORY, payload })
export const filterProductsByPriceAction = payload => ({ type: FILTER_PRODUCTS_BY_PRICE, payload })
export const filterProductsByDiscountAction = payload => ({ type: FILTER_PRODUCTS_BY_DISCOUNT, payload })
export const sortProductsAction = payload => ({ type: SORT_PRODUCTS, payload })

const getRealPrice = (price, discountPrice) => discountPrice ? Math.round(discountPrice) : Math.round(price)
const calculateDiscountPercentage = (price, discountPrice) => discountPrice ? Math.round(100 - (discountPrice / (price / 100))) : 0


let defaultState = [];

export const productsOfCategoryReducer = (state = [], action) => {
    if (action.type === LOAD_PRODUCTS_OF_CATEGORY) {
        defaultState = action.payload.map(el => ({ ...el, visible: true, realPrice: getRealPrice(el.price, el.discont_price), discountPercentage: calculateDiscountPercentage(el.price, el.discont_price) }))
        return action.payload.map(el => ({ ...el, visible: true, realPrice: getRealPrice(el.price, el.discont_price), discountPercentage: calculateDiscountPercentage(el.price, el.discont_price) }))
    } else if (action.type === FILTER_PRODUCTS_BY_PRICE) {
        const { from, to } = action.payload;
        return state.map(el => {
            el.visible = el.price >= from && el.price <= to
            return el
        })
    } else if (action.type === FILTER_PRODUCTS_BY_DISCOUNT) {
        if (action.payload) {
            return state.filter(el => el.discont_price > 0)
        }
        else { return [...defaultState]; }
    } else if (action.type === SORT_PRODUCTS) {
        if (action.payload === 'title') {
            state.sort((a, b) => a['title'].localeCompare(b['title']))
        } else if (action.payload === 'titleReverse') {
            state.sort((a, b) => b['title'].localeCompare(a['title']))
        } else if (action.payload === 'priceAscending') {
            state.sort((a, b) => a['realPrice'] - b['realPrice'])
        } else if (action.payload === 'priceDescending') {
            state.sort((a, b) => b['realPrice'] - a['realPrice'])
        } else if (action.payload === 'default') {
            return [...defaultState];
        }

        return [...state]
    } else {
        return state
    }
}