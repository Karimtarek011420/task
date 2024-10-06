import Search from './Search'
import './Home-Styles.css';
import JobSection from './Job-Cars/Job_Section';
export default function Home() {
    return (
        <div className='Home-Container'>
            <Search />
            <JobSection Title="Jobs (20)" />
        </div>
    )
}
