import { useEffect } from 'react'
import {
  Image,
  Button,
  FormControl,
  FormLabel,
  Input,
  Container,
  VStack,
  FormErrorMessage,
  Text,
} from '@chakra-ui/react'
import Codicon from '@/assets/codicon.png'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'
import { emailRegexPattern } from '@/constants/forms'
import useUser from '@/stores/user'
import Link from 'next/link'

interface RegisterForm {
  name: string
  email: string
  password: string
}

export default function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterForm>()

  const router = useRouter()

  const { user, setUser } = useUser()

  useEffect(() => {
    if (user) router.push('/combo')
  }, [user, router])

  const onSubmit: SubmitHandler<RegisterForm> = async (formData) => {
  const apiUrl = process.env.API_ENDPOINT
    const response = await fetch(
      `${apiUrl}/api/auth/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      },
    )
    const datica = await response.json()

    if (!datica.errors) {
      setUser({
        email: formData.email,
        name: formData.name,
        token: datica?.token,
      })

      router.push('/combo')
    }
  }

  return (
    <Container
      maxW="sm"
      minH="100vh"
      display="flex"
      flexDirection="column"
      backgroundColor={'teal.500'}
    >
      <Image
        objectFit="cover"
        width={'100%'}
        marginTop="20px"
        src={Codicon.src}
        alt="Codicon"
      />
      <VStack
        width="100%"
        maxW="sm"
        height="100%"
        zIndex={99}
        justifyContent={'flex-end'}
      >
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
            <FormControl isInvalid={!!errors.name}>
              <FormLabel color="white" htmlFor="name">
                Nombre
              </FormLabel>
              <Input
                id="name"
                type="text"
                bg="gray.100"
                _focus={{ borderColor: 'White' }}
                _hover={{ borderColor: 'White' }}
                {...register('name', {
                  required: 'Este campo es requerido',
                })}
              />
              <FormErrorMessage fontWeight={600}>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
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
                  minLength: {
                    value: 8,
                    message: 'La contraseña debe tener al menos 8 carácteres',
                  },
                  maxLength: {
                    value: 20,
                    message: 'La contraseña debe ser de máximo 20 carácteres',
                  },
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
              Registrar
            </Button>
          </form>
        </VStack>

        <Link href="/login">
          <Text
            textDecoration="underline"
            _hover={{
              color: 'white',
            }}
          >
            ¿Ya tienes una cuenta?
          </Text>
        </Link>
      </VStack>
    </Container>
  )
}
