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
} from '@chakra-ui/react'
import { FC, useState } from 'react'
import ONGItem from '../ONGItem'

interface ONGsModalProps {
  isOpen: boolean
  onToggle: () => void
}

const DEFAULT_ONGS: ONG[] = [
  {
    name: 'My ONG',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin, nisl sit amet sollicitudin interdum, arcu orci semper nunc, in egestas sapien tellus ac orci. Nunc vehicula, nisi nec blandit laoreet, turpis orci pellentesque felis, maximus malesuada libero massa quis massa. Cras feugiat interdum lacus ut dapibus. ',
    logo: 'https://static.vecteezy.com/system/resources/previews/019/869/277/non_2x/ong-letter-logo-design-on-white-background-ong-creative-circle-letter-logo-concept-ong-letter-design-vector.jpg',
    id: 1,
  },
  {
    name: 'My ONG',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin, nisl sit amet sollicitudin interdum, arcu orci semper nunc, in egestas sapien tellus ac orci. Nunc vehicula, nisi nec blandit laoreet, turpis orci pellentesque felis, maximus malesuada libero massa quis massa. Cras feugiat interdum lacus ut dapibus. ',
    logo: 'https://static.vecteezy.com/system/resources/previews/019/869/277/non_2x/ong-letter-logo-design-on-white-background-ong-creative-circle-letter-logo-concept-ong-letter-design-vector.jpg',
    id: 2,
  },
  {
    name: 'My ONG',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin, nisl sit amet sollicitudin interdum, arcu orci semper nunc, in egestas sapien tellus ac orci. Nunc vehicula, nisi nec blandit laoreet, turpis orci pellentesque felis, maximus malesuada libero massa quis massa. Cras feugiat interdum lacus ut dapibus. ',
    logo: 'https://static.vecteezy.com/system/resources/previews/019/869/277/non_2x/ong-letter-logo-design-on-white-background-ong-creative-circle-letter-logo-concept-ong-letter-design-vector.jpg',
    id: 3,
  },
  {
    name: 'My ONG',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin, nisl sit amet sollicitudin interdum, arcu orci semper nunc, in egestas sapien tellus ac orci. Nunc vehicula, nisi nec blandit laoreet, turpis orci pellentesque felis, maximus malesuada libero massa quis massa. Cras feugiat interdum lacus ut dapibus. ',
    logo: 'https://static.vecteezy.com/system/resources/previews/019/869/277/non_2x/ong-letter-logo-design-on-white-background-ong-creative-circle-letter-logo-concept-ong-letter-design-vector.jpg',
    id: 4,
  },
  {
    name: 'My ONG',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin, nisl sit amet sollicitudin interdum, arcu orci semper nunc, in egestas sapien tellus ac orci. Nunc vehicula, nisi nec blandit laoreet, turpis orci pellentesque felis, maximus malesuada libero massa quis massa. Cras feugiat interdum lacus ut dapibus. ',
    logo: 'https://static.vecteezy.com/system/resources/previews/019/869/277/non_2x/ong-letter-logo-design-on-white-background-ong-creative-circle-letter-logo-concept-ong-letter-design-vector.jpg',
    id: 5,
  },
  {
    name: 'My ONG',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin, nisl sit amet sollicitudin interdum, arcu orci semper nunc, in egestas sapien tellus ac orci. Nunc vehicula, nisi nec blandit laoreet, turpis orci pellentesque felis, maximus malesuada libero massa quis massa. Cras feugiat interdum lacus ut dapibus. ',
    logo: 'https://static.vecteezy.com/system/resources/previews/019/869/277/non_2x/ong-letter-logo-design-on-white-background-ong-creative-circle-letter-logo-concept-ong-letter-design-vector.jpg',
    id: 6,
  },
  {
    name: 'My ONG',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin, nisl sit amet sollicitudin interdum, arcu orci semper nunc, in egestas sapien tellus ac orci. Nunc vehicula, nisi nec blandit laoreet, turpis orci pellentesque felis, maximus malesuada libero massa quis massa. Cras feugiat interdum lacus ut dapibus. ',
    logo: 'https://static.vecteezy.com/system/resources/previews/019/869/277/non_2x/ong-letter-logo-design-on-white-background-ong-creative-circle-letter-logo-concept-ong-letter-design-vector.jpg',
    id: 7,
  },
  {
    name: 'My ONG',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin, nisl sit amet sollicitudin interdum, arcu orci semper nunc, in egestas sapien tellus ac orci. Nunc vehicula, nisi nec blandit laoreet, turpis orci pellentesque felis, maximus malesuada libero massa quis massa. Cras feugiat interdum lacus ut dapibus. ',
    logo: 'https://static.vecteezy.com/system/resources/previews/019/869/277/non_2x/ong-letter-logo-design-on-white-background-ong-creative-circle-letter-logo-concept-ong-letter-design-vector.jpg',
    id: 8,
  },
]

const ONGsModal: FC<ONGsModalProps> = ({ isOpen, onToggle }) => {
  const [checked, setChecked] = useState<number | undefined>(undefined)
  const { getRootProps, getRadioProps } = useRadioGroup({
    value: checked,
    defaultValue: undefined,
    onChange: (newValue) => {
      setChecked(parseInt(newValue, 10))
    },
  })
  const group = getRootProps()

  console.log(checked)

  const handleClose = () => {
    setChecked(undefined)
    onToggle()
  }

  return (
    <Container maxW="sm">
      <Modal
        onClose={handleClose}
        size="full"
        isOpen={isOpen}
        motionPreset="slideInBottom"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <ModalHeader marginBottom="20px">
            <Center>Elige Tu ONG</Center>
          </ModalHeader>
          <ModalBody>
            <VStack spacing={4} {...group}>
              {DEFAULT_ONGS.map(({ name, description, logo, id }) => {
                const radio = getRadioProps({ value: id })
                return (
                  <ONGItem
                    {...radio}
                    key={id}
                    name={name}
                    description={description}
                    logo={logo}
                    isChecked={checked === id}
                  />
                )
              })}
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              variant={checked ? 'solid' : 'outline'}
              colorScheme="brand"
              width="100%"
              onClick={handleClose}
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
