import CreateOrder from '@/components/createOrder/createOrder'
import { Center, Container } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container
      minHeight="100vh"
      maxWidth="sm"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Center rounded="md" bg="white" boxShadow="xl" p="16px" my="8px">
        <CreateOrder />
      </Center>
    </Container>
  )
}
