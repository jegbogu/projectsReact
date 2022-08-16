import { useState } from "react";


 
const ProductCard = () => {
    const[openModal,setOpenModal] = useState('false')
    const[products] = useState(
        [
            {
        productName:"Toyota Camry",
        ProductDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur aperiam, repudiandae amet saepe cumque ducimus corporis esse fuga voluptas ea autem perferendis ad beatae voluptatem ipsa officia iusto mollitia nobis! Reiciendis quaerat aliquid totam laborum, eius voluptate qui amet, suscipit quod doloribus sint esse blanditiis dolores praesentium excepturi. Hic suscipit quisquam sunt voluptatibus",
        productImage:"Toyota Camry.jpg",
        id:0,
        close:"close",
        open:"open"
       
    },
    {
        productName:"SUV",
        ProductDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur aperiam, repudiandae amet saepe cumque ducimus corporis esse fuga voluptas ea autem perferendis ad beatae voluptatem ipsa officia iusto mollitia nobis! Reiciendis quaerat aliquid totam laborum, eius voluptate qui amet, suscipit quod doloribus sint esse blanditiis dolores praesentium excepturi. Hic suscipit quisquam sunt voluptatibus",
        productImage:"ger-cars_comp-1910_best-lux_RR-2007.jpg",
        id:1,
        close:"close",
        open:"open"
       
    },
    {
        productName:"Benz",
        ProductDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur aperiam, repudiandae amet saepe cumque ducimus corporis esse fuga voluptas ea autem perferendis ad beatae voluptatem ipsa officia iusto mollitia nobis! Reiciendis quaerat aliquid totam laborum, eius voluptate qui amet, suscipit quod doloribus sint esse blanditiis dolores praesentium excepturi. Hic suscipit quisquam sunt voluptatibus",
        productImage:"GClass.jpg",
        id:2,
        close:"close",
        open:"open"
    }
]
    )
    const open =(index)=>{
        setOpenModal(index)
         
       
    
    }

    
    
   
    const closeModal = ()=>{
        setOpenModal("open")
        // console.log(id)
    }
    return ( 
        <div className="container-fluid" style={{display:"flex"}}>
            {products.map((product,index)=>(

            <div className="container" style={{width:"30%",border:"solid 2px gray",padding:"20px"}} >
            <div className= {openModal===index?'open':'close'}  >
            <button onClick={()=>closeModal(index)} key={index} >Close</button>
            <h3>{product.productName}</h3>
            <p>{product.ProductDescription}</p>
            <p>{product.id}</p>
            </div>

            <img src={product.productImage} alt="cars" style={{width:"100%"}}/>
            <button onClick={()=>open(index)} key={index} >Product Details</button>

            </div>


            ))}
            
            
    
        </div>
        
     );
}
 
export default ProductCard;