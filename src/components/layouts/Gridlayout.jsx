import React from 'react'

const Gridlayout = ({ children }) => {
    return (
        <div className="my-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {children}
            </div>
        </div>
    )
}

export default Gridlayout