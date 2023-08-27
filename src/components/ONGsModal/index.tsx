import { ONG } from '@/models/ong'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Container,
  VStack,
  Center,
  useRadioGroup,
  Spinner,
} from '@chakra-ui/react'
import { FC, useState } from 'react'
import ONGItem from '../ONGItem'
import { useFetch } from '@/hooks/useFetch'
interface ONGsModalProps {
  isOpen: boolean
  onToggle: () => void
  onSelectONG: (ong: ONG) => void
}
const apiURL = process.env.API_ENDPOINT
const ONGsModal: FC<ONGsModalProps> = ({ isOpen, onToggle, onSelectONG }) => {
  const [checked, setChecked] = useState<string | undefined>(undefined)
  const [ongData, setONGData] = useState<ONG[]>([])

  const { getRootProps, getRadioProps } = useRadioGroup({
    value: checked,
    defaultValue: undefined,
    onChange: (newValue) => {
      // const parsedNewValue = parseInt(newValue, 10)
      setChecked(newValue)
      // setChecked(parsedNewValue)
    },
  })
  const group = getRootProps()

  const handleClose = () => {
    onToggle()
  }

  const handleSelectONG = () => {
    const foundONG = ongData.find(({ id }) => id === Number(checked))
    if (foundONG) onSelectONG(foundONG)

    setChecked(undefined)
    handleClose()
  }

  useFetch<ONG[]>(`${apiURL}/api/organizations`, {
    onSuccess: (data) => {
      setONGData(data)
    },
  })

  return (
    <Container maxWidth="sm">
      <Modal
        onClose={handleClose}
        size="full"
        isOpen={isOpen}
        motionPreset="slideInBottom"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent maxWidth="sm" height="100vh">
          <ModalCloseButton />

          <ModalHeader marginBottom="20px">
            <Center>Elige Tu ONG</Center>
          </ModalHeader>
          <ModalBody>
            {ongData.length ? (
              <VStack spacing={4} {...group}>
                {ongData.map((ong) => {
                  const { name, description, id } = ong

                  const radio = getRadioProps({ value: id })
                  return (
                    <ONGItem
                      logo={undefined}
                      {...radio}
                      key={id}
                      name={name}
                      description={description}
                      isChecked={Number(checked) === id}
                    />
                  )
                })}
              </VStack>
            ) : (
              <Spinner />
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              variant={checked ? 'solid' : 'outline'}
              colorScheme="brand"
              width="100%"
              onClick={handleSelectONG}
              isDisabled={checked === undefined}
            >
              Continuar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  )
}

export default ONGsModal
