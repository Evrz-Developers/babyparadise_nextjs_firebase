import React from 'react'
import Marquee from '@/components/ui/marquee';

const ReviewCard = ({ img, name, username, body }) => {
    return (
        <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
            <div className="flex items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

const CarouselLayout = ({ children, items }) => {
    const firstRow = items.slice(0, items.length / 2);
    const secondRow = items.slice(items.length / 2);
    return (
        <div className="flex flex-col items-center justify-center py-16 bg-orange-400">
            {/* First Row */}
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </Marquee>

            {/* Second Row */}
            <Marquee pauseOnHover className="[--duration:22s] mt-6">
                {secondRow.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </Marquee>
        </div>
    )
}

export default CarouselLayout