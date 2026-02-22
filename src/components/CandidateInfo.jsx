import "../css/candidate-info.css"

function CandidateInfo({ candidate }) {
  if (!candidate) return null
  return (
    <div className="candidate-main-container">
      <h2> Candidato a Aplicar: </h2>
      <h1>{`${candidate.firstName}  ${candidate.lastName}`}</h1>
    </div>
  )
}
export default CandidateInfo
