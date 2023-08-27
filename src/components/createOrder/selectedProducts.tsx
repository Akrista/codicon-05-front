import {
  Heading,
  Stack,
  Image,
  Text,
  Card,
  CardBody,
  Circle,
} from '@chakra-ui/react'

export default function Products() {
  return (
    <>
      <Stack spacing={0} backgroundColor="blue.100" padding={5}>
        <Card direction={'row'} overflow="hidden" variant="outline">
          <Stack direction={'row'} overflow="hidden">
            <Image
              objectFit="cover"
              maxW={'30%'}
              src="https://placekitten.com/100/100"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading size="sm" color="#5e0e8b">
                  Pizza Nutella
                </Heading>

                <Text fontWeight="bold" color="gray.500" fontSize=".6rem">
                  PIZZA NUTELLA
                </Text>
                <Text fontWeight="bold" color="gray.500" fontSize=".8rem">
                  $ 5.99
                </Text>
              </CardBody>
            </Stack>
          </Stack>

          <Stack
            mr={5}
            justifyContent={'center'}
            alignItems={'center'}
            direction={'row'}
          >
            <Circle
              borderRadius={'full'}
              backgroundColor={'purple.100'}
              height={'25px'}
              width={'25px'}
            >
              <Text fontWeight="bold" color="gray.500" fontSize=".8rem">
                1
              </Text>
            </Circle>
            <Text fontSize=".8rem">Icon</Text>
          </Stack>
        </Card>
      </Stack>
    </>
  )
}
