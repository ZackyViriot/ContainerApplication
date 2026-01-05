import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { LandingPage } from './pages/LandingPage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { DumpsterPickUpPage } from './pages/DumpsterPickUpPage';
import { DumpsterRentalsPage } from './pages/DumpsterRentalsPage';
import { DumpsterSizesPage } from './pages/DumpsterSizesPage';
import { ConcreteWashoutsPage } from './pages/ConcreteWashoutsPage';
import { ConcreteBreakoutPage } from './pages/ConcreteBreakoutPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { ContactPage } from './pages/ContactPage';
import { QuotePage } from './pages/QuotePage';
import { QuoteSummaryPage } from './pages/QuoteSummaryPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useScrollToTop } from './hooks/useScrollToTop';

const ScrollToTop: React.FC = () => {
  useScrollToTop();
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/dumpster-pickup" element={<DumpsterPickUpPage />} />
          <Route path="/dumpster-rentals" element={<DumpsterRentalsPage />} />
          <Route path="/dumpster-sizes" element={<DumpsterSizesPage />} />
          <Route path="/concrete-washouts" element={<ConcreteWashoutsPage />} />
          <Route path="/concrete-breakout" element={<ConcreteBreakoutPage />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/quote/summary" element={<QuoteSummaryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
