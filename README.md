## Instalação e uso com Dev Client personalizado

### 1. Instale as dependências do projeto

```bash
pnpm install
```

### 2. Instale o EAS CLI globalmente

```bash
pnpm add -g eas-cli
```

### 3. Faça login na sua conta Expo

```bash
eas login
```

Entre com sua conta registrada no Expo.

### 4. Inicialize o projeto EAS (se necessário)

```bash
eas init
```

Siga as instruções e garanta que o `projectId` foi criado no Expo.

---

## Acessar o app com um Dev Client personalizado

### 1. Gere o Dev Client

Para Android:
```bash
pnpm eas build --profile development --platform android
```
Para iOS (requer Mac com Xcode):
```bash
pnpm eas build --profile development --platform ios
```

Isso irá gerar um arquivo `.apk` (ou `.ipa`) com todas as bibliotecas nativas incluídas.

### 2. Instale o app Dev Client no seu celular

Após o build, você verá um link para baixar o `.apk`.
- Instale no Android normalmente (pode usar QR Code ou baixar direto).
- Esse app substitui o Expo Go: ele carrega seu app local ou publicado.

### 3. Rode seu projeto

```bash
pnpm start
```
Ou:
```bash
expo start --dev-client
```
Isso abrirá o QR Code no terminal ou navegador.

### 4. Abra o Dev Client e escaneie o QR

- Abra o app Dev Client que você instalou.
- Escaneie o QR Code do terminal ou navegador.
- O app será carregado diretamente no seu celular 🎉

#### ✅ Dica extra: usar tunnel se o celular não estiver na mesma rede
No terminal, durante o `expo start`, pressione:

```
p
```
Depois selecione:

```
tunnel
```

Isso garante que o celular acesse o servidor, mesmo se estiver em outra rede ou o roteador bloquear o localhost.

---

### 🧪 Recapitulando

| Etapa | Descrição |
|-------|---------------------------------------------------------------|
| ✅ 1  | Gere o Dev Client com `eas build --profile development`        |
| ✅ 2  | Instale o `.apk` no seu celular                               |
| ✅ 3  | Rode o projeto com `pnpm start`                               |
| ✅ 4  | Escaneie o QR com o Dev Client         




<img src="https://user-images.githubusercontent.com/2246121/282256557-1570674b-d142-4198-9740-69404cc6a339.png#gh-light-mode-only" width="100%" alt="Chat dashboard dark mode"/>
<img src="https://user-images.githubusercontent.com/2246121/282256632-87f6a01b-6467-4e0e-8a93-7bbf66d03a17.png#gh-dark-mode-only" width="100%" alt="Chat dashboard"/>

---

# Chatwoot

Mobile app for chatwoot platform. Built with React Native and Expo.

<p>
   <a href="https://github.com/react-native-community/releases/blob/master/CHANGELOG.md"><img src="https://img.shields.io/github/package-json/dependency-version/chatwoot/chatwoot-mobile-app/react-native?color=%2361dafb" alt="Project Dependencies"></a>
   <img src="https://img.shields.io/github/package-json/dependency-version/chatwoot/chatwoot-mobile-app/expo?color=%2361dafb" alt="Expo">
  <img src="https://img.shields.io/discord/647412545203994635" alt="Discord">
  <a href="https://discord.gg/cJXdrwS"><img src="https://img.shields.io/badge/chat-Discord-violet?logo=discord" alt="Chat on Discord"></a>
   <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="Chat on Discord"></a>
 <img src="https://img.shields.io/github/license/chatwoot/chatwoot-mobile-app" alt="License">
</p>

- **Supported Chatwoot version:** 3.13.0+
- **Supported iOS versions**: 13.4+
- **Supported Android versions**: 6.0+

## Features

- Do not miss out on the new customers
- Follow up on customer conversations on go
- Reply easily with canned responses
- Receive realtime notifications about system activities
- Communicate with other team members via private notes
- Assign statuses to your conversations
  ... and more to come!

## Download Android/iOS application

<p >
  <a href="https://apps.apple.com/app/id1495796682">
    <img alt="Download on the App Store" title="App Store" src="http://i.imgur.com/0n2zqHD.png" width="140">
  </a>

  <a href="https://play.google.com/store/apps/details?id=com.chatwoot.app&hl=en">
    <img alt="Get it on Google Play" title="Google Play" src="http://i.imgur.com/mtGRPuM.png" width="140">
  </a>
</p>

## Testing

To help with testing app updates before they're released, you can:

Sign up to be a beta tester

- [Android](https://play.google.com/apps/testing/com.chatwoot.app) - Open this link from your Android device
- [iOS](https://testflight.apple.com/join/yQ4yoSx4) - Open this link from your iOS device

You can leave the Beta testing program at any time:

- On Android, [click this link](https://play.google.com/apps/testing/com.chatwoot.app) while logged in with your Google Play email address used to opt-in for the Beta program, then click **Leave the program**.
- On iOS, access the `Chatwoot` app page in TestFlight and click **Stop Testing**.

## Feedback & Contributing

Feel free to send us feedback on [X](https://x.com/chatwootapp) or [file an issue](https://github.com/chatwoot/chatwoot-mobile-app/issues).

If you wish to contribute, please take a quick look at the [CONTRIBUTING.md](https://www.chatwoot.com/docs/contributing-guide/mobile-app/setup-guide).

If there's anything you'd like to chat about, please feel free to join our [Discord](https://discord.gg/cJXdrwS) chat!

_Chatwoot_ &copy; 2017-2025, Chatwoot Inc - Released under the MIT License.
                       |
