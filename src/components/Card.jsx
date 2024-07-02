export function Card({img, title, subTitle}){
    
    return (
        <div className="flex flex-col w-full border border-gray-400 rounded-md">
            {/* Imagem */}
            <div className="flex justify-center items-center bg-cover w-full h-[150px]">
                <img
                    className="w-full h-full rounded-t-md transition-transform hover:scale-105" 
                    src={img}
                    alt="" />
            </div>

            {/* Conteúdo */}
            <div className="flex flex-col p-5 gap-2">
                <p className="font-bold text-base tracking-tighter">{title}</p>
                <p className="font-normal text-base tracking-tighter">{subTitle}</p>
            </div>
        </div>
    )
}