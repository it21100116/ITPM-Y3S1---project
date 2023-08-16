import React from 'react'
import './App.css'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { ToastProvider } from 'react-toast-notifications'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RequireAuth from './components/login/RequireAuth'

//samiru
import AdminPanel from './components/AdminPanel'
import AddQuiz from './components/AddQuiz'
import EditQuiz from './components/EditQuiz'
import ViewQuiz from './components/ViewQuiz'

import AttemptQuestion from './components/AttemptQuestion'
import Homepage from './components/Homepage'

//umanda
import AddAnimal from './components/AddAnimal'
import ViewAnimal from './components/ViewAnimal'
import EditAnimal from './components/EditAnimal'

import AddTreatment from './components/AddTreatment'
import ViewTreatment from './components/ViewTreatment'
import EditTreatment from './components/EditTreatment'
import TreatmentOneAnimal from './components/TreatmentOneAnimal'

//chathumini
import AddFood from './components/AddFood'
import ViewFood from './components/ViewFood'
import EditFood from './components/EditFood'

//sign in  //signup //user creation
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import UserProfile from './components/UserProfile'
import UnauthorizePage from './components/UnauthorizePage'

import AddFoodGiven from './components/AddFoodGiven'
import AddFoodBought from './components/AddFoodBought'

//vijini
import CustomerEvents from './components/CustomerEvents'

import ViewEvent from './components/ViewEvent'
import EditEvent from './components/EditEvent'
import AddEvent from './components/AddEvent'
import UnauthorizedPage from './components/UnauthorizePage'

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route>
            {/* samiru */}
            <Route exact path="/addquiz" element={<AddQuiz />} />
            <Route exact path="/editquiz/:id" element={<EditQuiz />} />
            <Route exact path="/viewquiz" element={<ViewQuiz />} />

            <Route
              exact
              path="/attemptquestion"
              element={<AttemptQuestion />}
            />
            <Route exact path="/" element={<Homepage />} />

            <Route element={<RequireAuth allowedRole={'customer'} />}>
              <Route path="/AdminPanel" element={<AdminPanel />} />
            </Route>

            {/* umanda */}
            <Route exact path="/addanimal" element={<AddAnimal />} />
            <Route exact path="/viewanimal" element={<ViewAnimal />} />
            <Route exact path="/editanimal/:id" element={<EditAnimal />} />

            <Route exact path="/addtreatment" element={<AddTreatment />} />
            <Route exact path="/viewtreatment" element={<ViewTreatment />} />
            <Route
              exact
              path="/edittreatment/:id"
              element={<EditTreatment />}
            />
            <Route
              exact
              path="/treatmentOneAnimal/:AnimalRegNum"
              element={<TreatmentOneAnimal />}
            />

            {/* Chathumini */}
            <Route exact path="/addfood" element={<AddFood />} />
            <Route exact path="/viewfood" element={<ViewFood />} />
            <Route exact path="/editfood/:id" element={<EditFood />} />

            <Route exact path="/addfoodgiven" element={<AddFoodGiven />} />
            <Route exact path="/addfoodbought" element={<AddFoodBought />} />

            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/userprofile/:id" element={<UserProfile />} />
            <Route exact path="/unauthorized" element={<UnauthorizePage />} />

            {/* vijini */}
            <Route exact path="/events" element={<CustomerEvents />} />

            <Route exact path="/addevent" element={<AddEvent />} />
            <Route exact path="/viewevent" element={<ViewEvent />} />
            <Route exact path="/editevent/:id" element={<EditEvent />} />
          </Route>
        </Routes>

        <ToastContainer position="top-center" autoClose={4000}></ToastContainer>
      </BrowserRouter>
    </ToastProvider>
  )
}

export default App
