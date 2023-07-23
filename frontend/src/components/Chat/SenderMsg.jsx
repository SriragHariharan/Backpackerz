import React from 'react'

export default function SenderMsg({message}) {
  return (
    <div className="d-flex flex-row justify-content-end pt-1">
        <div>
            <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                {message}
            </p>
            <p className="small me-3 rounded-3 text-muted d-flex justify-content-end">
                You &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 00:06
            </p>
        </div>
    </div>
  )
}
