
<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Atividade_final_do_mdulo_Back_End_I_0"></a>💻Atividade final do módulo Back End I💻</h1>
<h2 class="code-line" data-line-start=1 data-line-end=2 ><a id="_Construo_de_API_para_Login_e_CRUD_de_recados__1"></a><em>Construção de API para Login e CRUD de recados</em></h2>
<p class="has-line-data" data-line-start="5" data-line-end="6">O desenvolvimento da API utilizou como base o Express.js, framework utilizado no Node.js. Esse projeto teve como objetivo a simulação de um servidor de CRUD de recados.</p>
<hr>
<h2 class="code-line" data-line-start=7 data-line-end=8 ><a id="Caractersticas_7"></a>Características</h2>
<ul>
<li class="has-line-data" data-line-start="9" data-line-end="10">Cadastro de usuário</li>
<li class="has-line-data" data-line-start="10" data-line-end="11">Login</li>
<li class="has-line-data" data-line-start="11" data-line-end="12">Cadastro de recados</li>
<li class="has-line-data" data-line-start="12" data-line-end="13">Leitura de recados</li>
<li class="has-line-data" data-line-start="13" data-line-end="14">Edição de recados</li>
<li class="has-line-data" data-line-start="14" data-line-end="15">Exclusão de recados</li>
</ul>
<hr>
<h2 class="code-line" data-line-start=16 data-line-end=17 ><a id="Instalao_16"></a>Instalação</h2>
<p class="has-line-data" data-line-start="18" data-line-end="19">Para rodar o servidor em sua máquina é necessário a instalação do Node.js e Express.js antes de tudo.</p>
<hr>
<h2 class="code-line" data-line-start=20 data-line-end=21 ><a id="Rodando_o_servidor_pela_porta_localhost3333_20"></a>Rodando o servidor pela porta localhost:3333</h2>
<ol>
<li class="has-line-data" data-line-start="21" data-line-end="22">Clone este repositório na sua IDE</li>
<li class="has-line-data" data-line-start="22" data-line-end="23">Instale as dependências pelo terminal utilizando o comando:</li>
</ol>
<pre><code class="has-line-data" data-line-start="24" data-line-end="26" class="language-sh">yarn
</code></pre>
<ol start="3">
<li class="has-line-data" data-line-start="26" data-line-end="27">Inicie o servidor pelo terminal utilizando o comando:</li>
</ol>
<pre><code class="has-line-data" data-line-start="28" data-line-end="30" class="language-sh">yarn dev
</code></pre>
<hr>
<h2 class="code-line" data-line-start=31 data-line-end=32 ><a id="Rodando_o_servidor_pelo_Render_31"></a>Rodando o servidor pelo Render</h2>
<p class="has-line-data" data-line-start="32" data-line-end="34">Para utilizar a API com servidor rodando pelo Render utilize o seguinte link:<br>
<a href="https://modulo-back-end-1-api.onrender.com">https://modulo-back-end-1-api.onrender.com</a></p>
<hr>
<h2 class="code-line" data-line-start=35 data-line-end=36 ><a id="Obtendo_as_rotas_35"></a>Obtendo as rotas</h2>
<p class="has-line-data" data-line-start="37" data-line-end="38">POST: <a href="https://modulo-back-end-1-api.onrender.com/signup/crypto/">https://modulo-back-end-1-api.onrender.com/signup/crypto/</a> para criar usuários. Devem ser inseridas as informações na aba Body:</p>
<pre><code>&quot;id&quot;: 1,
&quot;name&quot;: &quot;exempo&quot;,
&quot;email&quot;: &quot;exemplo@gmail.com&quot;,
&quot;password&quot;: &quot;12345&quot;
</code></pre>
<p class="has-line-data" data-line-start="45" data-line-end="46">GET: <a href="https://modulo-back-end-1-api.onrender.com/admins/">https://modulo-back-end-1-api.onrender.com/admins/</a> para listar usuários;</p>
<p class="has-line-data" data-line-start="47" data-line-end="48">POST: <a href="https://modulo-back-end-1-api.onrender.com/login">https://modulo-back-end-1-api.onrender.com/login</a> para realizar o login. Devem ser inseridas as credenciais na aba Body:</p>
<pre><code>&quot;email&quot;: &quot;exemplo@gmail.com&quot;,
&quot;password&quot;: &quot;12345&quot; 
</code></pre>
<p class="has-line-data" data-line-start="52" data-line-end="53">POST: <a href="https://modulo-back-end-1-api.onrender.com/messages/:userEmail">https://modulo-back-end-1-api.onrender.com/messages/:userEmail</a> para criar recados. Devem ser inseridas as informações na aba Body:</p>
<pre><code>&quot;id&quot;: 1,
&quot;titulo&quot;: &quot;exempo&quot;,
&quot;descricao&quot;: &quot;exempo&quot;
</code></pre>
<p class="has-line-data" data-line-start="58" data-line-end="59">E, inserir Email no campo userMail presente na aba Params.</p>
<p class="has-line-data" data-line-start="60" data-line-end="61">GET: <a href="https://modulo-back-end-1-api.onrender.com/messages">https://modulo-back-end-1-api.onrender.com/messages</a> para ler os recados;</p>
<p class="has-line-data" data-line-start="62" data-line-end="63">PUT: <a href="https://modulo-back-end-1-api.onrender.com/messages/:messageId">https://modulo-back-end-1-api.onrender.com/messages/:messageId</a> para atualizar os recados. Deve ser inserido o id do recado no campo messageId na aba Params e alteração do recado na aba Body como exemplo abaixo. Somente poderá ser alterado o título e a descrição do recado:</p>
<pre><code>&quot;titulo&quot;: &quot;Recado&quot;,
&quot;descricao&quot;: &quot;testando&quot;
</code></pre>
<p class="has-line-data" data-line-start="67" data-line-end="68">DELETE: <a href="https://modulo-back-end-1-api.onrender.com/messages/:messageId">https://modulo-back-end-1-api.onrender.com/messages/:messageId</a> para deletar um recado. Insira o id do recado no campo messageId na aba Params.</p>
<hr>
<p class="has-line-data" data-line-start="69" data-line-end="70">Todos os exemplos acima foram realizados utilizando o Postman.</p>
