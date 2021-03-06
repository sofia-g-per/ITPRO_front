import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Project from './pages/Project.jsx';

import TheHeader from './components/theHeader.jsx';
import TheFooter from './components/theFooter.jsx';
import NavBar from './components/NavBar.jsx';
import Popup from './components/UI/Popup';
import TestRequestPopup from './components/Popups/TestRequestPopup.jsx';
import ContactsPopup from './components/Popups/ContactsPopup.jsx';
import FormSubmittedPopup from './components/Popups/FormSubmittedPopup.jsx';


function App() {
    let portfolioOLD = [
        {
            "id": 1,
            "title": "VR",
            "icon": "/images/portfolio/technologies/vr_logo.svg",
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
                            "photo": "/images/portfolio/termoplast/photo1.png"
                        },
                        {
                            "description": "На основе патента на метод изготовления под давлением металлических отливок, полученного в 1870 году Джоном Смитом и Джессом Локом, братья Хайат разработали и в 1872 году запатентовали первую машину для литья пластмассы под давлением. ",
                            "photo": "/images/portfolio/termoplast/photo3.png"
                        }
                    ],
                    "platforms": [
                        {
                            "id": 2,
                            "title": "Android",
                            "icon": "/images/portfolio/platforms/android_logo.svg",
                            "pivot": {
                                "project_id": 1,
                                "platform_id": 2
                            }
                        },
                        {
                            "id": 1,
                            "title": "IOS",
                            "icon": "/images/portfolio/platforms/apple_logo.svg",
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
                        "path": "/images/portoflio/project_logo.svg",
                        "extension": "svg"
                    }
                },
                {
                    "id": 2,
                    "title": "Лаборатория",
                    "description": "Фрезерный и токарные работы – тренажер виртуальной реальности, разработанный для симуляции работы универсальном металлообрабатывающем оборудовании, а также для обучения и подготовки персонала.",
                    "technology_id": 2,
                    "video": "",
                    "images": [
                        {
                            "description": " Описание",
                            "photo": "/images/portfolio/lab/photo1.png"
                        }
                    ],
                    "platforms": [
                        {
                            "id": 2,
                            "title": "Android",
                            "icon": "/images/portfolio/platforms/android_logo.svg",
                            "pivot": {
                                "project_id": 2,
                                "platform_id": 2
                            }
                        },
                        {
                            "id": 1,
                            "title": "IOS",
                            "icon": "/images/portfolio/platforms/apple_logo.svg",
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
                        "path": "/images/portoflio/project_logo.svg",
                        "extension": "svg"
                    }
                }
            ]
        },
        {
            "id": 2,
            "title": "AR",
            "icon": "/images/portfolio/technologies/ar_logo.svg",
            "projects": [

            ]
        },
        {
            "id": 3,
            "title": "360",
            "icon": "/images/portfolio/technologies/360_logo.svg",
            "projects": []
        }
    ];
    const [portfolio, setPortfolio] = useState([ 
        {
            "id": 1,
            "title": "VR",
            "technology_icon": {
                "id": 3,
                "disk_name": "622103c26228f577602076.svg",
                "file_name": "vr_logo.svg",
                "file_size": 778,
                "content_type": "image/svg",
                "title": null,
                "description": null,
                "field": "technology_icon",
                "sort_order": 3,
                "created_at": "2022-03-03 18:06:58",
                "updated_at": "2022-03-03 18:06:59",
                "path": "http://itpro/storage/app/uploads/public/622/103/c26/622103c26228f577602076.svg",
                "extension": "svg"
            },
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
                            "photo": "/photo1.png"
                        },
                        {
                            "description": "На основе патента на метод изготовления под давлением металлических отливок, полученного в 1870 году Джоном Смитом и Джессом Локом, братья Хайат разработали и в 1872 году запатентовали первую машину для литья пластмассы под давлением. ",
                            "photo": "/photo3.png"
                        }
                    ],
                    "platforms": [
                        {
                            "id": 2,
                            "title": "Android",
                            "pivot": {
                                "project_id": 1,
                                "platform_id": 2
                            },
                            "platform_icon": {
                                "id": 6,
                                "disk_name": "622103e605fbd609954184.svg",
                                "file_name": "android_logo.svg",
                                "file_size": 4543,
                                "content_type": "image/svg",
                                "title": null,
                                "description": null,
                                "field": "platform_icon",
                                "sort_order": 6,
                                "created_at": "2022-03-03 18:07:34",
                                "updated_at": "2022-03-03 18:07:35",
                                "path": "http://itpro/storage/app/uploads/public/622/103/e60/622103e605fbd609954184.svg",
                                "extension": "svg"
                            }
                        },
                        {
                            "id": 1,
                            "title": "IOS",
                            "pivot": {
                                "project_id": 1,
                                "platform_id": 1
                            },
                            "platform_icon": {
                                "id": 2,
                                "disk_name": "622103a8bcd1f961578793.svg",
                                "file_name": "apple_logo.svg",
                                "file_size": 2509,
                                "content_type": "image/svg",
                                "title": null,
                                "description": null,
                                "field": "platform_icon",
                                "sort_order": 2,
                                "created_at": "2022-03-03 18:06:32",
                                "updated_at": "2022-03-03 18:06:35",
                                "path": "http://itpro/storage/app/uploads/public/622/103/a8b/622103a8bcd1f961578793.svg",
                                "extension": "svg"
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
                        "path": "http://itpro/storage/app/uploads/public/622/104/6d6/6221046d6fab8404129524.svg",
                        "extension": "svg"
                    }
                }
            ]
        }
    ]);

    useEffect( () => {
        axios.get('http://itpro/technologies')
            .then(res => {
                setPortfolio(res.data);
                console.log(portfolio)

            })
            .catch( err=> {
                console.log(err)
            })
    }, [])

    const [isContactsPopupOpen, updateIsContactsPopupOpen] = useState(false);

    const handleOpenContactsPopup = () => {
        updateIsContactsPopupOpen(true);
    }
    const handleClosePopup = () => {
        updateIsContactsPopupOpen(false);
    }


  return (
    <React.Fragment>
        
         {/* <Popup containerClass="submitted-popup-wrapper">
            <FormSubmittedPopup></FormSubmittedPopup>
        </Popup> */}

        {
            isContactsPopupOpen && 
            <Popup onClosePopup={handleClosePopup} containerClass="contacts-popup">
                <ContactsPopup></ContactsPopup>
            </Popup>
        }
      <Router>
        <TheHeader>
            <NavBar containerClass="nav-bar-row" onOpenContactsPopup={handleOpenContactsPopup} ></NavBar>
        </TheHeader>

        <Routes>
          <Route path="/" exact element={<AboutUs />}/>
          {/* <Route path="/" element={<Portfolio portfolio={portfolio} />}/> */}
          {/* <Route path="/project" element={<Project project={portfolio[0].projects[0]} />}/> */}
          <Route path="/project/:category_title/:id" element={<Project portfolio={portfolio} />}/>
          <Route path="/contact-us" element={<ContactUs portfolio={portfolio} />}/>
        </Routes>

        <TheFooter>
            <NavBar containerClass="nav-bar-column" onOpenContactsPopup={handleOpenContactsPopup}></NavBar>
        </TheFooter>
      </Router>
</React.Fragment>

  );
}

export default App;
