"use client"; // 필수!
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import WordLayout from '@/app/components/Layout/WordLayout'
import { Button, Card, CardBody, Carousel, Typography } from "@material-tailwind/react";

const SlidePage = () => {

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
      <Carousel className="rounded-xl" autoplay={true}>
        <Card className="w-full">
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Natalie Paisley
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              CEO / Co-Founder
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              CEO / Co-Founder
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-full">
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Natalie Paisley
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              CEO / Co-Founder
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              CEO / Co-Founder
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-full">
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Natalie Paisley
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              CEO / Co-Founder
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              CEO / Co-Founder
            </Typography>
          </CardBody>
        </Card>
      </Carousel>
    </WordLayout>
  )
}

export default SlidePage