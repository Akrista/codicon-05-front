import { FC } from 'react'
import { useRadio, Card, Flex, Text, Avatar, Box } from '@chakra-ui/react'
import { ONG } from '@/models/ong'

interface ONGItemProps extends Omit<ONG, 'id'> {
  isChecked: boolean
}

const ONGItem: FC<ONGItemProps> = (props) => {
  const { name, description } = props
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
          <Avatar
            src="https://static.vecteezy.com/system/resources/previews/019/869/277/non_2x/ong-letter-logo-design-on-white-background-ong-creative-circle-letter-logo-concept-ong-letter-design-vector.jpg"
            marginRight="6px"
            boxShadow={checked ? '0 0 0 3px #37b38f' : undefined}
          />
          <Flex flexDirection="column">
            <Text fontWeight={checked ? 600 : 400}>{name}</Text>
            <Text fontWeight={300} noOfLines={3} fontSize="sm">
              {description}
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Box>
  )
}

export default ONGItem
