import {
  Flex,
  Text,
  Switch,
  SlideFade,
  Box,
  Button,
  Image,
  Container,
} from '@chakra-ui/react'
import { useState } from 'react'
import ONGsModal from '../ONGsModal'
import { ONG } from '@/models/ong'

export default function DonateArea() {
  const [isChecked, setIsChecked] = useState(false)
  const [selectedONG, setSelectedONG] = useState<ONG | null>(null)
  const [showONGsModal, setShowONGsModal] = useState(false)

  const handleToggle = () => {
    setSelectedONG(null)
    setIsChecked(!isChecked)
  }

  return (
    <Container>
      <Flex justifyContent="space-between">
        <Text color="#5e0e8b" fontWeight="800" lineHeight="1.75rem">
          REALIZAR DONACION
        </Text>
        <Switch
          colorScheme="teal"
          size="lg"
          isChecked={isChecked}
          onChange={handleToggle}
        />
      </Flex>
      <SlideFade in={isChecked} offsetY="20px">
        <Box p="20px" color="white" mt="4" bg="teal.500" rounded="md" shadow="md">
          <Flex justifyContent="center">
            {selectedONG ? (
              <Button
                bg="transparent"
                color="gray.300"
                border="2px dashed"
                borderColor="gray.300"
                width="fit-content"
                padding={3}
                isDisabled={!isChecked}
                height="fit-content"
                w="100%"
                alignItems="center"
                _disabled={{
                  cursor: 'default',
                }}
                _hover={{
                  bg: 'transparent',
                  color: 'gray.100',
                  borderColor: 'gray.100',
                }}
                onClick={() => {
                  setShowONGsModal(true)
                }}
              >
                <Image
                  boxSize="2.5rem"
                  borderRadius="full"
                  src="https://static.vecteezy.com/system/resources/previews/019/869/277/non_2x/ong-letter-logo-design-on-white-background-ong-creative-circle-letter-logo-concept-ong-letter-design-vector.jpg"
                  mr="12px"
                  alt={`${selectedONG} logo`}
                />
                <Text
                  size="sm"
                  noOfLines={1}
                  color={selectedONG ? 'white' : 'gray.300'}
                >
                  {selectedONG.name}
                </Text>
              </Button>
            ) : (
              <Button
                bg="transparent"
                color="gray.300"
                border="2px dashed"
                borderColor="gray.300"
                width="300px"
                height={16}
                isDisabled={!isChecked}
                _disabled={{
                  cursor: 'default',
                }}
                _hover={{
                  bg: 'transparent',
                  color: 'gray.100',
                  borderColor: 'gray.100',
                }}
                onClick={() => {
                  setShowONGsModal(true)
                }}
              >
                Seleccionar ONG{' '}
              </Button>
            )}
          </Flex>
        </Box>
      </SlideFade>
      <ONGsModal
        onSelectONG={(ong) => {
          setSelectedONG(ong)
        }}
        isOpen={showONGsModal}
        onToggle={() => {
          setShowONGsModal(!showONGsModal)
        }}
      />
    </Container>
  )
}
