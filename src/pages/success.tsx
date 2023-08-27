import { Heading, Text, Image, Button, Container, VStack } from '@chakra-ui/react'
import Five from '@/assets/five.gif'

import Link from 'next/link'

export default function SuccessPage() {
  return (
    <Container maxW="sm" backgroundColor={'teal.500'}>
      <Image
        objectFit="cover"
        width={'100%'}
        src={Five.src}
        alt="Codicon"
        position={'sticky'}
        zIndex={'1'}
        top={'-20px'}
      />
      <VStack maxW="sm" height={'40vh'} zIndex={99}>
        <VStack padding="10px" zIndex={99} backgroundColor={'teal.500'}>
          <>
            <Heading width="100%" textAlign="center" size="sm" color="white">
              ¡LISTO!{' '}
            </Heading>
            <Text
              fontWeight="bold"
              color="white"
              textAlign={'center'}
              fontSize=".8rem"
            >
              Tu orden ha sido recibida y preocesada. Te notificaremos cuando tu
              compra haya sido completada
            </Text>
            <Link href={'/combo'}>
              <Button borderRadius={'full'} fontSize={12} minWidth={'150px'}>
                Finalizar
              </Button>
            </Link>
          </>
        </VStack>
      </VStack>
    </Container>
  )
}
