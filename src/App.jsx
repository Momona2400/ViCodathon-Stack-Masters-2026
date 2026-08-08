import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import DayTaskPage from './pages/DayTaskPage';
import NotFoundPage from './pages/NotFoundPage';
import rawMockData from './data/mockData.json';

export default function App() {
  const [activePresetKey, setActivePresetKey] = useState('active');
  const [studentState, setStudentState] = useState(rawMockData);

  // Switch persona presets dynamically for edge-case evaluation
  const handleSelectPreset = (presetKey) => {
    setActivePresetKey(presetKey);
    const preset = rawMockData.personaPresets[presetKey];
    if (!preset) return;

    setStudentState((prev) => ({
      ...prev,
      student: {
        ...prev.student,
        name: preset.name,
        streak: preset.streak,
        currentDay: preset.currentDay,
        missedYesterday: preset.missedYesterday,
        completedDays: preset.zeroStreak ? [] : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].slice(0, preset.completedCount)
      },
      achievements: preset.emptyAchievements 
        ? [] 
        : rawMockData.achievements
    }));
  };

  // Submit proof handler
  const handleSubmitProof = (dayNum, proofData) => {
    setStudentState((prev) => {
      const existingCompleted = prev.student.completedDays || [];
      const updatedCompleted = existingCompleted.includes(dayNum)
        ? existingCompleted
        : [...existingCompleted, dayNum];

      return {
        ...prev,
        student: {
          ...prev.student,
          streak: prev.student.missedYesterday ? 1 : prev.student.streak + 1,
          missedYesterday: false,
          completedDays: updatedCompleted,
          submittedProofs: {
            ...prev.student.submittedProofs,
            [dayNum]: {
              ...proofData,
              submittedAt: new Date().toISOString()
            }
          }
        }
      };
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0b0f19] text-slate-100 selection:bg-orange-500 selection:text-white">
      
      {/* Sticky Mobile-First Navigation Header */}
      <Navbar streak={studentState.student.streak} />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/dashboard" 
            element={
              <DashboardPage 
                studentData={studentState}
                activePresetKey={activePresetKey}
                onSelectPreset={handleSelectPreset}
              />
            } 
          />
          <Route 
            path="/day/:dayId" 
            element={
              <DayTaskPage 
                day12Task={studentState.day12Task} 
                studentData={studentState}
                onSubmitProof={handleSubmitProof}
              />
            } 
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
