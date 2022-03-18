
export default function Item({txt, delFunc, id}) {
 
    return (
     <li className="border d-flex justify-content-between align-item-center p-2 m-2">
         <div className="p-3">{txt}</div>
         <button 
         className="btn btn-danger p-2 h-50"
         onClick={() => delFunc(id)}
         >Supprimer</button>
     </li>
  )
}
