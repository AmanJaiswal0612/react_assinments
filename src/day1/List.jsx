
const List=({d1})=>{
    console.log(d1)
  return (
   <>
   {d1.map((el)=>{
       return <li>{el}</li>
   })}
   </>
  )
}

export default List