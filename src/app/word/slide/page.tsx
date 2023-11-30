"use client"; // 필수!
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import WordLayout from '@/app/components/Layout/WordLayout'
import { Button, Card, CardBody, Carousel, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from "@material-tailwind/react";
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
        className='h-full w-full p-0 m-0 bg-white'
        open={open}
        handler={handleOpen}
        
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </WordLayout>
  )
}

export default SlidePage