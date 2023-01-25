import { CoffeeContext, useCoffeeContext } from "../context/CoffeeContext"
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'

const SelectedCoffeeBean = () => {
  console.log("Rendering...")
  
  // const [data, setData] = useState([]);
  // const { coffeeName } = useParams();

  const { coffeeBean } = useCoffeeContext();

  return (
    <div className="selected-coffee">
      <h2>
        { coffeeBean.name }
      </h2>
    </div>
  )
}

export default SelectedCoffeeBean;