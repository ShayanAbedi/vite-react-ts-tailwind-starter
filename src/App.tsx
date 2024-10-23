import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from '@/components/layouts/RootLayout'
import SettingsPage from '@/pages/SettingsPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<div>Dashboard Home</div>} />

          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
