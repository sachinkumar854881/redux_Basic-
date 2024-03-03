// create redux library
const MyRedux = require("redux")
 
// create data(state)
const initialData={
    noOfIcecream:20,
    noOfCakes:30
}
// create action 
function buyIcecream(){
    return{
        type : "BUY_ICECREAM"  //customer will tell buy icecream,whenever customer calling this function, automatically buyicecream will execute its return action.
    }
}
function buyCake(){
    return{
        type : "BUY_CAKES"
    }   
}
// create reducer(shopekeeper)  
function bakeryReducer (state = initialData,actionData)  
{
    if(actionData.type == "BUY_ICECREAM")
    {
        return{
            noOfIcecream: state.noOfIcecream - 5,
            noOfCakes: state.noOfCakes//ye same rahega 
        }
    }
    if(actionData.type == "BUY_CAKES")
    {
        return{
            noOfIcecream: state.noOfIcecream,//ye same rahega 
            noOfCakes: state.noOfCakes - 2
        }
    }
    return state
}

//  create reduxStore(bakeryshop)
const bakeryShop = MyRedux.createStore(bakeryReducer)

console.log("initial Data:",bakeryShop.getState())

bakeryShop.dispatch(buyIcecream())
bakeryShop.dispatch(buyCake())
 
console.log("final Data:",bakeryShop.getState())   