import React from 'react'

const Gridlayout = ({ children }) => {
    return (
        <div className="my-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {children}
            </div>
        </div>
    )
}

export default Gridlayout