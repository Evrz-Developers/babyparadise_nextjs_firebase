import React from 'react';
import BlurFade from '@/components/ui/blur-fade';
import { MagicCard } from '@/components/ui/magic-card';
import { NeonGradientCard } from '@/components/ui/neon-gradient-card';

// DummyCard component for pages under renovation
const DummyCard = ({ gradientColor, title, description }) => (

    <BlurFade duration={0.5} inView>
        <NeonGradientCard borderRadius="16">
            <MagicCard gradientColor={gradientColor} className="items-center justify-center text-center select-none px-2 py-2">
                <h1 className="text-xl font-semibold justify-center text-center">{title}</h1>
                <p>{description}</p>
            </MagicCard>
        </NeonGradientCard>
    </BlurFade>

);

export default DummyCard;