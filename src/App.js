import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";

function App() {
  return (
    <div data-theme="cupcake" className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
