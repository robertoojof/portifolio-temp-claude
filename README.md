# Portfólio — Roberto

Portfólio pessoal de um desenvolvedor full-stack júnior. Reúne a trajetória pessoal, os projetos (com links para o GitHub) e um blog, apresentados como uma história só, focada na evolução ao longo do tempo.

O site é bilíngue (inglês e português) e tem tema claro e escuro.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Cache Components, React Compiler)
- React 19
- Tailwind CSS 4
- TypeScript
- [Biome](https://biomejs.dev) para lint e formatação
- Yarn 4

## Como rodar

```bash
yarn install
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000). O visitante é redirecionado para `/en` ou `/pt` de acordo com o idioma do navegador (o padrão é inglês).

### Scripts

| Comando       | O que faz                          |
| ------------- | ---------------------------------- |
| `yarn dev`    | Servidor de desenvolvimento        |
| `yarn build`  | Build de produção                  |
| `yarn start`  | Sobe o build de produção           |
| `yarn lint`   | Verifica o código com o Biome      |
| `yarn format` | Formata o código com o Biome       |

## Variáveis de ambiente

O formulário de contato envia mensagens pelo [Resend](https://resend.com). Copie `.env.example` para `.env.local` e preencha:

| Variável             | Descrição                                                                 |
| -------------------- | ------------------------------------------------------------------------- |
| `RESEND_API_KEY`     | Chave da API do Resend                                                    |
| `CONTACT_TO_EMAIL`   | E-mail que recebe as mensagens                                            |
| `CONTACT_FROM_EMAIL` | Opcional. Remetente em um domínio verificado no Resend (padrão: remetente de teste do Resend) |

Sem `RESEND_API_KEY` e `CONTACT_TO_EMAIL`, o formulário aparece desabilitado.

## Estrutura

```
src/
├── app/
│   ├── [lang]/          # Rotas por idioma: início, projetos, blog
│   └── actions/         # Server actions (formulário de contato)
├── components/          # Componentes da interface
├── content/site.ts      # Conteúdo do site (sobre, projetos, links)
├── i18n/                # Idiomas e dicionários de textos
└── proxy.ts             # Redireciona para o idioma do visitante
```

O conteúdo fica em `src/content/site.ts`, com cada texto escrito nos dois idiomas. Itens marcados com `placeholder: true` aparecem com uma marcação visível até serem trocados pelo conteúdo real.

Decisões de produto e de design estão em [`PRODUCT.md`](PRODUCT.md) e [`DESIGN.md`](DESIGN.md).
