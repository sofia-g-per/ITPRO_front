import ContactUs from './components/ContactUs.jsx';
import TheHeader from './components/theHeader.jsx';
import TheFooter from './components/theFooter.jsx';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import React from 'react';

function App() {
  const portfolio = [
    {
      id: 1,
      title: 'AR',
      icon: '',
      projects: [
        {
          id: 1,
          title: 'Термопласт',
          description: '',
          platforms: [
            {
              id: 1,
              title: 'android',
              icon: '',
            }
          ],
          video: '',
          images: {
            1: {
              image: '',
              description: ''
            }
          }
        },
        {
          id: 2,
          title: 'Термопласт',
          description: '',
          platforms: [
            {
              id: 1,
              title: 'android',
              icon: '',
            }
          ],
          video: '',
          images: {
            1: {
              image: '',
              description: ''
            }
          }
        },
        {
          id: 3,
          title: 'Термопласт',
          description: '',
          platforms: [
            {
              id: 1,
              title: 'android',
              icon: '',
            }
          ],
          video: '',
          images: {
            1: {
              image: '',
              description: ''
            }
          }
        }
      ]
    },
    {
      id: 1,
      title: 'VR',
      icon: '',
      projects: [
        {
          id: 1,
          title: '',
          description: '',
          platforms: [
            {
              id: 1,
              title: 'android',
              icon: '',
            }
          ],
          video: '',
          images: {
            1: {
              image: '',
              description: ''
            }
          }
        }
      ]
    },
    {
      id: 1,
      title: '360',
      icon: '',
      projects: [
        {
          id: 1,
          title: '',
          description: '',
          platforms: [
            {
              id: 1,
              title: 'android',
              icon: '',
            }
          ],
          video: '',
          images: {
            1: {
              image: '',
              description: ''
            }
          }
        }
      ]
    }
  ];

  return (
    <React.Fragment>
      <TheHeader></TheHeader>
      <Router>
        <Routes>
          {/* <Route path="/" exact element={<AboutUs />}/> */}
          {/* <Route path="/portfolio" element={<Portfolio />}/> */}
          {/* <Route path="/project/:id" element={<Project />}/> */}
          <Route path="/contact-us" element={<ContactUs />}/>
        </Routes>
      </Router>
  <TheFooter></TheFooter>
</React.Fragment>
  );
}

export default App;
