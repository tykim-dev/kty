"use client"; // 필수!
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import WordLayout from '@/app/components/Layout/WordLayout'
import SearchBar from './components/SearchBar';
import WordTable from './components/WordTable';
import Pagination from '@/app/components/Navbars/Pagination';

const JlptPage = () => {

  const { data: session } = useSession();

  const [conditions, setConditions] = useState({});
  
  const handleSearch = (data: any) => {
    setConditions(data);
  }

  const handlePageChange = (page: number) => {
    setConditions({...conditions, page});
  }

  return (
    <WordLayout>
      <SearchBar onSearch={(data: any) => handleSearch(data)} />

      <div className="w-full h-auto relative">
        <WordTable conditions={conditions} />
        <Pagination conditions={conditions} onPageChange={(newPage: number) => handlePageChange(newPage)} />
      </div>
    </WordLayout>
  )
}

export default JlptPage