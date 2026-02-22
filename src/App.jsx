import { useEffect, useState } from "react"
import CandidateInfo from "./components/CandidateInfo"
import JobItem from "./components/Job-item";

const baseUrl = "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net";

function App() {
  const [jobs, setJobs] = useState([]);
  const [candidate, setCandidate] = useState(null);
  const [repositoryUrl, setRepositoryUrl] = useState({});

  function setUrlRepo(jobId, value) {
    setRepositoryUrl((prev) => ({
      ...prev,
      [jobId]: value,
    }))
    console.log(repositoryUrl)
  }

  async function handleSubmit(jobId) {
    const jobRepoUrl = repositoryUrl[jobId]

    if (!jobRepoUrl) {
      alert("Por favor, ingresa tu repositorio Github")
      return
    }

    const body = {
      uuid: candidate.uuid,
      jobId: jobId,
      applicationId: candidate.applicationId,
      candidateId: candidate.candidateId,
      repoUrl: jobRepoUrl,
    }

    try {
      const response = await fetch(
        `${baseUrl}/api/candidate/apply-to-job`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      )

      const data = await response.json()
      console.log("Respuesta del POST:", data)

    } catch (error) {
      console.error("Error:", error)
    }
  }

  useEffect(() => {
    const email = "ayelenjaramillotw@gmail.com";

    fetch(`${baseUrl}/api/jobs/get-list`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Jobs:", data)
        setJobs(data)
      })
    fetch(`${baseUrl}/api/candidate/get-by-email?email=${email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCandidate(data)
      })
  }, [])

  return (
    <div>
      <CandidateInfo candidate={candidate} />
      <h1>Puestos disponibles para aplicar</h1>

      {jobs.map((job) => (
        <JobItem
          key={job.id}
          job={job}
          repositoryUrl={repositoryUrl[job.id]}
          setUrlRepo={setUrlRepo}
          handleSubmit={handleSubmit} />
      ))}
    </div>
  )
}

export default App
