import React, {useState} from 'react'
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import '../css/stages-of-dev.css';

import StageOfDev from './StageOfDev';

export default function StagesOfDevScroll() {
    const [stages, updateStages] = useState(
        [
            {
                title: 'lorem',
                description: 'lore lore lore lore'
            },
            {
                title: 'lorem',
                description: 'lore lore lore lore'
            },
            {
                title: 'lorem',
                description: 'lore lore lore lore'
            },
            {
                title: 'lorem',
                description: 'lore lore lore lore'
            },
        ]
    );
  return (
    <section className='stages-of-dev'>
        <h2 className='secondary-heading stages-of-dev__heading'>Этапы разработки</h2>
        <Glider
            draggable
            slidesToShow={3}
            slidesToScroll={1}
            className='stages-of-dev__scroller'
            >

            {
                stages.map(stage => 
                    <StageOfDev stage={stage}>
                    </StageOfDev>
              )
            }
            </Glider>
    </section>
  )
}
