// function Button() {
//     return (
//         <>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
//             Button
//         </button>
//         </>
//     )

// }

//esto se le conoce como destructurar 
const Button = (props) => {

    const { name } = props;
    return (
        <>
        <button className="bg-blue-500 hover:bg-blue-700 mx-2 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            {name}
        </button>
        </>
    )
}
export default Button