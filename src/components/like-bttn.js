import React, {useState} from 'react';


function Like (){
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount (count + 1);
    }

    return(
        <div className="likes">
            <h2>{count}</h2>
            <button onClick={increment}> <span className="heart"> <i class="fas fa-heart fa-2x"></i> </span> 
            </button>   
        </div>   
    )

}



export default Like;