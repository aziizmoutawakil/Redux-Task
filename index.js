
const redux = require('redux')

const BUYCAKE = 'BUYCAKE'

// action
function ByCake () {
 return {
    type : BUYCAKE,
    info : 'first Action'
 }
}

// initial value
const initial = {
    NumberOfCakes : 10,
}

// reducer
const reducer = (state=initial, action) => {
    switch(action.type){
        case 'BUYCAKE' : {
            return{
                ...state,
                NumberOfCakes : state.NumberOfCakes -1
            }
        }
        default : return state
    }
}

// store
const store = redux.createStore(reducer)
console.log('initial state', store.getState());
const unSubscribe = store.subscribe(() =>
     console.log('updated state', store.getState())

)
store.dispatch(ByCake())
store.dispatch(ByCake())
store.dispatch(ByCake())
unSubscribe()

