import TheHeader from './components/theHeader.jsx';
import TheFooter from './components/theFooter.jsx';
import Main from './components/main.jsx';

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
    <div className="App">
      <TheHeader></TheHeader>
      <Main></Main>
      <TheFooter></TheFooter>
      
    </div>
  );
}

export default App;
