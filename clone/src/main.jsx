import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { YoutubeProvider } from './context/YouTubeContext.jsx'

createRoot(document.getElementById('root')).render(
  <YoutubeProvider>
    <App />
  </YoutubeProvider>,
)
