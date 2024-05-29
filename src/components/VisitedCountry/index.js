import './index.css'

const VisitedCountry = props => {
  const {countryDetails, onClickRemoveVisitCountry} = props
  const {id, name, imageUrl} = countryDetails
  // console.log(id, name, imageUrl, isVisited)

  const onClickRemoveButton = () => {
    onClickRemoveVisitCountry(id)
  }

  return (
    <li className="visited-country-item">
      <img className="country-image" src={imageUrl} alt="thumbnail" />
      <div className="name-remove-container">
        <p className="country-name">{name}</p>
        <button
          className="remove-button"
          type="button"
          onClick={onClickRemoveButton}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountry
