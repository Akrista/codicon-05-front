import { useEffect } from 'react'
import {
  Text,
  Image,
  Button,
  FormControl,
  FormLabel,
  Input,
  Container,
  VStack,
  FormErrorMessage,
} from '@chakra-ui/react'
import Codicon from '@/assets/codicon.png'

import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import useUser from '@/stores/user'
import { useRouter } from 'next/router'
import { emailRegexPattern } from '@/constants/forms'
interface LoginForm {
  email: string
  password: string
}

export default function Login() {
  const apiUrl = process.env.API_ENDPOINT
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginForm>()

  const router = useRouter()
  const { user, setUser } = useUser()

  useEffect(() => {
    if (user) router.push('/combo')
  }, [user, router])

  const onSubmit: SubmitHandler<LoginForm> = async (formData) => {
    const response = await fetch(`${apiUrl}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const datica = await response.json()
    if (!datica.errors) {
      setUser({
        email: formData.email,
        token: datica?.token,
      })

      router.push('/combo')
    }
  }

  return (
    <Container
      display="flex"
      flexDirection="column"
      maxW="sm"
      minHeight="100vh"
      backgroundColor={'teal.500'}
    >
      <Image objectFit="cover" width="100%" src={Codicon.src} alt="Codicon" />
      <VStack width="100%" maxW="sm" height="100%" zIndex={99} paddingBottom="16px">
        <VStack width="100%" padding="10px" zIndex={99} backgroundColor={'teal.500'}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <FormControl isInvalid={!!errors.email}>
              <FormLabel color="white" htmlFor="email">
                Correo Electrónico
              </FormLabel>
              <Input
                id="email"
                type="email"
                bg="gray.100"
                _focus={{ borderColor: 'White' }}
                _hover={{ borderColor: 'White' }}
                {...register('email', {
                  required: 'Este campo es requerido',
                  pattern: { value: emailRegexPattern, message: 'Correo inválido' },
                })}
              />
              <FormErrorMessage fontWeight={600}>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password}>
              <FormLabel color="white" htmlFor="email">
                Contraseña
              </FormLabel>
              <Input
                id="password"
                type="password"
                bg="gray.100"
                _focus={{ borderColor: 'White' }}
                _hover={{ borderColor: 'White' }}
                {...register('password', {
                  required: 'Este campo es requerido',
                })}
              />
              <FormErrorMessage fontWeight={600}>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              borderRadius={'full'}
              fontSize={12}
              width={'100%'}
              type="submit"
              marginTop="16px"
            >
              Login
            </Button>
          </form>
        </VStack>
        <Link href="/register">
          <Text
            textDecoration="underline"
            _hover={{
              color: 'white',
            }}
          >
            ¿No tienes cuenta?
          </Text>
        </Link>
      </VStack>
    </Container>
  )
}
