"use client"; // 필수!
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import WordLayout from '@/app/components/Layout/WordLayout'
import { Button, Card, CardBody, Carousel, Dialog, DialogBody, DialogHeader, Typography } from "@material-tailwind/react";
import useWord from '@/app/swr/useWord';
import WordContent from './components/WordContent';
import SearchBar from './components/SearchBar';

const SlidePage = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  const [conditions, setConditions] = useState({});
  
  const handleSearch = (data: any) => {
    setConditions(data);
  }

  const handleOpen = () => setOpen(!open);

  // const handlePageChange = (page: number) => {
  //   setConditions({...conditions, page});
  // }

  return (
    <WordLayout>
      <SearchBar onSearch={(data: any) => handleSearch(data)} />

      <div className="w-full h-auto relatives">
        <WordContent conditions={conditions} />
      </div>

      <Button onClick={handleOpen} variant="gradient">
        전체화면
      </Button>

      <Dialog
        className='h-full w-full p-0 m-0'
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          aaaaaaaaaaaaaaaaaaaaaaaaaa
        </DialogBody>
      </Dialog>
    </WordLayout>
  )
}

export default SlidePage