"use client"; // 필수!
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import WordLayout from '@/app/components/Layout/WordLayout'
import { Button, Card, CardBody, Carousel, Typography } from "@material-tailwind/react";
import useWord from '@/app/swr/useWord';
import WordContent from './components/WordContent';
import SearchBar from './components/SearchBar';

const SlidePage = () => {

  const { data: session } = useSession();

  const [conditions, setConditions] = useState({});
  
  const handleSearch = (data: any) => {
    setConditions(data);
  }

  // const handlePageChange = (page: number) => {
  //   setConditions({...conditions, page});
  // }

  return (
    <WordLayout>
      <SearchBar onSearch={(data: any) => handleSearch(data)} />

      <div className="w-full h-auto relative">
        <WordContent conditions={conditions} />
      </div>
    </WordLayout>
  )
}

export default SlidePage