import React, { ReactNode } from 'react'
import { H1, H3 } from '@/components'
import { Button, FlipWords, Carousel, Card, ParallaxScroll  } from '@/components/ui'
import Image from "next/image";

const DummyContent = () => {
    return (
      <>
        {[...new Array(3).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                  The first rule of Apple club is that you boast about Apple club.
                </span>{" "}
                Keep a journal, quickly jot down a grocery list, and take amazing
                class notes. Want to convert those notes to text? No problem.
                Langotiya jeetu ka mara hua yaar is ready to capture every
                thought.
              </p>
              <Image
                src="https://assets.aceternity.com/macbook.png"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            </div>
          );
        })}
      </>
    );
  };

const data = [
    {
      category: "Artificial Intelligence",
      title: "You can do more with AI.",
      src: "https://res.cloudinary.com/dxu5hlgvd/image/upload/v1719133492/Akkilesh_A_cvicog.jpg",
      content: <DummyContent />,
    },
    {
      category: "Productivity",
      title: "Enhance your productivity.",
      src: "https://res.cloudinary.com/dxu5hlgvd/image/upload/v1719133492/Akkilesh_A_cvicog.jpg",
      content: <DummyContent />,
    },
    {
      category: "Product",
      title: "Launching the new Apple Vision Pro.",
      src: "https://res.cloudinary.com/dxu5hlgvd/image/upload/v1719133492/Akkilesh_A_cvicog.jpg",
      content: <DummyContent />,
    },
   
    {
      category: "Product",
      title: "Maps for your iPhone 15 Pro Max.",
      src: "https://res.cloudinary.com/dxu5hlgvd/image/upload/v1719133492/Akkilesh_A_cvicog.jpg",
      content: <DummyContent />,
    },
    {
      category: "iOS",
      title: "Photography just got better.",
      src: "https://res.cloudinary.com/dxu5hlgvd/image/upload/v1719133492/Akkilesh_A_cvicog.jpg",
      content: <DummyContent />,
    },
    {
      category: "Hiring",
      title: "Hiring for a Staff Software Engineer",
      src: "https://res.cloudinary.com/dxu5hlgvd/image/upload/v1719133492/Akkilesh_A_cvicog.jpg",
      content: <DummyContent />,
    },
  ];

const images=[
    "https://res.cloudinary.com/dxu5hlgvd/image/upload/v1719133492/Akkilesh_A_cvicog.jpg",
    "https://res.cloudinary.com/dxu5hlgvd/image/upload/v1719133492/Akkilesh_A_cvicog.jpg",
    "https://res.cloudinary.com/dxu5hlgvd/image/upload/v1719133492/Akkilesh_A_cvicog.jpg",
    "https://res.cloudinary.com/dxu5hlgvd/image/upload/v1719133492/Akkilesh_A_cvicog.jpg",
    "https://res.cloudinary.com/dxu5hlgvd/image/upload/v1719133492/Akkilesh_A_cvicog.jpg",
    "https://res.cloudinary.com/dxu5hlgvd/image/upload/v1719133492/Akkilesh_A_cvicog.jpg",
    "https://res.cloudinary.com/dxu5hlgvd/image/upload/v1719133492/Akkilesh_A_cvicog.jpg",
    "https://res.cloudinary.com/dxu5hlgvd/image/upload/v1719133492/Akkilesh_A_cvicog.jpg",
    "https://res.cloudinary.com/dxu5hlgvd/image/upload/v1719133492/Akkilesh_A_cvicog.jpg",
    "https://res.cloudinary.com/dxu5hlgvd/image/upload/v1719133492/Akkilesh_A_cvicog.jpg",
    "https://res.cloudinary.com/dxu5hlgvd/image/upload/v1719133492/Akkilesh_A_cvicog.jpg",
    "https://res.cloudinary.com/dxu5hlgvd/image/upload/v1719133492/Akkilesh_A_cvicog.jpg",
]

const words1=["Talent","Skill","Dream"]
const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
));

const LandingPage = () => {
  return (
    <div>
        <Section1 />
        <Section2 />
    </div>
  )
}

function Section2():ReactNode{
    return(
        <div className='h-[90vh] flex'>
            <div className="w-[50vw] ">
                <Carousel items={cards} />
            </div>
            <div className='w-[50vw] flex h-full px-20 overflow-hidden items-center'>
                <H1>
                    Your Opportunity,<br/> Their <FlipWords words={words1}/>
                </H1>
            </div>
        </div>
    )
}

function Section1():ReactNode{
    return(
        <div className='flex items-center'>
            <div className='w-[70vw] flex flex-col gap-6 justify-center h-full px-8 '>
                <H3>
                    <div className='text-textLite'>
                        Your talent, their opportunity
                    </div>
                </H3>
                <H1>
                    <div className='text-textLite'>
                        Crafting Connections,<br/> Empowering Possibilities
                    </div>
                </H1>
                <H3>
                    <Button className='rounded-full font-bold px-8 py-6 hover:underline hover:bg-white bg-white opacity-70'>Why wait ? Get started</Button>
                </H3>
            </div>
            <div className="h-full">
                <ParallaxScroll className='no-scrollbar' images={images} />
            </div>
        </div>
    )
}

export default LandingPage