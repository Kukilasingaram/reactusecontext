import { createContext, useContext, useState } from "react"


const shopctx = createContext(null)
export default function Productcard(){
    //const Price =549
    const stock =94
    const [cartcount,setcartcount]=useState(0)
    const [totalstock , setTotalstock] =useState(0)
    //const [totalcost , setTotalcost] =useState(0)
    

    
    return(
        <div>
            <shopctx.Provider
            value={{
                cartcount,
                setcartcount,
                //Price,
                //totalcost,
                setTotalstock,
                stock,
                totalstock
            }}
            
            >
            <Product/>
            <Card/>

            </shopctx.Provider>
            

        </div>
    )
}

function Product(){
    const { stock,cartcount , setcartcount ,  setTotalstock } = useContext(shopctx);
    return(
        <div className="prod-card">
            <img src="data:image/jpeg;base64,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"/>

            <div>
                <h2>iPhone 9</h2>
                <p>DiscountPercentage: 12.96</p>
                <p>Stock : 94</p>
                <p>Brand :Apple</p>
                <p>Category : Smartphones</p>

                
                
            </div>
            <div className="card-action">
                <button 
                onClick={()=> setcartcount(cartcount + 1)}
                
                >+</button>
                <p>{cartcount}</p>
                
                <button
                onClick={()=> setcartcount(cartcount - 1)}
                >-</button>
                <p>stock {stock}</p>
                
            </div>
            <button
            onClick={()=>setTotalstock(stock-cartcount)}
            >Checkout</button>
            
        </div>
    )
}

function Card(){
    const {totalcost,cartcount , setcartcount ,totalstock} = useContext(shopctx);
    return(
        <div className="prod-card">
            <h3>Items in Cart</h3>
            <div className="card-action">
                <button
                onClick={()=> setcartcount(cartcount + 1)}>+</button>
                <p>{cartcount}</p>
                <button 
                onClick={()=> setcartcount(cartcount - 1)}>-</button>
            </div>
            <h3>Total : {totalstock}</h3>

           
            <button>Buy</button>


        </div>
    )
}
