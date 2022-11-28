interface ResidentialCardParams {
    imageUrl: string,
    heading: string,
    message: string
}

export const ResidentialCard = ({imageUrl, heading, message}: ResidentialCardParams) => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 border shadow-md rounded-md">
        <img className="w-10" src={imageUrl} alt={imageUrl} />
        <h3 className="font-bold secondary-font-color">{heading}</h3>
        <p>{message}</p>    
    </div>
  )
}
