**O que são tipos?**

* Em TypeScript a principal função é *determinar tipos para os dados*;
    * Variáveis, funções, retorno de função, tipos de objetos, etc...
* Isso vai garantir a *qualidade do código*;

**Tipos primiticos**

* Há diversos tipos de TS, vamos começar pelos *primitivos*;
    * *number*, *string* e *boolean*
* Todos estes são inseridos com *letras minúsculas*;
* E por mais óbvio que pareça, eles servem para números, textos e booleanos.

**Type annotarion e Type inference**

* Estes dois conceitos vão nos acompanhar em *todo o processo do desenvolvimento* de aplicações;
* **Annotation** é quando definimos o tipo de um dado manualmente;
* **Inference** é quando o TS indentifica e define o tipo de dados para nós;
* Futuramente entraremos em mais alguns detalhes sobre estes recursos;

**Gerando arquivo de configuração**

* O TS pode ser configurado de *muitas maneiras*;
* Mas para isso precisamos gerar o *arquivo de configuração*;
* Para gerar o arquivo utilizamos o comando: `tsc --init`;
* Apartir dele, podemos mudar várias opções em relação ao que o TS exevuta e também feito o compile.

**Compilar TS automaticamente**

* Para gerar a compilação automática podemos utilizar o comando: `tsc -w`;
* O *nosso output será gerado automaticamente sempre que salvarmos* o projeto;