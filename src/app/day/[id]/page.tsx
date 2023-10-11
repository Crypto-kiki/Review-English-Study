"use client";

import ReviewCard from "@/components/ReviewCard";
import { NextPage } from "next";
import Link from "next/link";
import { useParams } from "next/navigation";
import data from "@/data.json";
import { useEffect, useState } from "react";

export type TReview = {
  day: number;
  title: string;
  sentences: {
    english: string;
    korean: string;
  }[];
};

const Day: NextPage = () => {
  const [review, setReview] = useState<TReview>();
  const [currentReviewIndex, setCurrentReviewIndex] = useState<number>(0);

  const { id } = useParams();
  // 위에서 id는 현재 day폴더 하위에 동적라우팅 폴더명이 [id]이기 때문에 id로 적어야 함.
  // 만약 동적라우팅 폴더이름이 tokenId이면 useParams 쓸 때, {} 안에 tokenId가 들어가야 함.

  useEffect(() => {
    if (typeof id !== "string") return;
    setReview(data[parseInt(id, 10) - 1]);
  }, [id]);

  return (
    <main className="min-h-screen flex flex-col justify-start items-center py-24 px-12">
      <div className="w-full relative flex justify-center">
        <div className="absolute top-0 left-0">
          <Link href="/">
            <button className="btn-style text-xs font-semibold">Back</button>
          </Link>
        </div>
        <div className="font-semibold mb-24 mt-2">Day {id}</div>
      </div>
      {review && (
        <ReviewCard
          sentences={review.sentences}
          currentReviewIndex={currentReviewIndex}
          setCurrentReviewIndex={setCurrentReviewIndex}
        />
      )}
    </main>
  );
};

export default Day;
