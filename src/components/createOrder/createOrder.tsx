import { useEffect, useState } from 'react'
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
import useCombo from '@/stores/combo'

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

function CreateOrder() {
  const router = useRouter()
  const { combo } = useCombo()

  console.log(combo)

  useEffect(() => {
    if (!combo) router.push('/combo')
  }, [combo, router])

  const [ongData, setONGData] = useState<ONG[]>([])
  const apiUrl = process.env.API_ENDPOINT

  useFetch<ONG[]>(`${apiUrl}/api/organizations`, {
    onSuccess: (data) => {
      setONGData(data)
    },
  })

  const [isButtonVisible, setIsButtonVisible] = useState(true)

  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false)

  const subtotal = combo?.subtotal || 0
  const store = combo?.store || ''

  const gift = proposeDonation(Number(subtotal))
  const total = Number(subtotal) + Number(gift)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDonationEnabled, setIsDonationEnabled] = useState(true)

  const handleCompleteOrder = () => {
    if (!isDonationEnabled) {
      setIsModalOpen(true)
    } else {
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
            Aunque sea poco, suma a quienes mas lo necesitan, estas seguro?
          </ModalBody>
          <ModalFooter justifyContent={'space-around'}>
            <Button
              backgroundColor="gray.300"
              onClick={handleConfirmNoDonation}
              mr={3}
            >
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
              Quiero donar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isSecondModalOpen} onClose={() => setIsSecondModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>¿ Realmente estás seguro?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image borderRadius={'20px'} alt="Codicon" src={randomSrc.src}></Image>
          </ModalBody>
          <ModalFooter justifyContent={'space-around'}>
            {isButtonVisible ? (
              <Button
                backgroundColor="gray.300"
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

export default CreateOrder
