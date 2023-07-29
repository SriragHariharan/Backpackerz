import React from 'react'
import format from 'date-fns/format'

export default function SenderMsg({message, createdAt}) {
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
            </p>
        </div>
    </div>
  )
}
