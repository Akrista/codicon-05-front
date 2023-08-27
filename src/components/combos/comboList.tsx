import { combo } from '@/models/combo'
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
import ComboItem from './combo'

const DEFAULT_COMBOS: combo[] = [
  {
    name: 'Combo #1',
    subtotal: 9.2,
    gift: 0.8,
    total: 10,
    logo: 'https://static.vecteezy.com/system/resources/previews/019/869/277/non_2x/ong-letter-logo-design-on-white-background-ong-creative-circle-letter-logo-concept-ong-letter-design-vector.jpg',
    id: 1,
    store: 'McDonalds',
  },
  {
    name: 'Combo #2',
    subtotal: 12,
    gift: 1.5,
    total: 10,
    logo: 'https://static.vecteezy.com/system/resources/previews/019/869/277/non_2x/ong-letter-logo-design-on-white-background-ong-creative-circle-letter-logo-concept-ong-letter-design-vector.jpg',
    id: 2,
    store: 'Burger King',
  },
  {
    name: 'Combo #3',
    subtotal: 15,
    gift: 2.2,
    total: 10,
    logo: 'https://static.vecteezy.com/system/resources/previews/019/869/277/non_2x/ong-letter-logo-design-on-white-background-ong-creative-circle-letter-logo-concept-ong-letter-design-vector.jpg',
    id: 3,
    store: 'KFC',
  },
  {
    name: 'Combo #4',
    subtotal: 13.5,
    gift: 1.0,
    total: 10,
    logo: 'https://static.vecteezy.com/system/resources/previews/019/869/277/non_2x/ong-letter-logo-design-on-white-background-ong-creative-circle-letter-logo-concept-ong-letter-design-vector.jpg',
    id: 4,
    store: 'Subway',
  },
  {
    name: 'Combo #5',
    subtotal: 8.0,
    gift: 2.0,
    total: 10,
    logo: 'https://static.vecteezy.com/system/resources/previews/019/869/277/non_2x/ong-letter-logo-design-on-white-background-ong-creative-circle-letter-logo-concept-ong-letter-design-vector.jpg',
    id: 5,
    store: 'Pizza Hut',
  },
]

export default function ComboList() {
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
  return (
    <Container maxW="sm" h={'100vh'} backgroundColor={'white'}>
      {DEFAULT_COMBOS.map(({ name, subtotal, total, gift, logo, id, store }) => {
        const radio = getRadioProps({ value: id })
        return (
          <ComboItem
            {...radio}
            key={id}
            name={name}
            subtotal={subtotal}
            total={total}
            gift={gift}
            logo={logo}
            isChecked={checked === id}
            store={store}
          />
        )
      })}
    </Container>
  )
}
