import { Button, Heading, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import { ChangeValueUnit } from './ChangeValuesUnit'

export const ModalPreferences: React.FC<{ isOpen: any, onOpen: any, onClose: any }> = ({ isOpen, onOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Preferencias do usuário</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading size="md">Unidade de temperatura</Heading>
            <HStack>
              <ChangeValueUnit variant="modal" unitType="temperature"></ChangeValueUnit>
            </HStack>
            <Heading size="md" mt="5">Unidade de chuva</Heading>
            <HStack>
              <ChangeValueUnit variant="modal" unitType="rain"></ChangeValueUnit>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              OK
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}