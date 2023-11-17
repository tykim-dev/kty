import { memo } from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';

type WordCardProps = {
  wordInfo: any,
}

const WordCard = (props: WordCardProps) => {

  const {
    wordInfo
  } = props

  return (
    <>
      <Card className="w-full">
        <CardBody className="text-center inline-block">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {wordInfo?.word}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {wordInfo?.read}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {wordInfo?.means}
          </Typography>
        </CardBody>
      </Card>
    </>
  )
}

export default memo(WordCard)