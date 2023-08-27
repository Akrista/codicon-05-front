import { Stack, Text, Container } from '@chakra-ui/react'

export default function mountsArea({ subtotal, isDonationEnabled, gift, total }) {
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
              ${subtotal}
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
          {isDonationEnabled ? (
            <Stack
              mb="1"
              spacing={0}
              direction={'row'}
              justifyContent={'space-between'}
            >
              <Text color="gray.500" fontSize=".8rem">
                Donativo
              </Text>
              <Text color="gray.500" fontSize=".8rem">
                ${gift}
              </Text>
            </Stack>
          ) : null}
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
              Total
            </Text>
            {isDonationEnabled ? (
              <Text fontWeight="bold" color="#5e0e8b" fontSize="1rem">
                ${total}
              </Text>
            ) : (
              <Text fontWeight="bold" color="#5e0e8b" fontSize="1rem">
                ${subtotal}
              </Text>
            )}
          </Stack>
          {gift !== 0 ? (
            <Text>
              puedes llevar tu total a {total} donando ${gift} para la organizacion
              que quieras.
            </Text>
          ) : null}
        </Stack>
      </Container>
    </>
  )
}
