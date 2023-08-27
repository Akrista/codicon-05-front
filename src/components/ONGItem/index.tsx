import { FC } from 'react'
import { useRadio, Card, Flex, Text, Avatar, Box } from '@chakra-ui/react'
import { ONG } from '@/models/ong'

interface ONGItemProps extends Omit<ONG, 'id'> {
  isChecked: boolean
}

const ONGItem: FC<ONGItemProps> = (props) => {
  const { logo, name, description } = props
  const { getInputProps, getRadioProps } = useRadio(props as any)

  const input = getInputProps()
  const radio = getRadioProps()
  const checked = props.isChecked || false
  return (
    <Box as="label">
      <input {...input} />

      <Card
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
        <Flex alignItems="center" gap={2} justifyContent="center">
          <Avatar src={logo} boxShadow={checked ? '0 0 0 3px #37b38f' : undefined} />
          <Flex flexDirection="column">
            <Text fontWeight={checked ? 600 : 400}>{name}</Text>
            <Text noOfLines={3}>{description}</Text>
          </Flex>
        </Flex>
      </Card>
    </Box>
  )
}

export default ONGItem
