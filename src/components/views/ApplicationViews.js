import { Route, Routes } from "react-router-dom"
import { EventForm } from "../Events/EventForm"
import { Events } from "../Events/Events"
import { Articles } from "../articles/Articles"
import { CreateArticle } from "../articles/CreateArticle"

import { MessageList } from "../messages/MessageList"



export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Nutshell</h1>
                    <div>Your one-stop dashboard for all your stuff</div>

                    
                </>
            }/>


                <Route path="/articles" element={ <></> } /> 
                <Route path="/events" element={ <Events /> } />
                <Route path="/event/create" element={ <EventForm /> } />
                <Route path="/messages" element={ <></> } />
                <Route path="/articles" element={ <Articles/> } />
                <Route path="/articles/create" element={ <CreateArticle/>} /> 
                <Route path="/events" element={ <></> } />
                <Route path="/messages" element={ <MessageList/>} />
                
                
            
        </Routes>
    )
}
