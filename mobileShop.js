const Redux = require("redux")


const initialData = {
    noOfMobiles:10
}

function buyMobile(){
    return{
        type:"BUY_MOBILE"
    }
}

function myReducer(state = initialData , action){
    if(action.type == "BUY_MOBILE"){
        return{
            noOfMobiles:state.noOfMobiles - 3
        }
    }
    return state
}

const mobileShop = Redux.createStore(myReducer)

console.log("initial Mobiles:",mobileShop.getState())

mobileShop.dispatch(buyMobile())

console.log("remaining Mobiles:",mobileShop.getState())