import { VStack, Button } from '@chakra-ui/react'
import Header from './createOrder/header'
import Products from './createOrder/selectedProducts'
import Mounts from './createOrder/mounts'
import DonateArea from './createOrder/donateArea'

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
