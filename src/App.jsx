import { Routes, Route } from "react-router-dom";
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Dashboard from '@/pages/Dashboard';
import Analytics from '@/pages/Analytics';
import Creatives from '@/pages/Creatives';
import Sidebar from "@/components/Sidebar";
import Profile from '@/pages/Profile';
import AddCreative from '@/pages/AddCreative';
import CreativeDetails from '@/pages/CreativeDetails';
import Advertisements from '@/pages/Advertisements';
import AddAdvertisement from '@/pages/AddAdvertisement';
import AdvertisementDetails from '@/pages/AdvertisementDetails';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="creatives" element={<Creatives />} />
        <Route path="creatives/new" element={<AddCreative />} />
        <Route path="creatives/:id" element={<CreativeDetails />} />
        <Route path="advertisements" element={<Advertisements />} />
        <Route path="advertisements/:id" element={<AdvertisementDetails />} />
        <Route path="advertisements/new" element={<AddAdvertisement />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App
