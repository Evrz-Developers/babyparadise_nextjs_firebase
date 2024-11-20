import React from 'react'
import DummyCard from '@/components/common/DummyCard';

const ProfilePage = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-32">
            <DummyCard
                gradientColor="#2634"
                title="🚧"
                description="We'll be back soon."
            />
        </div>
    )
}

export default ProfilePage