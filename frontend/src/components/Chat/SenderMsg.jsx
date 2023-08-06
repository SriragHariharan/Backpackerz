import React from 'react'
import format from 'date-fns/format'

export default function SenderMsg({message, createdAt, isRead}) {
  return (
    <div className="d-flex flex-row justify-content-end pt-1">
        <div>
            <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                {message}
            </p>
            <p className="me-3 rounded-3 text-muted d-flex justify-content-end" style={{fontSize:'8px'}}>
                {format(new Date(createdAt), 'dd/MM/yy')}
                &nbsp;&nbsp;&nbsp;
                {format(new Date(createdAt), 'hh:mm')}
                &nbsp;&nbsp;&nbsp;
                {isRead === false ? (<sub className="fa-solid fa-check fa-2xl" style={{color: "#d9d9d9"}}></sub>) : (<sub className="fa-solid fa-check fa-2xl" style={{color: "#2e35ff"}}></sub>) }        

            </p>
        </div>
    </div>
  )
}
