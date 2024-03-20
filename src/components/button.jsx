


export default function Button(props) {

  return (
    <>
    <div className="flex flex-col space-y-8 text-left text-white">
      <a href={props.link} target="_blank" className="hover:cursor-pointer transition duration-300 ease-in-out hover:scale-105"> 
        <img className='rounded-lg' src={props.image} alt={`${props.image}`}></img>
      </a>
      <div className="flex flex-col space-y-2">
        <div className="text-2xl text-gray-400">UX Design</div>
        <div className="flex flex-row justify-between">
          <a href={props.link} target="_blank" className="text-4xl font-semibold hover:underline hover:cursor-pointer">{props.title}</a>
          <div className="text-4xl font-semibold">{props.price}</div>
        </div>
        <div>{props.description}</div>
      </div>
    </div>
    </>
  )
}