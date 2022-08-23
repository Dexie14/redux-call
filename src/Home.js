import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addListing } from './Feature/slice';


const url = "https://covidnigeria.herokuapp.com/api";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(url)
        .then((data) => data.json())
          .then((data) => {
            console.log(data);
          })

          dispatch(addListing())
        });
  

  return (
    <div>
        Consumption of API with Redux
    </div>
  )
}

export default Home