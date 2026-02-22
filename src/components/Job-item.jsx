function JobItem({ job, repositoryUrl, setUrlRepo, handleSubmit }) {
  return (
    <div>
      <p>{job.title}</p>
      <input type="text" onChange={(e) => setUrlRepo(job.id, e.target.value)} />
      <button onClick={() => handleSubmit(job.id)}>Submit</button>
    </div>
  )
}
export default JobItem