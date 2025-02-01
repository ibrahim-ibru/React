const displayData=({data})=>{
    return(
        <div>
            <ul>
                {data.map((item,index)=><li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}




export default displayData