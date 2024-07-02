import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/image3.jpeg'
import image4 from '../assets/image4.jpeg'
import image5 from '../assets/image5.jpeg'
import image6 from '../assets/image6.jpeg'

import { v4 as uuidv4 } from 'uuid';
import { Card } from './Card'

export function Section(){


    const data = [
        {
            id: uuidv4(),
            img: image1,
            title: 'O que é linguagem de programação? Conheça as principais',
            subTitle: 'Uma das mais populares vertentes da tecnologia da informação, a área de...',
        },
        {
            id: uuidv4(),
            img: image2,
            title: 'Python: por que a linguagem é tão usada para Data Science e finanças?',
            subTitle: 'O mundo da programação conta com algumas opções de linguagem para...',
        },
        {
            id: uuidv4(),
            img: image3,
            title: 'GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários',
            subTitle: 'O popular serviço de repositório de código GitHub foi adquirido pela...',
        },
        {
            id: uuidv4(),
            img: image4,
            title: '15 comandos no GIT que os desenvolvedores precisam saber',
            subTitle: 'Dominar os comandos GIT é uma habilidade que se conquista com...',
        },
        {
            id: uuidv4(),
            img: image5,
            title: 'GIT e GitHub: o que são e quais as diferenças entre eles?',
            subTitle: 'Git e GibHub são dois softwares de controle de versão essenciais para...',
        },
        {
            id: uuidv4(),
            img: image6,
            title: 'GitHub Copilot ganha integração com GPT-4 e interface conversacional',
            subTitle: 'O GitHub Copilot, ferramenta de desenvolvimento baseada em IA...',
        },

    ]

    return (
        <section className='flex flex-col px-40 py-10 font-roboto'>
            <div>
                <p className='font-bold text-lg'>Artigos recomendados</p>
            </div>

            {/* Cards */}
            <div className='grid grid-cols-3 gap-4 mt-12'>
                {
                    data.map((item) =>(
                        <Card 
                            img={item.img}
                            title={item.title}
                            subTitle={item.subTitle}
                        />
                    ))
                }
            </div>
        </section>
    )
}