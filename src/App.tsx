import React from 'react';
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import Layout from "./components/Layout";
import theme from "./theme";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import "@fontsource/inter";

export default function App() {
  
  // Pull the disclosure methods
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    
    <ChakraProvider theme={theme}>
      <Layout>
        {/* Our connect button will only handle opening */}
        <ConnectButton handleOpenModal={onOpen} />
        {/* Our Account modal will handle open state & closing */}
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </ChakraProvider>
  )
}