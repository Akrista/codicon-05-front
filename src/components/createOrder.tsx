import { VStack, Button } from '@chakra-ui/react'
import Header from './createOrder/header'
import Products from './createOrder/selectedProducts'
import Mounts from './createOrder/mounts'
import DonateArea from './createOrder/donateArea'
import useCombo from '@/stores/combo'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function CreateOrder() {
  const { combo } = useCombo()
  const router = useRouter()

  useEffect(() => {
    if (!combo) {
      router.push('/combo')
    }
  }, [combo, router])

  if (!combo) return null

  return (
    <VStack>
      <Header store={combo.store} />
      <Products />
      <Mounts
        subtotal={combo.subtotal}
        gift={combo.gift}
        total={combo.total}
        isDonationEnabled
      />
      <DonateArea />
      <Button width="100%" colorScheme="brand" boxShadow="xl" mt="16px">
        Completar Pedido
      </Button>
    </VStack>
  )
}
