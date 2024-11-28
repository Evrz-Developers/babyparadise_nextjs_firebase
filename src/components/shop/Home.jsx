"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import DummyCard from '@/components/common/DummyCard';
import Gridlayout from '@/components/layouts/Gridlayout';
import CarouselLayout from '@/components/layouts/CarouselLayout';


const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 },
    { id: 5, name: 'Product 5', price: 500 },
];

const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/james",
    },
];

const Home = () => {
    return (
        <div >
            {/* Featured Carousel */}
            {/* <CarouselLayout items={reviews} /> */}

            {/* ProductsGrid */}
            <Gridlayout>
                {products.map((product) => (
                    <DummyCard
                        key={product.id}
                        gradientColor="#2634"
                        title={product.name}
                    />
                ))}
            </Gridlayout>
        </div>
    );
};

export default Home;
