import { useEffect, useState } from "react"
import api from "../../services/api"
import './styles.css'

export default function RepositoryItem(){
    const [repos, setRepos] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(()=>{
      async function loadRepos(){
          const result = await api.get('users/joycekell/repos');
          console.log(result);
          setRepos(result.data);
          setIsLoaded(true);
      }
      loadRepos();
    },[])

    return(
        <>
        {isLoaded && <div className="container">
          {repos.map((repo)=>(
          <li className="lista" key={repo.id}><a href={repo.svn_url} target="_blank"> {repo.name}</a></li>
        ))}
          </div>}
        </>
    )
}