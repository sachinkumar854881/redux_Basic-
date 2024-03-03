const Redux = require("redux")

const initialData = {
    noOfMobile:5
}
function buyMobile(){
    return{
        type:"BUY_MOBILE"
    }    
}

function myReducer(state = initialData,action)
{
    if(action.type == "BUY_MOBILE"){
        return{
            noOfMobile:state.noOfMobile - 1
        }
    }
    return state
}

const mobileShop = Redux.createStore(myReducer)

console.log("initial Data:",mobileShop.getState())

mobileShop.dispatch(buyMobile())

console.log("final Data:",mobileShop.getState())