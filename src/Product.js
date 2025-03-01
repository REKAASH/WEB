import React from 'react';
import pc from './OIP.jpeg';
import PC1 from './pc1.jpg';
import PC2 from './pc2.jpeg';
import Home from './Home';

const Product = () => {
  return (
    <div>
       <div className='Producte'>
         <div className='box'>
            <img id='a1' src={pc}></img>
              <center>
                <h5 id='e1'>PRODUCT : Xtreme GX1930</h5>
                <h4 id='r2'>PRICE : ₹ 00000</h4>
              </center>
              <button id='s1'>ADD</button> 
          </div>
       
          <div className='box'>
            <img id='a1' src={PC1}></img>
              <center>
                <h5 id='e1'>PRODUCT : IBUYPower 093A </h5>
                <h4 id='r1'>PRICE : ₹ 00000</h4>
              </center>
              <button id='s1'>ADD</button> 
          </div>
       
          <div className='box'>
            <img id='a1' src={PC2}></img>
               <center>
                  <h5 id='e1'>PRODUCT : Aqua GLC1802</h5>
                  <h4 id='r3' >PRICE : ₹ 00000</h4>
               </center>
               <button id='s1'>ADD</button> 
           </div> 
           
       
         </div>
             
             <div>
               <h2 id='t1'>ABOUT US</h2>
                <h4> 
                 <p id='y1'>Sure! Here's a paragraph for a product PC:
       
       The [Product Name] is a high-performance PC designed for both everyday users and professionals seeking speed and reliability. Powered by the latest [Processor Brand] processor and [Graphics Card], it offers unmatched performance, whether you're gaming, creating content, or working on complex tasks. With its sleek, modern design and compact form, the [Product Name] seamlessly blends into any workspace. It features [RAM size] of RAM and [Storage size] of storage, ensuring smooth multitasking and ample space for your files and applications. Equipped with fast USB ports, high-definition audio, and advanced connectivity options like Wi-Fi 6 and Bluetooth 5.0, this PC offers the versatility and speed you need to stay productive. The [Product Name] also comes with a state-of-the-art cooling system, keeping your system running efficiently and quietly during intense use. Whether you're looking to upgrade your workstation or dive into the latest games, the [Product Name] is designed to meet your needs and exceed expectations. Experience the next level of computing with [Product Name], where performance meets style and reliability. 
                </p>
                </h4>
               
             </div>
    </div>
  )
}

export default Product;