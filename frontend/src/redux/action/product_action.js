import actionTypes from "../actiontypes";
import commerce from '../../lib/commerce'

export const fetchAllCategories = () => async (dispatch, getState) => {
    const { data: categories } = await commerce.categories.list({ depth: 2, include: "breadcrumbs", });
    dispatch({ type: actionTypes.FETCH_ALL_CATEGORIES, payload: categories })
}