---
title: Lista de Eventos
description: Conceitos básicos da linguagem Lua com NeonLua
category: scripting
order: 2
---

# Eventos Disponiveis

Eventos são o mecanismo que permite reagir a acontecimentos do jogo. Em vez de executar código de forma contínua, você define quando algo acontece e o que deve acontecer em resposta.

No NeonLua, os eventos expõem partes do ciclo de vida do servidor e dos jogadores para seus scripts, tornando possível criar comportamentos dinâmicos, interativos e previsíveis.


**PlayerMoveEvent**
Disparado quando um jogador se movimenta no mundo.

**PlayerJoinEvent**
Disparado quando um jogador entra no servidor.

**PlayerQuitEvent**
Disparado quando um jogador sai do servidor.

**PlayerDeathEvent**
Disparado quando um jogador morre.

**AsyncPlayerChatEvent**
Disparado quando um jogador envia uma mensagem comum no chat (sem /).
Esse evento ocorre de forma assíncrona, ou seja, fora da thread principal do servidor.

**CommandPreProcessEvent**
Disparado quando um comando é enviado, antes de ser processado pelo servidor.
Permite interceptar, modificar ou cancelar o comando antes da execução.

# Observações Importantes

Eventos assíncronos devem ser usados apenas para lógica leve, como validações e manipulação de texto.

Ações que afetam o mundo, jogadores ou entidades devem ser executadas de forma sincronizada.

Cancelar um evento impede que o comportamento padrão do servidor seja executado.

Outros scripts podem causar interferência em outros scripts dependendo de como são criados.

## Próximos Passos

Agora você está pronto para começar a usar os eventos! [Usando Eventos](04-usando-eventos.md).
