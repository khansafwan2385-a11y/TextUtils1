import React from 'react'

export default function Alert({alert}) {
    

    
 
    
    
  return (
    <>
    

   { alert && <div>
        <div className={`alert alert-${alert.type} alert-dismissible fade show alert-box`} role="alert">
  <strong>{alert.type.charAt(0).toUpperCase()+alert.type.slice(1)
} : </strong>{alert.msg}
  {/* <button type="button" className="btn-close"  aria-label="Close"  ></button> */}
</div>
    </div>
}
</>
  )
}
