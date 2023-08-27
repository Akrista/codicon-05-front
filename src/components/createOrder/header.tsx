import { Heading, Stack, Image, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'
import mac from '@/assets/mac.jpg'
import { FC } from 'react'

interface HeaderProps {
  store: string
}

const Header: FC<HeaderProps> = ({ store }) => {
  return (
    <>
      <Stack
        spacing={0}
        w="100%"
        textAlign="center"
        direction="row"
        alignItems="center"
        // mb={4}
        mt={4}
      >
        <Heading width="100%" textAlign="center" size="sm" color="#5e0e8b">
          CARRITO{' '}
        </Heading>
      </Stack>
      <Stack
        spacing={0}
        w="100%"
        placeContent={'space-between'}
        direction="row"
        padding={5}
        alignItems="center"
      >
        <Stack spacing={0} w="100%" direction="row" alignItems="center">
          <Image
            boxSize="3rem"
            borderRadius="full"
            src={mac.src}
            fit={'cover'}
            alt="Fluffybuns the destroyer"
            mr="12px"
            //  my="2"
          />
          <Stack gap={0} justifyContent="">
            <Heading fontSize="1rem">{store}</Heading>
            <Text fontWeight="bold" color="gray.500" fontSize=".6rem">
              PIZZA - ITALIANA - BEBIDAS
            </Text>
          </Stack>
        </Stack>
        <Link href={'/combo'}>
          <Button
            bg="transparent"
            color="gray.300"
            border="2px dashed"
            borderColor="gray.300"
            width="120px"
            height={'fit-content'}
            padding={2}
          >
            <Text fontWeight="bold" color="gray.500" fontSize=".4rem">
              CANCELAR ORDEN
            </Text>
          </Button>
        </Link>
      </Stack>
    </>
  )
}

export default Header
