import Home from "../components/pages/Home";
import Following from "../components/pages/Following";
import Profile from "../components/pages/Profile";

const publicRoutes =[
    {path: '/', components: Home},
    {path: 'following', components: Following},
    {path:'profile',components: Profile}

]

const privateRoutes =[
    
]

export {publicRoutes,privateRoutes}