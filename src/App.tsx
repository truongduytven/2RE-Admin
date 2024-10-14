import { Route, Routes } from 'react-router-dom'
import RouteLayout from './components/global/RootLayout'
import ManagerProtectedRoute from './auth/ManagerProtectedRoute'
import { Suspense, useEffect, useState } from 'react'
import Order from './pages/Order'
import Loader from './components/Loading/Loader'
import ProtectedRoute from './auth/ProtectedRoute'
import SignInForm from './components/global/SignInForm'
import ProductDetails from './pages/ProductDetail'
import Loading from './components/Loading/Loading'
import TableOrder from './pages/TableOrder'
import DashboardManager from './pages/DashboardManager'
import TableProducts from './pages/TableProducts'
import ProductUpdate from './pages/ProductUpdate'
import AddProduct from './pages/AddProduct'
function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return loading ? (
    <div><Loading/></div>
  ) : (
    <Routes>
      <Route element={<RouteLayout />}>
        <Route
          path='/home/manager'
          element={
            <ManagerProtectedRoute>
              <Suspense fallback={<Loader />}>
                <DashboardManager />
              </Suspense>
            </ManagerProtectedRoute>
          }
        />
        <Route
          path='/orders'
          element={
            <ManagerProtectedRoute>
              <Suspense fallback={<Loader />}>
                <TableOrder />
              </Suspense>
            </ManagerProtectedRoute>
          }
        />
        <Route
          path='/products'
          element={
            <ManagerProtectedRoute>
              <Suspense fallback={<Loader />}>
                <TableProducts />
              </Suspense>
            </ManagerProtectedRoute>
          }
        />
        <Route
          path='/products/:id'
          element={
            <ManagerProtectedRoute>
              <Suspense fallback={<Loader />}>
                <ProductUpdate />
              </Suspense>
            </ManagerProtectedRoute>
          }
        />
        <Route
          path='/products/add'
          element={
            <ManagerProtectedRoute>
              <Suspense fallback={<Loader />}>
                <AddProduct />
              </Suspense>
            </ManagerProtectedRoute>
          }
        />
      </Route>
      <Route
        path='/'
        element={
          <ProtectedRoute>
            <SignInForm />
          </ProtectedRoute>
        }
      />
      <Route
        path='/productDetails/:id'
        element={
          <ManagerProtectedRoute>
            <ProductDetails />
          </ManagerProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App
