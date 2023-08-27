import { useState } from 'react'
import {
  Heading,
  Stack,
  Text,
  Image,
  Button,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  Container,
  VStack,
} from '@chakra-ui/react'
import Codicon from '@/assets/codicon.png'

import { ArrowBackIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export default function Login() {
  const [showRegisterForm, setShowRegisterForm] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(false)

  const handleRegisterClick = () => {
    setShowRegisterForm(true)
    setShowLoginForm(false)
  }

  const handleLoginClick = () => {
    setShowLoginForm(true)
    setShowRegisterForm(false)
  }

  const handleBackClick = () => {
    setShowLoginForm(false)
    setShowRegisterForm(false)
  }

  return (
    <Container maxW="sm" backgroundColor={'teal.500'}>
      <Image
        objectFit="cover"
        width={'100%'}
        top="
        30%"
        src={Codicon.src}
        alt="Codicon"
        position={'sticky'}
      />
      <VStack maxW="sm" height={'78vh'} zIndex={99} justifyContent={'flex-end'}>
        <VStack padding="10px" zIndex={99} backgroundColor={'teal.500'}>
          {!showRegisterForm && !showLoginForm && (
            <>
              <Button
                borderRadius={'full'}
                fontSize={12}
                onClick={handleRegisterClick}
              >
                REGISTRATE
              </Button>
              <Button
                color={' white '}
                fontSize={12}
                backgroundColor={'transparent'}
                borderColor={'white'}
                borderWidth={1}
                // hoverColor={'#000000'}
                borderRadius={'full'}
                onClick={handleLoginClick}
              >
                INICIAR SESION
              </Button>
            </>
          )}
          {showRegisterForm && (
            <>
              <IconButton
                aria-label="Volver"
                icon={<ArrowBackIcon />}
                position="absolute"
                top={0}
                left={0}
                onClick={handleBackClick}
              />
              <form>
                <FormControl>
                  <FormControl>
                    <Input
                      type="text"
                      mb={'1rem'}
                      placeholder="Nombre"
                      _placeholder={{ color: 'White' }}
                      color="white"
                      _focus={{ borderColor: 'White', color: 'White' }}
                      _hover={{ borderColor: 'White' }}
                    />
                  </FormControl>
                  <Input
                    mb={'1rem'}
                    type="email"
                    placeholder="Correo electrónico"
                    _placeholder={{ color: 'White' }}
                    color="white"
                    _focus={{ borderColor: 'White', color: 'White' }}
                    _hover={{ borderColor: 'White' }}
                  />
                </FormControl>
                <FormControl>
                  <Input
                    mb={'1rem'}
                    type="password"
                    placeholder="Contrasena"
                    color="white"
                    _placeholder={{ color: 'White' }}
                    _focus={{ borderColor: 'White', color: 'White' }}
                    _hover={{ borderColor: 'White' }}
                  />
                </FormControl>
                <Link href="/combo">
                  <Button
                    borderRadius={'full'}
                    fontSize={12}
                    width={'100%'}
                    onClick={handleRegisterClick}
                    type="submit"
                  >
                    Registrarse{' '}
                  </Button>
                </Link>
              </form>
            </>
          )}
          {showLoginForm && (
            <>
              <IconButton
                aria-label="Volver"
                icon={<ArrowBackIcon />}
                position="absolute"
                top={0}
                left={0}
                onClick={handleBackClick}
              />
              <form>
                <FormControl>
                  <Input
                    mb={'1rem'}
                    type="email"
                    placeholder="Correo electrónico"
                    _placeholder={{ color: 'White' }}
                    color="white"
                    _focus={{ borderColor: 'White', color: 'White' }}
                    _hover={{ borderColor: 'White' }}
                  />
                </FormControl>
                <FormControl>
                  <Input
                    mb={'1rem'}
                    type="password"
                    placeholder="Contrasena"
                    color="white"
                    _placeholder={{ color: 'White' }}
                    _focus={{ borderColor: 'White', color: 'White' }}
                    _hover={{ borderColor: 'White' }}
                  />
                </FormControl>
                <Link href="/combo">
                  <Button
                    borderRadius={'full'}
                    fontSize={12}
                    width={'100%'}
                    onClick={handleRegisterClick}
                    type="submit"
                  >
                    Iniciar sesion
                  </Button>
                </Link>
              </form>
            </>
          )}
        </VStack>
      </VStack>
    </Container>
  )
}
