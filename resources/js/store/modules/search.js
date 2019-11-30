import * as types from '../mutation-types'

// state
export const state = {
    dates: '',
    filter: {
        query: '',
        available: true
    }
}

// getters
export const getters = {
    dates: state => state.dates,
}

// mutations
export const mutations = {
    [types.SET_QUERY](state, query) {
        state.filter.query = query;
    },

    [types.SET_AVALAIBLE](state) {
        state.filter.available = !state.filter.available;
    },
    [types.SET_DATES](state) {
        state.dates = dates
    }
}


// actions
export const actions = {
    filteredDates(state) {
        let dates = state.dates.filter(date => date.available === state.filter.available);
        if (state.filter.query.length > 2) {
            return dates.filter(date => date.title.toLowerCase().includes(state.filter.query.toLowerCase()));
        }
        return dates;
    },
    setDates({ commit }) {
        commit(types.SET_DATES)
    }
}
