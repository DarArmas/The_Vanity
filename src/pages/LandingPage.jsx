import React from 'react'
import { ProductCard } from '../components/ProductCard'


export const LandingPage = () => {



  return (
    <div className="container text-center">
        <div className="row">
            <div className="col">
            <ProductCard imageUrl={"https://d3t32hsnjxo7q6.cloudfront.net/i/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png"}
                title={"Maybelline Face Studio Master Hi-Light Light Booster Bronzer"}
                brand={"Maybelline"}   
                price={"14.99"}
            />
            </div>
            <div className="col">
                <ProductCard imageUrl={"https://d3t32hsnjxo7q6.cloudfront.net/i/49d98e112e77d2a9a0c8fad28df89a1e_ra,w158,h184_pa,w158,h184.png"}
                title={"Maybelline The Nudes Eyeshadow Palette in The Blushed Nudes"}
                brand={"Maybelline"}   
                price={"17.99"}
            />
            </div>
            <div className="col">
                <ProductCard imageUrl={"https://d3t32hsnjxo7q6.cloudfront.net/i/bec95851afb08acd6f00242e97535f98_ra,w158,h184_pa,w158,h184.jpg"}
                title={"Essie Nail Colour"}
                brand={"Essie"}   
                price={"10.0"}
            />
            </div>
        </div>

        
        
        


    </div>

  )
}
