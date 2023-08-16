import React ,{useState} from "react"; 
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddEvent (){

    const notify = () => toast("Successfully event added");
    const notify2 = () => toast("This event already exists");

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [place, setPlace] = useState("");
    
    function sendData(e){
        e.preventDefault(); 
        
        const newEvent = {
            name,
            description,
            date,
            place
        }

        axios.post ("http://localhost:8070/event/add", newEvent).then(() => {
            notify();
        }).catch((err) => {
            notify2();
        });
    }

    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/AdminPanel">Zoo management system</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="/AdminPanel">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/addevent">Add an Event </a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="/viewevent"><span class="sr-only">(current)</span>View all Events</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="container" >
                <br></br>
                <h3> Add New Event </h3>
                <br></br>
                <form onSubmit={sendData}>

                    <div className="form-row">
                        <label for="inputName">Name of the Event</label>
                        <input type="Text" className="form-control" id="inputName" placeholder="Event Name"
                            onChange={(e) => setName(e.target.value)} />
                    </div><br></br>

                    <div className="form-row">
                        <label for="inputDescription">Description</label>
                        <input type="Text" className="form-control" id="inputDescription" placeholder="Description"
                            onChange={(e) => setDescription(e.target.value)} />
                    </div><br></br>

                    <div className="form-row">
                        <label for="inputDate">Date</label>
                        <input type="date" className="form-control" id="inputDate"
                            onChange={(e) => setDate(e.target.value)} />
                    </div><br></br>

                    <div className="form-row">
                        <label for="inputPlace">Place</label>
                        <input type="Text" className="form-control" id="inputPlace" placeholder="Place"
                            onChange={(e) =>                            setPlace(e.target.value)} />
                            </div><br></br>
        
                            <button onSubmit={sendData} type="submit" className="btn btn-primary">Add an event</button>
                        </form> 
                        <br></br><br></br>
                    </div>
                    <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                </div>
            )
        }
        export default AddEvent;
        //this is responsible for adding events to the web application
        
