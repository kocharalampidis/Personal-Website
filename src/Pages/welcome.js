import React from 'react';

const h2String = " Welcome To My WorkStation"
const h3String = " The Place Where I implement High-End Technologies"

const quote = <a href="https://www.investopedia.com/terms/k/kaizen.asp" target="_blank" rel="noopener noreferrer">
"Always Be A Kaizen"
</a>


function welcome(){
    return (
        
        <>
            <div class="py-10 border border-black">
              <div class="border border-blue-600 container mx-auto px-6 text-center">
                <h2 class="place-self-center items-center text-4xl font-bold mb-2 text-white">
                  {h2String}    
                </h2>
                <h3 class="text-2xl mb-8 text-gray-200">
                        {h3String}
                </h3>
                <blockquote className=" p-4 italic text-white quote text-right">
                    <p className="mb-2">{quote}</p>
                      
                  </blockquote>
                
              </div>
            </div>  

                   
        </>    

    );
}

export default welcome;


{/* <a target="_blank" href="https://www.investopedia.com/terms/k/kaizen.asp">
                          -Always Be A Kaizen-
                    </a> */}