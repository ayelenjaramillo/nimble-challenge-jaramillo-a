import '../css/job-item.css'; 

function JobItem({ job, repositoryUrl, setUrlRepo, handleSubmit }) {
  return (
    <div className='job-item-main-container'>
      <p>{job.title}</p>
      <div className='inter-box'>
        <input type="text" placeholder='Ingresar URL de repositorio' onChange={(e) => setUrlRepo(job.id, e.target.value)} />
        <button onClick={() => handleSubmit(job.id)}>Submit</button>
      </div>
    </div>
  )
}
export default JobItem
