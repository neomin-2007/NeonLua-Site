---
title: Fundamentos de Lua
description: Conceitos básicos da linguagem Lua com NeonLua
category: scripting
order: 1
---

# Fundamentos de Lua

## Variáveis e Tipos

Em Lua, as variáveis são declaradas com `local` para escopo local:

```lua
-- Números
local x = 42
local pi = 3.14

-- Strings
local name = "NEON LUA"
local message = "Olá, mundo!"

-- Booleanos
local isEnabled = true
local isDisabled = false

-- Tabelas (arrays/objects)
local settings = {
  name = "Steve",
  level = 10,
  items = {"IRON_SWORD", "GOLD_PICKAXE"}
}
```

## Funções

As funções em Lua são poderosas e flexíveis:

```lua
-- Função simples
function greet(name)
  return "Olá, " .. name .. "!"
end

-- Função com múltiplos retornos
function getPlayerInfo(playerName)
  return playerName, 100, "online"
end

-- Função anônima
local add = function(a, b)
  return a + b
end

-- Chamando funções
print(greet("Steve"))
local name, level, status = getPlayerInfo("Alex")
```

## Loops

### For Loop

```lua
-- Loop numérico
for i = 1, 10 do
  print(i)
end

-- Loop com step
for i = 0, 10, 2 do
  print(i) -- 0, 2, 4, 6, 8, 10
end
```

### While Loop

```lua
local x = 0
while x < 10 do
  x = x + 1
  print(x)
end
```

### Table Iteration

```lua
local items = {"sword", "pickaxe", "axe"}
for i, item in ipairs(items) do
  print(i, item)
end

-- Iteração em tabelas associativas
local player = {name = "Steve", level = 10}
for key, value in pairs(player) do
  print(key, value)
end
```

## Condicionais

```lua
local level = 10

if level < 5 then
  print("Iniciante")
elseif level < 15 then
  print("Intermediário")
else
  print("Avançado")
end
```

## Próximos Passos

Agora que você conhece os eventos, explore a [Lista de Eventos](04-lista-de-eventos.md) para ver os eventos disponíveis.
