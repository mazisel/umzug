import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "./services/api";
import { Button } from "./components/ui/button";
import { FileText, Plus, Package, LayoutDashboard } from "lucide-react";
import { AuthProvider } from "./context/AuthContext";
import { SettingsProvider } from "./context/SettingsContext";
import { Toaster } from "./components/ui/toaster";
import Header from "./components/Header";
import OfferPage from "./pages/OfferPage";
import AdminLayout from "./layouts/AdminLayout";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminOffers from "./pages/AdminOffers";
import AdminOfferDetail from "./pages/AdminOfferDetail";
import AdminSettings from "./pages/AdminSettings";
import AdminCategories from "./pages/AdminCategories";
import AdminServices from "./pages/AdminServices";
import AdminCustomers from "./pages/AdminCustomers";
import { useTranslation } from 'react-i18next';
import './i18n/i18n'; // Initialize i18n

const API = `${BACKEND_URL}/api`;

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20 mt-12">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="bg-yellow-500 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform">
              <Package className="w-20 h-20 text-black" />
            </div>
          </div>
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            {t('home.title')}
          </h1>
          <p className="text-3xl text-gray-300 mb-4 font-light">{t('home.subtitle')}</p>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('home.description')}
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 transform hover:-translate-y-2">
            <div className="bg-yellow-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <FileText className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Professionelles Layout</h3>
            <p className="text-gray-400 leading-relaxed">
              Exakt formatierte Offerten nach Schweizer Standard mit allen erforderlichen Angaben, AGB und Unterschriftsbereich
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 transform hover:-translate-y-2">
            <div className="bg-yellow-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <Plus className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Einfache Erstellung</h3>
            <p className="text-gray-400 leading-relaxed">
              Intuitive Formulare für schnelle Offertenerstellung mit automatischer Preisberechnung und Speicherung
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 transform hover:-translate-y-2">
            <div className="bg-yellow-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <LayoutDashboard className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Admin Panel</h3>
            <p className="text-gray-400 leading-relaxed">
              Vollständiges Verwaltungspanel mit Dashboard, Statistiken, Suche und Bearbeitungsfunktionen
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center space-y-4">
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={() => navigate('/offerte')} 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-10 py-7 text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/50"
            >
              <Plus className="w-6 h-6 mr-2" />
              {t('home.createOffer')}
            </Button>
            <Button 
              onClick={() => navigate('/admin')} 
              size="lg" 
              variant="outline"
              className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold px-10 py-7 text-xl rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <LayoutDashboard className="w-6 h-6 mr-2" />
              {t('home.adminPanel')}
            </Button>
          </div>
          <p className="text-gray-500 text-sm">{t('home.demoLogin')}</p>
        </div>

        {/* Footer */}
        <div className="mt-32 text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
          <p className="text-lg font-semibold mb-2">Gelbe-Umzüge Offerten Generator</p>
          <p>Tel: 031 557 24 31 / 079 247 00 05 • info@gelbe-umzuege.ch</p>
          <p className="mt-4 text-gray-600">© 2024 Gelbe-Umzüge. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <SettingsProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/offerte" element={<><Header /><OfferPage /></>} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="offers" element={<AdminOffers />} />
                <Route path="offers/:id" element={<AdminOfferDetail />} />
                <Route path="customers" element={<AdminCustomers />} />
                <Route path="settings" element={<AdminSettings />} />
                <Route path="categories" element={<AdminCategories />} />
                <Route path="services" element={<AdminServices />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <Toaster />
        </div>
      </SettingsProvider>
    </AuthProvider>
  );
}

export default App;
