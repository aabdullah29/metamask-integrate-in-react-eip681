import walletconnect

# Create a WalletConnect connector.
connector = walletconnect.WalletConnect(bridge='https://bridge.walletconnect.org')

# Generate a Cacao payload with the specified wallet address.
cacao_payload = {
    'uri': 'https://bridge.walletconnect.org',
    'issuer': 'https://my-dapp.com',
    'chainId': 1,
    'callback': '_on_connection_approved',
}

# Format the Cacao payload with the wallet address.
message = connector.formatMessage(cacao_payload, 'did:pkh:eip155:1:WALLET_ADDRESS')

# Generate a QR code from the message.
qr_code = connector.get_qr_code(message)


# def _on_connection_approved(session):
#     # Get the user's wallet address.
#     wallet_address = session.accounts[0]

#     # Start interacting with the user's wallet.