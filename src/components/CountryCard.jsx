
const CountryCard = ({country}) => {
  return (
    <article>
      <img src={country.flags.svg} alt="" />
      <h2>{country.name}</h2>
    </article>
  )
}

export default CountryCard