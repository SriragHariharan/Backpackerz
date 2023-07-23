import React from 'react'

export default function ReceiverMsg({message}) {
  return (
    <div className="d-flex flex-row justify-content-start">
      <div>
        <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: "#f5f6f7" }}>
            {message}
        </p>
        <p className="small ms-3 rounded-3 text-muted">
          00:07
        </p>
      </div>
    </div>
    )
}
