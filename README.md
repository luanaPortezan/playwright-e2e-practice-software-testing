# Testes E2E – Practice Software Testing (Sprint 1)

Projeto de portfólio de QA: plano de teste e automação E2E com **Playwright** para a **Sprint 1** do [Practice Software Testing](https://github.com/testsmith-io/practice-software-testing), seguindo o syllabus **CTFL 4.0 (ISTQB)**.

| Item | Link |
| --- | --- |
| Aplicação testada (Sprint 1) | https://v1.practicesoftwaretesting.com |
| API da Sprint 1 (apoio) | https://api-v1.practicesoftwaretesting.com |
| Base de teste | [Histórias de usuário – Sprint 1](https://testsmith-io.github.io/practice-software-testing/#/user-stories/v1) |

> O site principal `practicesoftwaretesting.com` está na Sprint 5. Este projeto usa a versão hospedada da Sprint 1, que corresponde às histórias abaixo.

## 1. Escopo

**Dentro:** 4 histórias do Sprint 1 e seus 14 critérios de aceitação (AC): visão geral do produto (3), detalhes do produto (3), navegação por categoria (3) e formulário de contato (5).

**Fora:** funcionalidades das Sprints 2 a 5 (login, busca, carrinho, checkout), desempenho, segurança aprofundada e testes de API isolados.

## 2. Abordagem

- **Nível e tipo:** teste de sistema (E2E, pela interface), funcional, caixa-preta, derivado dos AC.
- **Priorização:** baseada em risco (seção 4). Casos de prioridade alta rodam primeiro.
- **Técnicas (CTFL 4.0):** caso de uso, checklist, particionamento de equivalência, análise de valor limite, tabela de decisão e suposição de erro.
- **Automação:** Playwright + TypeScript, somente Chromium. Os casos são independentes entre si, e só o CT-CO-09 é manual (exploratório).
- **Confirmação e regressão:** todo defeito corrigido é retestado, e a suíte completa roda a cada push e em agenda diária no GitHub Actions.

## 3. Casos de teste e rastreabilidade

18 casos de teste (CT) que cobrem 14 de 14 AC. Formato do ID: CT-<história>-NN. Prioridade: A = alta, M = média.

| ID | AC | Técnica | Cenário → resultado esperado | Prior. |
| --- | --- | --- | --- | --- |
| CT-VP-01 | VP-AC1, AC2 | Checklist | Abrir a página inicial → grade de cartões exibida; cada cartão tem imagem carregada, nome e preço | A |
| CT-VP-02 | VP-AC3 | Caso de uso | Clicar em um cartão → abre o detalhe do mesmo produto (nome coincide) | A |
| CT-VP-03 | VP-AC3 | Caso de uso | No detalhe, usar o botão voltar do navegador → retorna à visão geral | M |
| CT-PD-01 | PD-AC1 | Caso de uso | Abrir um produto pela página inicial e por uma categoria → detalhe exibido nos dois caminhos | A |
| CT-PD-02 | PD-AC2 | Checklist | No detalhe → imagem, nome, descrição, preço, selo de categoria e de marca visíveis; nome e preço iguais aos do cartão | A |
| CT-PD-03 | PD-AC3 | Caso de uso | Produtos relacionados aparecem abaixo das informações principais; clicar em um abre o detalhe dele | M |
| CT-CA-01 | CA-AC1, AC2 | Caso de uso | Para cada categoria do menu, clicar → página da categoria com o nome dela como título | A |
| CT-CA-02 | CA-AC3 | Checklist | Em cada categoria → só produtos da categoria (conferido pelo selo no detalhe, por amostra) | A |
| CT-CA-03 | CA-AC1 | Caso de uso | Trocar de uma categoria para outra → título e lista são substituídos | M |
| CT-CO-01 | CO-AC1, AC2 | Checklist | Acessar o contato pelo menu → formulário com Nome, Sobrenome, E-mail, Assunto (lista) e Mensagem, todos obrigatórios | A |
| CT-CO-02 | CO-AC3 | Checklist | Abrir a lista de assunto → exatamente 6 opções: Atendimento ao Cliente, Webmaster, Retornar, Pagamentos, Garantia, Status do pedido | A |
| CT-CO-03 | CO-AC2 | Tabela de decisão | Enviar com tudo vazio → erro em cada campo obrigatório; sem confirmação | A |
| CT-CO-04 | CO-AC2 | Tabela de decisão | Deixar um campo obrigatório vazio por vez (5 campos) → erro só nele; sem envio | A |
| CT-CO-05 | CO-AC2 | Equivalência | E-mails inválidos ("teste", "teste@", "teste@dominio", "@example.com") → erro de formato; e-mail válido → sem erro | A |
| CT-CO-06 | CO-AC4 | Valor limite | Mensagem com 0, 49, 50 e 51 caracteres → com 0 e 49, erro de mínimo de 50; com 50 e 51, sem erro | A |
| CT-CO-07 | CO-AC5 | Caso de uso | Envio com dados válidos → confirmação exibida e formulário oculto | A |
| CT-CO-08 | CO-AC5 | Equivalência | Envio válido para cada uma das 6 opções de assunto → confirmação em todas | M |
| CT-CO-09 | — | Suposição de erro | Duplo clique em Enviar; acentos, espaços e caracteres especiais → sem falhas visíveis (exploratório, manual) | M |

## 4. Riscos principais

| Risco | Tipo | Nível | Resposta |
| --- | --- | --- | --- |
| Formulário aceita dados inválidos (mensagem curta, e-mail ruim, campo vazio) | Produto | Alto | CT-CO-03 a CT-CO-06 |
| Categoria mostra produtos de outra categoria ou título errado | Produto | Alto | CT-CA-01 a CT-CA-03 |
| Ambiente público fora do ar ou com dados alterados | Projeto | Médio | Sem valores fixos nos testes; retentativa limitada; execução diária para detectar instabilidade |
| Divergência entre os AC e o comportamento real da interface | Projeto | Médio | Pontos em aberto abaixo, resolvidos na exploração inicial |

## 5. Critérios de entrada e saída

- **Entrada:** ambiente v1 acessível; AC lidos e pontos em aberto respondidos; dados de teste definidos.
- **Saída:** 100% dos casos de prioridade alta aprovados; 14 de 14 AC cobertos; nenhum defeito crítico ou alto aberto; relatório HTML publicado.

## 6. Defeitos e relatórios

- **Defeitos:** registrados como [Issues](../../issues) neste repositório, com passos para reproduzir, resultado esperado e obtido, evidência (captura ou trace), severidade, ambiente e referência ao caso de teste.
- **Relatórios:** relatório HTML do Playwright publicado no GitHub Pages pelo Actions; traces das falhas como artefato da execução.

## 7. Mapeamento da Interface e Oráculo de Teste (Baseline)

A partir da execução de testes exploratórios preliminares na interface (`v1.practicesoftwaretesting.com`), foram definidos os seguintes comportamentos para orientar as asserções automatizadas:

1. **Navegação de Categorias:** O menu de categorias opera com links principais independentes (ex: *Hand Tools*, *Power Tools*). A interface não exibe dropdowns de subcategorias nesta versão; o clique no nó pai filtra e renderiza diretamente os itens atrelados.
2. **Exibição do Catálogo (Paginação):** A listagem da *Sprint 1* não possui mecanismo de paginação no front-end. O DOM carrega simultaneamente todos os produtos retornados pela API na grade principal.
3. **Validação Estrita do Formulário de Contato:** As strings literais mapeadas para os validadores de campo (erros e sucesso) são:
   - Formato de e-mail inválido: `"Email format is invalid"`
   - Assunto não preenchido: `"Subject is required"`
   - Regra de limite mínimo da mensagem (< 50 caracteres): `"Message must be minimal 50 characters"`
   - Submissão com sucesso: `"Thanks for your message! We will contact you shortly."`

*Comportamento mapeado e dados do catálogo conferidos via front-end e API do v1 em 02/10/2026.*

## 8. Status

- [x] Plano de teste
- [ ] Estrutura do projeto Playwright
- [ ] Automação dos casos
- [ ] Pipeline no GitHub Actions
- [ ] Relatório publicado no GitHub Pages
- [ ] Template de Issue e defeitos registrados
