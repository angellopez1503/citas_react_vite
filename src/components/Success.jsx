const Success = ({mensaje}) => {
  return (
    <div
     className="bg-green-600 text-white text-center rounded-md font-bold p-3 mb-3 uppercase transition-all"
    >
        <p>{mensaje}</p>
    </div>
  )
}

export default Success