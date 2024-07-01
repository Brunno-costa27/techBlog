import image from '../assets/image.png'
import { Button } from './Button'

export function Header(){
    
    return (
        <header className='flex px-40 py-10 h-[560px] font-roboto w-full bg-[#F8F8FF]'>
            {/* Conteúdo */}
            <div className='flex flex-col justify-center items-start w-full gap-6'>
                <div className='text-4xl flex w-[80%]'>
                <p>Encontre os <strong className='text-[#846AFF] tracking-tighter'>melhores artigos </strong>
                de programação em um só lugar</p>
                </div>

                <div className='text-2xl flex w-[85%]'>   
                    <p>Explore o topo da programação em um só lugar!
                    Seu destino único para dicas e tendências atuais.</p>
                </div>

                <div className='flex justify-center items-center bg-[#846AFF] px-4 py-6 w-[214px] h-[49px] rounded'>
                    <Button
                        width='214px'
                        height='49px'
                        title="Buscar artigos"
                    />
                </div>
            </div>

            {/* Imagem */}
            <div className='w-[60%] flex justify-end items-end'>
                <img 
                    src={image} 
                    alt=""
                    className='w-[400px] h-[460px]'
                 />
            </div>
        </header>
    )
}