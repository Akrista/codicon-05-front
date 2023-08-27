import { FC } from 'react'
import { useRadio, Card, Flex, Text, Avatar, Box, Stack } from '@chakra-ui/react'
import { combo } from '@/models/combo'
import Link from 'next/link'
import CreateOrder from '@components/createOrder/createOrder'

interface ComboItemProps extends Omit<combo, 'id'> {
  isChecked: boolean
}

const ComboItem: FC<ComboItemProps> = (props) => {
  const { logo, name, subtotal, gift, total, store } = props
  const { getInputProps, getRadioProps } = useRadio(props as any)

  const input = getInputProps()
  const radio = getRadioProps()
  const checked = props.isChecked || false
  return (
    <Link href="/order">
      <Box as="label" width={'100%'}>
        <input {...input} />

        <Card
          mt={'10px'}
          {...radio}
          cursor="pointer"
          display="flex"
          width="100%"
          alignItems="center"
          bg="white"
          border="2px solid"
          borderColor="transparent"
          rounded="md"
          px={3}
          py={1}
          _checked={{
            bg: 'white',
            boxShadow: 'lg',
            borderColor: 'brand.50',
          }}
          _focus={{
            boxShadow: 'lg',
          }}
        >
          <Flex
            alignItems="center"
            padding={'15px'}
            width={'100%'}
            gap={2}
            justifyContent="center"
          >
            <Flex flexDirection="column" width={'100%'} alignItems={'center'}>
              <Avatar
                src={logo}
                boxShadow={checked ? '0 0 0 3px #37b38f' : undefined}
              />
              <Text textAlign={'center'} fontWeight={checked ? 600 : 400}>
                {name}
              </Text>
            </Flex>
            <Flex flexDirection="column" width={'100%'}>
              <Stack
                mb="1"
                width={'100%'}
                spacing={0}
                direction={'row'}
                justifyContent={'space-between'}
              >
                <Text fontWeight="bold" color="gray.500" fontSize=".8rem">
                  Subtotal
                </Text>
                <Text ml={'5'} fontWeight="bold" color="gray.500" fontSize=".8rem">
                  ${subtotal}
                </Text>
              </Stack>
              <Stack
                mb="1"
                width={'100%'}
                spacing={0}
                direction={'row'}
                justifyContent={'space-between'}
              >
                <Text fontWeight="bold" color="gray.500" fontSize=".8rem">
                  vuelto
                </Text>
                <Text ml={'5'} fontWeight="bold" color="gray.500" fontSize=".8rem">
                  ${gift}
                </Text>
              </Stack>
              <Stack
                mb="1"
                width={'100%'}
                spacing={0}
                direction={'row'}
                justifyContent={'space-between'}
              >
                <Text fontWeight="bold" color="gray.500" fontSize=".8rem">
                  total
                </Text>
                <Text ml={'5'} fontWeight="bold" color="gray.500" fontSize=".8rem">
                  ${total}
                </Text>
              </Stack>
            </Flex>
          </Flex>
        </Card>
      </Box>
    </Link>
  )
}

export default ComboItem
