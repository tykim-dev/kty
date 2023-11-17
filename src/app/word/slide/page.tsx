"use client"; // 필수!
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import WordLayout from '@/app/components/Layout/WordLayout'
import { Button, Card, CardBody, Carousel, Typography } from "@material-tailwind/react";
import useWord from '@/app/swr/useWord';
import WordContent from './components/WordContent';

const SlidePage = () => {

  const { data: session } = useSession();

  const [conditions, setConditions] = useState({type: 'jlpt', level: 1});

  const {data: words = [], isLoading, error} = useWord(conditions);
  
  const handleSearch = (data: any) => {
    setConditions(data);
  }

  // const handlePageChange = (page: number) => {
  //   setConditions({...conditions, page});
  // }

  return (
    <WordLayout>
      <WordContent conditions={conditions} />
    </WordLayout>
  )
}

export default SlidePage