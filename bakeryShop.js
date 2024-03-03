const Redux = require("redux")


const initialData = {
    noOfIcecream:20,
    noOfCakes:30,
    noOfChocolates:40
}


function buyIcecream(){
    return{
        type:"BUY_ICECREAM"
    }
}
function buyCakes(){
    return{
        type:"BUY_CAKES"
    }
}
function buyChocolates(){
    return{
        type:"BUY_CHOCOLATES"
    }    
}

function myReducer(state = initialData,action){
    if(action.type == "BUY_ICECREAM")
    {
        return{
            noOfIcecream:state.noOfIcecream - 5,
            noOfCakes:state.noOfCakes,
            noOfChocolates:state.noOfChocolates
        }
    }
    if(action.type == "BUY_CAKES")
    {
        return{
            noOfIcecream:state.noOfIcecream,
            noOfCakes:state.noOfCakes -2,
            noOfChocolates:state.noOfChocolates
        }
    }
    if(action.type == "BUY_CHOCOLATES")
    {
        return{
            noOfIcecream:state.noOfIcecream,
            noOfCakes:state.noOfCakes,
            noOfChocolates:state.noOfChocolates - 10
        }
    }
    return state
}



const backeryShop = Redux.createStore(myReducer)

console.log("inital Data:",backeryShop.getState())

backeryShop.dispatch(buyIcecream())
backeryShop.dispatch(buyCakes())
backeryShop.dispatch(buyChocolates())

console.log("final Data:",backeryShop.getState())
