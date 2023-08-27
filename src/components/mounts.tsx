import { Heading, Stack, Image, Text, Button, Container } from '@chakra-ui/react'

export default function mountsArea() {
  return (
    <>
      <Container borderTop={'3px solid '} borderColor={'gray.200'} padding={'3'}>
        <Stack>
          <Stack
            mb="1"
            spacing={0}
            direction={'row'}
            justifyContent={'space-between'}
          >
            <Text fontWeight="bold" color="gray.500" fontSize=".8rem">
              Subtotal
            </Text>
            <Text fontWeight="bold" color="gray.500" fontSize=".8rem">
              5.99$
            </Text>
          </Stack>
          <Stack
            mb="1"
            spacing={0}
            direction={'row'}
            justifyContent={'space-between'}
          >
            <Text color="gray.500" fontSize=".8rem">
              Cargo por entrega
            </Text>
            <Text color="gray.500" fontSize=".8rem">
              3.25$
            </Text>
          </Stack>
          <Stack
            mb="1"
            spacing={0}
            direction={'row'}
            justifyContent={'space-between'}
          >
            <Text color="gray.500" fontSize=".8rem">
              Cargo por Servicio
            </Text>
            <Text color="gray.500" fontSize=".8rem">
              0.42$
            </Text>
          </Stack>
          <Stack
            mb="1"
            spacing={0}
            direction={'row'}
            justifyContent={'space-between'}
          >
            <Text color="gray.500" fontSize=".8rem">
              Propina para el yummer
            </Text>
            <Text color="gray.500" fontSize=".8rem">
              0.24$
            </Text>
          </Stack>
        </Stack>
        <Stack borderTop={'2px solid '} borderColor={'gray.200'}>
          <Stack
            mt="1"
            spacing={0}
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Text fontWeight="bold" color="#5e0e8b" fontSize=".8rem">
              Subtotal
            </Text>
            <Text fontWeight="bold" color="#5e0e8b" fontSize="1rem">
              5.99$
            </Text>
          </Stack>
          <Text>
            llevar tu total a 6.$ puedes donar X cantidad de dinero para la
            organizacion que quieras y
          </Text>
        </Stack>
      </Container>
    </>
  )
}
