import image from '../assets/image.png'
import { Button } from './Button'

export function Header(){
    
    return (
        <header className='flex flex-col-reverse px-12 gap-5 sm:flex-row sm:justify-between sm: items-center sm:px-40 sm:py-10 sm:h-[560px] font-roboto sm:w-full bg-[#F8F8FF]'>
            {/* Conteúdo */}
            <div className='flex flex-col justify-center items-center sm:justify-center sm:items-start w-full sm:gap-6 gap-4'>
                <div className='text-xl sm:text-4xl flex w-[80%] text-center sm:text-left'>
                <p className='font-bold tracking-tighter'>Encontre os <strong className='text-[#846AFF] tracking-tighter'>melhores artigos </strong> 
                de programação em um só lugar</p>
                </div>

                <div className='text-xl sm:text-3xl flex w-[90%] sm:w-[100%] text-center sm:text-left'>   
                    <p className='tracking-tighter font-light text-gray-800'>Explore o topo da programação em um só lugar!
                    Seu destino único para dicas e tendências atuais.</p>
                </div>

                <div className='flex justify-center items-center bg-[#846AFF] px-4 py-6 w-full sm:w-[214px] h-[49px] rounded'>
                    <Button
                        width='214px'
                        height='49px'
                        title="Buscar artigos"
                    />
                </div>
            </div>

            {/* Imagem */}
            <div className='w-full sm:w-[60%] flex justify-center items-center sm:justify-end sm:items-end'>
                <img 
                    src={image} 
                    alt=""
                    className='sm:w-[400px] sm:h-[460px] w-[250px]'
                 />
            </div>
        </header>
    )
}