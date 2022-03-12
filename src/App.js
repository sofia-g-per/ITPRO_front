import ContactUs from './pages/ContactUs.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Project from './pages/Project.jsx';
import TheHeader from './components/theHeader.jsx';
import TheFooter from './components/theFooter.jsx';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import React from 'react';

function App() {
  const portfolio = [
    {
        "id": 1,
        "title": "VR",
        "projects": [
            {
                "id": 1,
                "title": "Термопластавтомат",
                "description": "Фрезерный и токарные работы – тренажер виртуальной реальности, разработанный для симуляции работы универсальном металлообрабатывающем оборудовании, а также для обучения и подготовки персонала.",
                "technology_id": 1,
                "video": "https://www.youtube.com/watch?v=TeZjuX3J3Eo",
                "images": [
                    {
                        "description": "В 1865 году компания Phelan & Collendar, производившая бильярдные шары, объявила о вознаграждении в 10000 долларов тому, кто найдёт новый материал, способный заменить слоновую кость. ",
                        "photo": "../img/portoflio/termoplast/photo1.png"
                    },
                    {
                        "description": "На основе патента на метод изготовления под давлением металлических отливок, полученного в 1870 году Джоном Смитом и Джессом Локом, братья Хайат разработали и в 1872 году запатентовали первую машину для литья пластмассы под давлением. ",
                        "photo": "../img/portoflio/termoplast/photo3.png"
                    }
                ],
                "platforms": [
                    {
                        "id": 2,
                        "title": "Android",
                        "icon": "../img/portfolio/platforms/android_logo.svg",
                        "pivot": {
                            "project_id": 1,
                            "platform_id": 2
                        }
                    },
                    {
                        "id": 1,
                        "title": "IOS",
                        "icon": "../img/portfolio/platforms/apple_logo.svg",
                        "pivot": {
                            "project_id": 1,
                            "platform_id": 1
                        }
                    }
                ],
                "project_icon": {
                    "id": 8,
                    "disk_name": "6221046d6fab8404129524.svg",
                    "file_name": "project_logo.svg",
                    "file_size": 2923,
                    "content_type": "image/svg",
                    "title": null,
                    "description": null,
                    "field": "project_icon",
                    "sort_order": 8,
                    "created_at": "2022-03-03 18:09:49",
                    "updated_at": "2022-03-03 18:14:07",
                    "path": "../img/portoflio/project_logo.svg",
                    "extension": "svg"
                }
            }
        ]
    },
    {
        "id": 2,
        "title": "AR",
        "projects": [
            {
                "id": 2,
                "title": "Лаборатория",
                "description": "Фрезерный и токарные работы – тренажер виртуальной реальности, разработанный для симуляции работы универсальном металлообрабатывающем оборудовании, а также для обучения и подготовки персонала.",
                "technology_id": 2,
                "video": "",
                "images": [
                    {
                        "description": "тописание",
                        "photo": "/photo1.png"
                    }
                ],
                "platforms": [
                    {
                        "id": 2,
                        "title": "Android",
                        "icon": "../img/portfolio/platforms/android_logo.svg",
                        "pivot": {
                            "project_id": 2,
                            "platform_id": 2
                        }
                    },
                    {
                        "id": 1,
                        "title": "IOS",
                        "icon": "../img/portfolio/platforms/apple_logo.svg",
                        "pivot": {
                            "project_id": 2,
                            "platform_id": 1
                        }
                    }
                ],
                "project_icon": {
                    "id": 9,
                    "disk_name": "622107a4ed23e037827989.svg",
                    "file_name": "project_logo.svg",
                    "file_size": 2923,
                    "content_type": "image/svg",
                    "title": null,
                    "description": null,
                    "field": "project_icon",
                    "sort_order": 9,
                    "created_at": "2022-03-03 18:23:32",
                    "updated_at": "2022-03-03 18:24:32",
                    "path": "../img/portoflio/project_logo.svg",
                    "extension": "svg"
                }
            }
        ]
    },
    {
        "id": 3,
        "title": "360",
        "projects": []
    }
];

  return (
    <React.Fragment>
      <TheHeader></TheHeader>
      <Router>
        <Routes>
          <Route path="/" exact element={<Project project={portfolio[0].projects[0]} />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          {/* <Route path="/project/:id" element={<Project />}/> */}
          <Route path="/contact-us" element={<ContactUs />}/>
        </Routes>
      </Router>
  <TheFooter></TheFooter>
</React.Fragment>
  );
}

export default App;
