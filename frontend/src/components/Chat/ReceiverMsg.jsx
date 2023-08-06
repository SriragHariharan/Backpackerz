import React from 'react'
import format from 'date-fns/format'

export default function ReceiverMsg({message, createdAt, isRead}) {
  return (
    <div className="d-flex flex-row justify-content-start">
      <div>
        <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: "#f5f6f7" }}>
            {message}
        </p>
        <p className="ms-3 rounded-3 text-muted" style={{fontSize:'8px'}}>
            {format(new Date(createdAt), 'dd/MM/yy')}
            &nbsp;&nbsp;&nbsp;
            {format(new Date(createdAt), 'hh:mm')}
          </p>
      </div>
    </div>
    )
}
