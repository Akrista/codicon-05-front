import ConfirmONG from '@/components/ONGsModal'
import { Button, Container, useDisclosure } from '@chakra-ui/react'

export default function Home() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Container w="100vw" bg="blue.100" height="100vh">
      <Button onClick={onToggle}>Continuar</Button>
      <ConfirmONG isOpen={isOpen} onToggle={onToggle} />
    </Container>
  )
}
