import JobCard from "./Job_Card";
import './JobStyles.css'
interface Iprops{
  Title: string
}
export default function JobSection(props: Iprops) {
  const {Title} = props
  return (
    <div className="Job-Container">
      <h1 className="title">{Title}</h1>
      <JobCard />
    </div>
  )
}
