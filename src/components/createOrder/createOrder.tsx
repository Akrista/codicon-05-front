import { useState } from 'react'
import { ONG } from '@/models/ong'

import {
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Image,
  ModalCloseButton,
} from '@chakra-ui/react'
import DonateArea from './donateArea'
import Header from './header'
import Mounts from './mounts'
import Products from './selectedProducts'
import { useRouter } from 'next/router'
// import { user } from '@/models/user'
import { useFetch } from '@/hooks/useFetch'

import Miserly1 from '@/assets/miserly1.gif'
import Miserly2 from '@/assets/miserly2.gif'

const randomSrc = Math.random() < 0.5 ? Miserly1 : Miserly2

function proposeDonation(subtotal: number): number {
  let changeAmmount = subtotal % 10

  if (changeAmmount > 5) {
    changeAmmount -= 5
  }
  if (changeAmmount === 0 || changeAmmount === 1 || changeAmmount === 2) {
    return 0
  } else if (changeAmmount < 1) {
    return Number((1 - changeAmmount).toFixed(2))
  } else if (changeAmmount < 2) {
    return Number((2 - changeAmmount).toFixed(2))
  } else if (changeAmmount < 3) {
    return Number((3 - changeAmmount).toFixed(2))
  } else {
    return Number((5 - changeAmmount).toFixed(2))
  }
}

export default function CreateOrder() {
  const [ongData, setONGData] = useState<ONG[]>([])

  useFetch<ONG[]>('http://fundease.duckdns.org:3001/api/organizations', {
    onSuccess: (data) => {
      setONGData(data)
      // alert('het')
    },
  })
  const [isButtonVisible, setIsButtonVisible] = useState(true)

  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false)
  const router = useRouter()

  const selectedComboData = localStorage.getItem('selectedCombo')
  let selectedCombo

  if (selectedComboData) {
    selectedCombo = JSON.parse(selectedComboData)
  } else {
    // Handle the case where the selected combo data is not found in localStorage
  }

  if (selectedCombo) {
    var { subtotal, store } = selectedCombo
  }

  const gift = proposeDonation(Number(subtotal))
  const total = Number(subtotal) + Number(gift)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDonationEnabled, setIsDonationEnabled] = useState(true)

  const handleCompleteOrder = () => {
    if (!isDonationEnabled) {
      setIsModalOpen(true)
    } else {
      // Complete the order
      /*  fetch('http://fundease.duckdns.org:3001/api/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: DEFAULT_USER.id,
          payment_type: 'efectivo',
          cash: total,
          Billdenomination: 'USD',
          amount: total,
          suggest_donation: proposeDonation(subtotal) !== 0,
          donation: isDonationEnabled,
          donation_data: {
            amount: gift,
          },
          organization_id: 2,
        }),
      }) */
      router.push('/success')
    }
  }

  const handleConfirmNoDonation = () => {
    setIsModalOpen(false)
    setIsSecondModalOpen(true)
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
      <DonateArea
        onToggleDonation={setIsDonationEnabled}
        isDonationEnabled={isDonationEnabled}
        gift={gift}
        ongData={ongData}
      />
      <Button
        width="100%"
        colorScheme="brand"
        boxShadow="xl"
        mt="16px"
        onClick={handleCompleteOrder}
      >
        Completar Pedido
      </Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(true)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>¿Estás seguro?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            ¿Realmente estás seguro de no querer apoyar a quienes te necesitan?
          </ModalBody>
          <ModalFooter justifyContent={'space-around'}>
            <Button colorScheme="red" onClick={handleConfirmNoDonation} mr={3}>
              No quiero donar
            </Button>
            <Button
              backgroundColor="teal.500"
              color={'white'}
              onClick={() => {
                setIsModalOpen(false)
                setIsDonationEnabled(true)
              }}
            >
              Cambie de opinión
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isSecondModalOpen} onClose={() => setIsSecondModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>¿Estás seguro?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image alt="Codicon" src={randomSrc.src}></Image>
          </ModalBody>
          <ModalFooter justifyContent={'space-around'}>
            {isButtonVisible ? (
              <Button
                colorScheme="red"
                onClick={() => setIsButtonVisible(false)}
                fontSize={9}
              >
                Soy una persona horrible
              </Button>
            ) : null}
            <Button
              backgroundColor="teal.500"
              color={'white'}
              fontSize={12}
              onClick={() => {
                setIsSecondModalOpen(false)
                setIsDonationEnabled(true)
              }}
            >
              Reflexioné y quiero donar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  )
}
