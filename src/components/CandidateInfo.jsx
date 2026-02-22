function CandidateInfo({ candidate }) {
    if (!candidate) return null
    return (
        <>
            <h2> Candidato a Aplicar:  </h2>
            <p>{`${candidate.firstName}  ${candidate.lastName}`}</p>
        </>
    )
}
export default CandidateInfo