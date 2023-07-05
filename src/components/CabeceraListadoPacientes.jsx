
const CabeceraListadoPacientes = ({font1,font2,font3}) => {
    return (
        <>
            <h2 className='font-black text-3xl text-center'>{font1}</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
                {font2} {''}
                <span className='text-indigo-600 font-bold'>{font3}</span>
            </p>
        </>

    )
}

export default CabeceraListadoPacientes