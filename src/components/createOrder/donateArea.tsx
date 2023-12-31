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
import { useState, useEffect } from 'react'
import ONGsModal from '../ONGsModal'
import { ONG } from '@/models/ong'
interface DonateAreaProps {
  onToggleDonation: (isChecked: boolean) => void
  gift: number
  ongData: ONG[]
  isDonationEnabled: boolean
}

export default function DonateArea({
  onToggleDonation,
  gift,
  ongData,
  isDonationEnabled,
}: DonateAreaProps) {
  const [isChecked, setIsChecked] = useState(true)

  const [selectedONG, setSelectedONG] = useState<ONG | null>(null)
  const [showONGsModal, setShowONGsModal] = useState(false)

  useEffect(() => {
    if (ongData.length > 0) {
      const randomIndex = Math.floor(Math.random() * ongData.length)
      setSelectedONG(ongData[randomIndex])
      setIsChecked(true)
    }
  }, [ongData, isDonationEnabled])

  const handleToggle = () => {
    setIsChecked(!isChecked)
    onToggleDonation(!isChecked)
  }

  return (
    <>
      <Container>
        <Flex justifyContent="space-between">
          <Text color="#5e0e8b" fontWeight="800" lineHeight="1.75rem">
            REALIZAR DONACION
          </Text>
          {gift === 0 ? (
            <Switch
              colorScheme="teal"
              size="lg"
              disabled={true}
              isChecked={false}
              onChange={handleToggle}
              isDisabled
            />
          ) : (
            <Switch
              colorScheme="teal"
              size="lg"
              isChecked={isChecked}
              onChange={handleToggle}
            />
          )}
        </Flex>

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

      {isChecked && gift !== 0 ? (
        <SlideFade in={isChecked} offsetY="20px">
          <Box
            p="20px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
            maxW="sm"
          >
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
                    maxW="250px"
                    noOfLines={1}
                    color={selectedONG ? 'white' : 'gray.300'}
                  >
                    {selectedONG.name}
                  </Text>{' '}
                </Button>
              ) : (
                <Text></Text>
              )}
            </Flex>
          </Box>
        </SlideFade>
      ) : (
        <SlideFade in={!isChecked && gift !== 0} offsetY="20px">
          <Box p="20px" color="white" mt="4" bg="gray.500" rounded="md" shadow="md">
            <Flex justifyContent="center" textAlign={'center'}>
              ¿Estás seguro que no quieres donar a una buena causa?
            </Flex>
          </Box>
        </SlideFade>
      )}

      <ONGsModal
        onSelectONG={(ong) => {
          setSelectedONG(ong)
        }}
        isOpen={showONGsModal}
        onToggle={() => {
          setShowONGsModal(!showONGsModal)
        }}
      />
    </>
  )
}
