export function Button({width, height, title}){
    
    return (
        <button
            className={`text-lg font-bold text-white`}
            style={{width: width, height: height}}
            >
            {title}
        </button>
        
    )
}