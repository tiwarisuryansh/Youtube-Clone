import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Head from "./components/Head";
import Body from "./components/Body";
import Maincontainer from "./components/Maincontainer";
import WatchPage from "./components/WatchPage";

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children :[
     {
      path: "/",
      element:<Maincontainer/>,
     },
     {
      path:"watch",
      element:<WatchPage/>,
     },
    ],
  },
]);

function  App()  {
  return (
   
    <div>
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
   
  );
};

export default App;
