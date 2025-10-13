import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Package, LayoutDashboard, FileText, LogOut, Home, Settings, Grid3x3, Sparkles, Users, Briefcase } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const { t } = useTranslation();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const isAdminRoute = location.pathname.startsWith('/admin');
  const isLoginRoute = location.pathname === '/admin/login';

  return (
    <header className="bg-black text-white border-b-4 border-yellow-500">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate('/')}
          >
            <div className="bg-yellow-500 p-2 rounded-lg">
              <Package className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-2xl font-bold">
              <span className="text-yellow-500">GELBE</span>
              <span className="text-white">-UMZÜGE</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-4">
            {!isLoginRoute && (
              <>
                <Button
                  variant="ghost"
                  className="text-white hover:text-yellow-500 hover:bg-gray-900"
                  onClick={() => navigate('/')}
                >
                  <Home className="w-4 h-4 mr-2" />
                  {t('nav.home')}
                </Button>
                <Button
                  variant="ghost"
                  className="text-white hover:text-yellow-500 hover:bg-gray-900"
                  onClick={() => navigate('/offerte')}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  {t('nav.newOffer')}
                </Button>
                {user ? (
                  <>
                    <Button
                      variant="ghost"
                      className="text-white hover:text-yellow-500 hover:bg-gray-900"
                      onClick={() => navigate('/admin')}
                    >
                      <LayoutDashboard className="w-4 h-4 mr-2" />
                      {t('nav.dashboard')}
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-white hover:text-yellow-500 hover:bg-gray-900"
                      onClick={() => navigate('/admin/services')}
                    >
                      <Briefcase className="w-4 h-4 mr-2" />
                      Umzugsleistungen
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-white hover:text-yellow-500 hover:bg-gray-900"
                      onClick={() => navigate('/admin/categories')}
                    >
                      <Grid3x3 className="w-4 h-4 mr-2" />
                      Service-Kategorien
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-white hover:text-yellow-500 hover:bg-gray-900"
                      onClick={() => navigate('/admin/customers')}
                    >
                      <Users className="w-4 h-4 mr-2" />
                      {t('nav.customers')}
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-white hover:text-yellow-500 hover:bg-gray-900"
                      onClick={() => navigate('/admin/settings')}
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      {t('nav.settings')}
                    </Button>
                    <Button
                      variant="outline"
                      className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                      onClick={handleLogout}
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      {t('nav.logout')}
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="outline"
                    className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                    onClick={() => navigate('/admin/login')}
                  >
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    {t('nav.adminLogin')}
                  </Button>
                )}
                
                {/* Language Switcher */}
                <LanguageSwitcher />
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;