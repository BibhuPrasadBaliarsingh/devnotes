import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { BookmarksProvider } from './contexts/BookmarksContext';

export default function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <BookmarksProvider>
          <RouterProvider router={router} />
        </BookmarksProvider>
      </ProgressProvider>
    </ThemeProvider>
  );
}
