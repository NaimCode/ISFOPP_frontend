import { useEffect,useState } from "react"
import {
  Route,
  useParams
} from "react-router-dom";
import { API } from "../env";
import ReactHtmlParser from "react-html-parser";
import { LoadingPage } from "../components/Loading";
import PageContent from "../components/PageContent";
const EventPage = () => {
    const [event, setevent] = useState(null)
     const {slug}=useParams();
    useEffect(() => {
    
     fetch(`${API}/notifications?slug=${slug}`)
      .then((response) => {
        if (response.ok) return response.json();
        else throw response;
      })
      .then((data) => {
        console.log(data);
        setevent(data[0]);
      });
    }, [])
    return (
        <div>
             {event==null? <LoadingPage/>:<PageContent content={event.contenu}/> }
        </div>
    )
}

export default EventPage
