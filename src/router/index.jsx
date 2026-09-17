import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import CourseLayout from '../layouts/CourseLayout';
import Home from '../pages/Home/Home';
import Learn from '../pages/Learn/Learn';
import NotesList from '../pages/Notes/NotesList';
import NoteDetail from '../pages/Notes/NoteDetail';
import Course from '../pages/Course/Course';
import Topic from '../pages/Topic/Topic';
import Search from '../pages/Search/Search';
import Bookmarks from '../pages/Bookmarks/Bookmarks';
import Progress from '../pages/Progress/Progress';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/NotFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'learn', element: <Learn /> },
      { path: 'notes', element: <NotesList /> },
      { path: 'notes/:slug', element: <NoteDetail /> },
      { path: 'pdf-notes', element: <NotesList /> },
      { path: 'search', element: <Search /> },
      { path: 'bookmarks', element: <Bookmarks /> },
      { path: 'progress', element: <Progress /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  {
    // Course/Topic pages use their own layout (with the course sidebar) instead of
    // MainLayout, so they are a sibling top-level route rather than nested inside it.
    path: 'learn/:courseId',
    element: <CourseLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Course /> },
      { path: ':topicId', element: <Topic /> },
    ],
  },
]);
