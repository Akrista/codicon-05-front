import DonateArea from './donateArea'
import Header from './header'
import Mounts from './mounts'
import Products from './selectedProducts'
import { VStack, Button } from '@chakra-ui/react'

export default function CreateOrder() {
  return (
    <VStack>
      <Header />
      <Products />
      <Mounts />
      <DonateArea />
      <Button width="100%" colorScheme="brand" boxShadow="xl" mt="16px">
        Completar Pedido
      </Button>
    </VStack>
  )
}
