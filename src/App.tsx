/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PublicLandingPage } from './components/PublicLandingPage';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { AdminGalleryManagement } from './components/AdminGalleryManagement';

export type ScreenType = 'landing' | 'login' | 'dashboard' | 'galeria';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('landing');
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Floating Screen Switcher Bar for instant preview of all 4 requested screens */}
      <div className="fixed top-3 right-4 z-50 print:hidden flex items-center gap-2">
        <div className="bg-surface-container-highest/90 backdrop-blur-md border border-outline-variant/60 shadow-lg rounded-full px-2 py-1.5 flex items-center gap-1 text-xs">
          <button
            onClick={() => setIsSwitcherOpen(!isSwitcherOpen)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-semibold hover:bg-surface-container-low transition-colors cursor-pointer"
            title="Alternar entre as telas do Studio Silva"
          >
            <span className="material-symbols-outlined text-[15px] text-primary">view_quilt</span>
            <span className="hidden sm:inline">Telas:</span>
            <span className="text-primary font-bold">
              {currentScreen === 'landing' && 'Site Oficial'}
              {currentScreen === 'login' && 'Login Admin'}
              {currentScreen === 'dashboard' && 'Dashboard Geral'}
              {currentScreen === 'galeria' && 'Gestão da Galeria'}
            </span>
            <span className="material-symbols-outlined text-[14px] text-secondary">
              {isSwitcherOpen ? 'expand_less' : 'expand_more'}
            </span>
          </button>

          {isSwitcherOpen && (
            <div className="flex items-center gap-1 animate-in fade-in duration-150 pl-1">
              <button
                onClick={() => {
                  setCurrentScreen('landing');
                  setIsSwitcherOpen(false);
                }}
                className={`px-2.5 py-1 rounded-full text-xs transition-colors cursor-pointer ${
                  currentScreen === 'landing'
                    ? 'bg-primary text-on-primary font-bold shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                }`}
              >
                1. Site Oficial
              </button>
              <button
                onClick={() => {
                  setCurrentScreen('login');
                  setIsSwitcherOpen(false);
                }}
                className={`px-2.5 py-1 rounded-full text-xs transition-colors cursor-pointer ${
                  currentScreen === 'login'
                    ? 'bg-primary text-on-primary font-bold shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                }`}
              >
                2. Login Admin
              </button>
              <button
                onClick={() => {
                  setCurrentScreen('dashboard');
                  setIsSwitcherOpen(false);
                }}
                className={`px-2.5 py-1 rounded-full text-xs transition-colors cursor-pointer ${
                  currentScreen === 'dashboard'
                    ? 'bg-primary text-on-primary font-bold shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                }`}
              >
                3. Dashboard Geral
              </button>
              <button
                onClick={() => {
                  setCurrentScreen('galeria');
                  setIsSwitcherOpen(false);
                }}
                className={`px-2.5 py-1 rounded-full text-xs transition-colors cursor-pointer ${
                  currentScreen === 'galeria'
                    ? 'bg-primary text-on-primary font-bold shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                }`}
              >
                4. Gestão da Galeria
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Screen Render */}
      {currentScreen === 'landing' && (
        <PublicLandingPage
          onNavigateToAdmin={() => setCurrentScreen('login')}
        />
      )}

      {currentScreen === 'login' && (
        <AdminLogin
          onLoginSuccess={() => setCurrentScreen('dashboard')}
          onBackToPublicSite={() => setCurrentScreen('landing')}
        />
      )}

      {currentScreen === 'dashboard' && (
        <AdminDashboard
          onNavigateToGallery={() => setCurrentScreen('galeria')}
          onNavigateToPublicSite={() => setCurrentScreen('landing')}
          onLogout={() => setCurrentScreen('login')}
        />
      )}

      {currentScreen === 'galeria' && (
        <AdminGalleryManagement
          onNavigateToDashboard={() => setCurrentScreen('dashboard')}
          onNavigateToPublicSite={() => setCurrentScreen('landing')}
          onLogout={() => setCurrentScreen('login')}
        />
      )}
    </div>
  );
}
