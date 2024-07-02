import { Button } from "./Button";

export function Form() {

    return (
        <footer className="flex flex-col justify-center px-12 py-5 sm:px-40 sm:py-10 font-roboto bg-[#F8F8FF]">
            <form 
              action=""
              className="flex flex-col justify-center items-center"
            >
                <div className="flex justify-center items-center">
                    <p className="font-bold text-lg">Entre em contato</p>
                </div>

                <div className="relative w-full flex flex-col mt-10 justify-center items-center gap-3 p-2">
                    <input
                    className="w-full sm:w-[50%] flex px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                        type="text"
                        placeholder="Nome"
                    />

                    <input
                    className="w-full sm:w-[50%] flex px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                        type="text"
                        placeholder="Email"
                    />


                    <textarea 
                      name=""
                      id=""
                      className="w-full sm:w-[50%] flex px-4 h-28 py-2 border border-gray-300 rounded-md resize-none focus:outline-none"
                      placeholder="Assunto da mensagem"
                    >

                    </textarea>
                </div>

                <div className="flex justify-center w-[95%] mt-5  sm:mt-10 items-center bg-[#846AFF] px-4 py-6 sm:w-[50%] h-[49px] rounded">
                    <Button
                        width='100%'
                        height='50px'
                        title='Entrar em contato'
                    />
                </div>
            </form>
        </footer>
    )
}