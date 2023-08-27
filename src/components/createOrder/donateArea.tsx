import {
  Flex,
  Text,
  Switch,
  SlideFade,
  Box,
  Button,
  Heading,
  Image,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function DonateArea() {
  const [isChecked, setIsChecked] = useState(false)
  const [selectedOng, setSelectedOng] = useState(false)

  const handleToggle = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
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
            {selectedOng ? (
              <Button
                bg="transparent"
                color="gray.300"
                border="2px dashed"
                borderColor="gray.300"
                width="fit-content"
                padding={3}
                height="fit-content"
                spacing={0}
                w="100%"
                direction="row"
                alignItems="center"
              >
                <Image
                  boxSize="2.5rem"
                  borderRadius="full"
                  src="https://placekitten.com/100/100"
                  mr="12px"
                  //  my="2"
                />
                <Heading size="sm">Organizacion QuieroPlata</Heading>
              </Button>
            ) : (
              <Button
                bg="transparent"
                color="gray.300"
                border="2px dashed"
                borderColor="gray.300"
                width="300px"
                height={16}
              >
                Seleccionar ONG{' '}
              </Button>
            )}
          </Flex>
        </Box>
      </SlideFade>
    </>
  )
}
