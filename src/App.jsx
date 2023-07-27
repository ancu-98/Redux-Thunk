import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useEffect } from 'react';
import { getCountriesLengThunk } from './store/slices/countries.slice';
import CountryCard from './components/CountryCard';

function App() {
  const countries = useSelector(state => state.countries)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesLengThunk())
  }, [dispatch])

  console.log(countries)

  return (
    <>
      <h1>Redux Thunk</h1>
      <div>
        {
          countries?.map(country => (
            <CountryCard
              key={country.name.common}
              country={country}
            />
          ))
        }
      </div>
    </>
  )
}

export default App
