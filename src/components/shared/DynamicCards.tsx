"use client";

import { useState } from "react";
import { Container } from "@radix-ui/themes";
import Cards from "../../components/Cards";
import { cardLists } from "@/constants/Card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import arrowLeft from "@/public/svg/arrowLeft.svg";
import arrowRight from "@/public/svg/arrowRight.svg";

const DynamicCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardColors = ["#4D54E1", "#FF5668", "#41D1DE"];

  const handleNext = () => {
    if (currentIndex < cardLists.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <Container className="mt-6 px-4">
      <div className="space-x-4">
        <Button variant="outline" className="px-3" onClick={handlePrev}>
          <Image src={arrowLeft} alt="arrow left" />
        </Button>
        <Button variant="outline" className="px-3" onClick={handleNext}>
          <Image src={arrowRight} alt="arrow right" />
        </Button>
      </div>
      <div
        className="flex justify-between items-center gap-4 overflow-x-hidden mt-6 transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 340}px)`,
          width: `${340 * cardLists.length}px`,
        }}
      >
        {cardLists.map((card, index) => (
          <Cards
            {...card}
            key={card.id}
            backgroundColor={cardColors[index % cardColors.length]} // Assign color based on the index
          />
        ))}
      </div>
    </Container>
  );
};

export default DynamicCards;
