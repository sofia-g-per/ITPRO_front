import { useState } from 'react';
import '../css/pages/portfolio.css';
import testvideo from '../videos/testvideo.mp4';
import TabButton from '../components/UI/TabButton.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

function Portfolio({portfolio}) {
    const [currentCategory, setCategory] = useState(0);
    const changeCategory = (id)=>{
        setCategory(portfolio.findIndex((category)=> category.id === id));
    }

    return(
        <section className="portfolio">
                <div className='portfolio__video'>
                    <video autoPlay loop muted>
                        <source src={testvideo} type="video/mp4" />
                    </video>

                </div>
                <div className='portfolio__main-content'>
                    <div className='portfolio__header'>
                        <h1 className='primary-heading'>Наши проекты</h1>
                            <p>
                                ITPRO Studio специализируется на создании продуктов для развития бизнеса, презентаций, обучающих материалов, заработка и развлечений.
                            </p>
                            <div className='tab-buttons'>
                            {
                                portfolio.map((category) => 
                                    <TabButton 
                                        isActive={currentCategory === portfolio.findIndex((cat)=> cat.id === category.id) ? 'tab-button--active': ''}
                                        onClick={changeCategory.bind(category.id)}
                                        key={category.id} 
                                        title={category.title} 
                                        icon={category.icon}>
                                    </TabButton>
                                ) 
                            }
                            </div>
                    </div>

                <div className='portfolio__projects'>
                    {
                        portfolio[currentCategory].projects.map( project =>
                            <ProjectCard 
                                key={project.id} 
                                project={project}>
                            </ProjectCard>
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default Portfolio;