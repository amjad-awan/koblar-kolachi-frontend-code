import "./App.css";
import {
  AuthProvider,
  CategoriesProvider,
  ProductsProvider,
  OrdersProvider,
} from "./context/index.js";
import AppRoutes from "./routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        // toastOptions={{
        //   // Define default options
        //   className: '',
        //   duration: 5000,
        //   style: {
        //     background: '#363636',
        //     color: '#fff',
        //   },

        //   // Default options for specific types
        //   success: {
        //     duration: 3000,
        //     theme: {
        //       primary: 'green',
        //       secondary: 'black',
        //     },
        //   },
        // }}
      />
      <AuthProvider>
        <OrdersProvider>
          <CategoriesProvider>
            <ProductsProvider>
              <AppRoutes />
            </ProductsProvider>
          </CategoriesProvider>
        </OrdersProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
