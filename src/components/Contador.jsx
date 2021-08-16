import {useState} from 'react';

function Contador (props) {

    const [count, setCount] = useState(0);

    function counter (event) {
        setCount(count + 1);         
    }

    return (
        <div>
            <p>
                {props.children}
                {count}                
            </p>
            <button onClick={counter}>Adicionar</button>
        </div>
    )
}

export default Contador;