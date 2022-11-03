import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import router from "./Routes/Routes/Routes";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
