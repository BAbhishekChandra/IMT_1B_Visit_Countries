import './index.css'

const EachCountry = ({countryDetails, onClickVisitCountry}) => {
  const {id, name, isVisited} = countryDetails

  return (
    <li className="country-item-container">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button
          type="button"
          className="visit"
          onClick={() => onClickVisitCountry(id)}
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default EachCountry
