import React from 'react';
import Image from "next/image";
const HeroScene = () => {

    return(
    <div className="container justify-center">
        <div className="row justify-center">
            <div className="column">
                <Image src="/assets/images/hero-scene.jpg"
                       alt="basketballs on court"
                       width={1100}
                       height={500}
                       className="object-contain"
                />

            </div>
        </div>
    </div>
    )
}

export default HeroScene;