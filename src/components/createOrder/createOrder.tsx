import { useState } from 'react'
import {
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import DonateArea from './donateArea'
import Header from './header'
import Mounts from './mounts'
import Products from './selectedProducts'
import { useRouter } from 'next/router'

function proposeDonation(subtotal) {
  let changeAmmount = subtotal % 10
  if (changeAmmount > 5) {
    changeAmmount -= 5
  }

  if (changeAmmount === 0 || changeAmmount === 1 || changeAmmount === 2) {
    return 0
  } else if (changeAmmount < 1) {
    return 1 - changeAmmount
  } else if (changeAmmount < 2) {
    return 2 - changeAmmount
  } else if (changeAmmount < 3) {
    return 3 - changeAmmount
  } else {
    return 5 - changeAmmount
  }
}

export default function CreateOrder() {
  const router = useRouter()
  const { subtotal, store } = router.query
  const gift = proposeDonation(subtotal)
  const total = Number(subtotal) + Number(gift)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDonationEnabled, setIsDonationEnabled] = useState(true)

  const handleCompleteOrder = () => {
    if (!isDonationEnabled) {
      setIsModalOpen(true)
    } else {
      // Complete the order
    }
  }

  const handleConfirmNoDonation = () => {
    setIsModalOpen(false)
    // Complete the order
  }

  return (
    <VStack>
      <Header store={store} />
      <Products />
      <Mounts
        subtotal={subtotal}
        total={total}
        gift={gift}
        isDonationEnabled={isDonationEnabled}
      />
      <DonateArea onToggleDonation={setIsDonationEnabled} gift={gift} />
      <Button
        width="100%"
        colorScheme="brand"
        boxShadow="xl"
        mt="16px"
        onClick={handleCompleteOrder}
      >
        Completar Pedido
      </Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>¿Estás seguro?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            ¿Realmente estás seguro de no querer apoyar a quienes te necesitan?
          </ModalBody>
          <ModalFooter justifyContent={'space-around'}>
            <Button colorScheme="red" onClick={handleConfirmNoDonation}>
              No quiero donar
            </Button>
            <Button
              backgroundColor="teal.500"
              color={'white'}
              mr={3}
              onClick={() => setIsModalOpen(false)}
            >
              Cambie de opinión
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  )
}
