import NavBar from "./NavBar"
import {Outlet} from "react-router-dom"

function Home({adoptPet, increaseLikes}){
    return <>
        <NavBar/>
        <Outlet context={{adoptPet: adoptPet, increaseLikes: increaseLikes}}/>
    </>
}

export default Home