import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Sidebar from '../components/layout/Sidebar';
import ScrollToTop from '../components/common/ScrollToTop';
import { getCourseById } from '../data';
import NotFound from '../pages/NotFound/NotFound';

export default function CourseLayout() {
  const { courseId, topicId } = useParams();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const course = getCourseById(courseId);

  if (!course) {
    return (
      <div className="flex min-h-screen flex-col bg-bg text-fg">
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <NotFound message={`We couldn't find a course called "${courseId}".`} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-bg text-fg">
      <ScrollToTop />
      <Header showSidebarToggle onOpenMobileSidebar={() => setMobileSidebarOpen(true)} />
      <div className="mx-auto flex w-full max-w-[1440px] flex-1">
        <Sidebar
          course={course}
          activeTopicId={topicId}
          mobileOpen={mobileSidebarOpen}
          onCloseMobile={() => setMobileSidebarOpen(false)}
        />
        <div className="min-w-0 flex-1">
          <Outlet context={{ course }} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
