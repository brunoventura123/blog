type Props = {
    title:string
}

export const Botao = ({title}:Props) => {

    return(
        <button className="border-2 border-pink-900 text-md py-2 px-3 mt-20 rounded p-1 text-pink-900 hover:bg-pink-900 hover:text-white">{title}</button>
    )
}