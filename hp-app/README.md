## TODO : 
Adicionar o fazedor de gráficos e estastistica  https://www.npmjs.com/package/react-charts
npm i @react-hook/window-size
npm i react-charts
npm i react-resizable (deprecated)
usando o reresizable instead 
npm install --save re-resizable 

npm i react-native
npm i request --save-dev mocha
para rodar todos os testes com o padrao *_test.js dentro da pasta src

dentro do terminal do vscode
https://chocolatey.org/courses/installation/installing?method=installing-chocolatey?quiz=true#powershell

https://chocolatey.org/packages/yarn#virus


module.exports = Palavras;


{
 "presets": [ "@babel/preset-env" ]
}



Colocar um carroussel em CSS com todos os certificados na área de programação 
Adicionar as informações do canal no youtube usando a api do youtube 
Animar o site 
colocar o desempenho do DIO e as horas de estudo 

## Olhar : 
- repositório : 
- Awesome-react 
- Sites estáticos : Gatsby 
- server side rendering - Next.js 
- Animações : react-spring 
- forms : formik 
- gerenciamento de estados : redux, mobs , flux , recoil , xstate 
- mobile : react native 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
- adicionei o arquivo _redirect em public para que o site consiga redirecionar páginas que não passam pelo root 
- npm install netlify-cli -g
- Set-ExecutionPolicy
- netlify deploy
- npm run build 
- netlify deploy --prod
- npm run build 

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# React HP 
- Single page App (SPA) 

- https://pt-br.reactjs.org/docs/create-a-new-react-app.html#create-react-app
- npm uninstall -g create-react-ap
- npm cache clean --force
- npm config edit 
- mudar ; cache=C:\Users\Luiz do Brasil\AppData\Roaming\npm-cache
- ; cache=C:\Users\LUIZDO~1\AppData\Roaming\npm-cache
- npm config set cache "C:\Users\LUIZDO~1\AppData\Roaming\npm-cache" --global
- npx create-react-app hp-app
- Then open http://localhost:3000/ to see your app.

- When you’re ready to deploy to production, create a minified bundle with npm run build.

Selecting a template
You can now optionally start a new app from a template by appending --template [template-name] to the creation command.

npIf you don't select a template, we'll create your project with our base template.

Templates are always named in the format cra-template-[template-name], however you only need to provide the [template-name] to the creation command.

npx create-react-app my-app --template [template-name]
You can find a list of available templates by searching for "cra-template-*" on npm.

Our Custom Templates documentation describes how you can build your own template.

#Creating a TypeScript app
You can start a new TypeScript app using templates. To use our provided TypeScript template, append --template typescript to the creation command.

npx create-react-app my-app --template typescript
If you already have a project and would like to add TypeScript, see our Adding TypeScript documentation.

#Selecting a package manager
When you create a new app, the CLI will use Yarn to install dependencies (when available). If you have Yarn installed, but would prefer to use npm, you can append --use-npm to the creation command. For example:

npx create-react-app my-app --use-npm

npm install --save react-router-dom

## REfs

Em um fluxo de dados típico do React, as props são a única forma de componentes pais interagirem com seus filhos. Para modificar um componente filho, você terá que re-renderizá-lo com as novas props. Porém, existem alguns casos onde você precisa modificar imperativamente um componente filho fora do fluxo típico de dados. O componente filho a ser modificado poderia ser uma instância de um componente React, ou ele poderia ser um elemento DOM. Para ambos os casos, o React fornece uma saída.



Quando Usar Refs
Existem algumas boas finalidades para o uso de refs:

Gerenciamento de foco, seleção de texto, ou reprodução de mídia.
Engatilhar animações imperativas.
Integração com bibliotecas DOM de terceiros.
Evite usar refs para qualquer coisa que possa ser feita de forma declarativa.

Por exemplo, ao invés de expôr os métodos open() e close() em um componente Dialog, passe a propriedade isOpen para ele.

Não Utilize Refs Excessivamente
Sua primeira atitude talvez seja usar refs para “fazer as coisas acontecerem” no seu app. Se este é o caso, tire um momento para pensar de forma mais crítica sobre onde o estado deveria ser mantido na hierarquia dos seus componentes. Frequentemente, isso torna claro que o lugar apropriado para “manter” o estado é no nível mais alto da hierarquia. Veja o guia Subindo o Estado para ver exemplos.

Nota

Os exemplos abaixo foram atualizados para usar a API React.createRef() introduzida no React 16.3. Se você está utilizando uma versão anterior do React, nós recomendamos usar refs com callbacks.

Criando Refs
Refs são criadas usando React.createRef() e anexadas aos elementos React por meio do atributo ref. As Refs são comumente atribuídas a uma propriedade de instância quando um componente é construído para que então elas possam ser referenciadas por todo o componente.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
Acessando Refs
Quando uma ref é passada para um elemento no render, uma referência para o nó se torna acessível no atributo current da ref.

const node = this.myRef.current;
O valor da ref difere dependendo do tipo do nó:

Quando o atributo ref é usado em um elemento HTML, a ref criada no construtor React.createRef() recebe um elemento DOM subjacente como a propriedade current.
Quando o atributo ref é usado em um componente de classe, o objeto ref recebe uma instância montada de um componente em sua propriedade current.
Você não pode usar o atributo ref em um componente funcional, já que eles não possuem instâncias.
Os exemplos abaixo demonstram as diferenças.

Adicionando uma Ref a um Elemento DOM
Este código usa uma ref para armazenar uma referência a um nó DOM:

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // Cria uma ref para armazenar o elemento textInput do DOM
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitamente foca o input de texto usando a API do DOM diretamente
    // Nota: nós estamos acessando o campo "current" para obter um nó do DOM.
    this.textInput.current.focus();
  }

  render() {
    // Diz ao React que nós queremos associar o atributo ref do <input>
    // com o `textInput` que nós criamos no construtor.
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
O React irá atribuir a propriedade current ao elemento DOM quando o componente for montado, e atribuirá null de volta quando ele for desmontado. As atualizações da ref acontecem antes dos métodos de lifecycle componentDidMount ou componentDidUpdate.

Adicionando uma Ref a um Componente de Classe
Se nós quisermos envolver o CustomTextInput acima para para simulá-lo sendo clicado imediatamente após a montagem, nós poderiamos usar uma ref para obter acesso ao input customizado e chamar o seu método focusTextInput manualmente.

class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}
Note que isso só funciona se o CustomTextInput é declarado como uma Classe:

class CustomTextInput extends React.Component {
  // ...
}
Refs e Componentes Funcionais
Por padrão, você não deve usar um atributo ref em componentes funcionais, pois eles não possuem instâncias:

function MyFunctionComponent() {
  return <input />;
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  render() {
    // Isto *não* vai funcionar!
    return (
      <MyFunctionComponent ref={this.textInput} />
    );
  }
}
Se você quer permitir que pessoas passem a ref para seu componente de função, você pode usar forwardRef (possivelmente em conjunto com useImperativeHandle) ou você pode converter o componente para classe.

Você pode, entretanto, usar um atributo ref dentro de um componente funcional contanto que você referencie um elemento DOM ou um componente de classe:

function CustomTextInput(props) {
  // textInput deve ser declarado aqui para então a ref poder referenciá-lo.
  const textInput = useRef(null);

  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={textInput} />
      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );
}
Expondo Refs do DOM para Componentes Pais
Em raros casos, você pode querer ter acesso ao nó DOM do filho de um componente pai. Isso geralmente não é recomendado, pois quebra o encapsulamento do componente, mas isso pode ser ocasionalmente útil para engatilhar foco ou medir o tamanho ou a posição de um nó DOM filho.

Enquanto você poderia adicionar uma ref a um componente filho, esta não é a solução ideal, pois você obteria apenas uma instância do componente ao invés de um nó DOM. Adicionalmente, isto não funcionaria com componentes funcionais.

Se você usa o React 16.3 ou acima, nós recomendamos usar o encaminhamento de refs para estes casos. Encaminhamento de Refs permitem que os componentes optem por expôr a referência de qualquer componente filho como próprias. Você pode encontrar um exemplo detalhado de como expôr nó DOM de um componente filho para um componente pai na documentação de encaminhamento de ref.

Se você usa React 16.2 ou abaixo, ou se você precisa de mais flexibilidade do que a fornecida pelo encaminhamento de ref, você pode usar esta abordagem alternativa e explicitamente passar uma ref como uma prop diferentemente nomeada.

Quando possível, desaconcelhamos a exposição de nós DOM, mas pode ser uma saída útil. Note que esta abordagem requer que você adicione algum código ao componente filho. Se você não tem controle absoluto sob a implementação do componente filho, a sua última opção é usar o findDOMNode(), mas isto é desencorajado e descontinuado no StrictMode.

Refs com Callback
O React também dá suporte a outra forma de atribuír refs chamado “refs com callback”, que dá um controle mais granular sob quando refs são atribuídas e desatribuídas.

Em vez de passar um atributo ref criado pelo createRef(), você passa uma função. A função recebe uma instância de um componente React ou um elemento DOM HTML como seu argumento, que pode ser armazenado e acessado em outro lugar.

O exemplo abaixo implementa um padrão comum: utilizar ref com callback para armazenar uma referência para um nó DOM em uma propriedade de instância.

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      // Foca o input de texto usando a API DOM diretamente
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    // auto-foca o input na montagem
    this.focusTextInput();
  }

  render() {
    // Utiliza a `ref` com callback para armazenar uma referência ao elemento DOM
    // do input de texto em um campo de instância (por exemplo, this.textInput)
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
O React vai chamar o callback da ref com o elemento DOM quando o componente for montado, e chamá-lo com null quando ele for desmontado. Refs são garantidos de estarem atualizados antes do componentDidMount ou componentDidUpdate serem disparados.

Você pode passar refs com callback entre componentes, assim como você faz com refs de objetos que foram criados com React.createRef().

function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  render() {
    return (
      <CustomTextInput
        inputRef={el => this.inputElement = el}
      />
    );
  }
}
No exemplo acima, Parent passa sua ref com callback como uma propriedade inputRef do CustomTextInput, e o CustomTextInput passa a mesma função como um atributo ref especial para o <input>. Como resultado, this.inputElement no Parent será atribuído para o nó DOM correspondente ao elemento <input> no CustomTextInput.

API Legada: Refs String
Se você trabalhou com React antes, você deve estar familiarizado com uma antiga API onde o atributo ref é uma string, como "textInput", e o nó DOM é acessado como this.refs.textInput. Nós não aconselhamos isto, pois refs string tem alguns problemas, são consideradas abandonadas, e provávelmente serão removidas em um dos futuros releases.

Nota

Se você está usando this.refs.textInput para acessar refs, nós recomendamos ao invés disso utilizar o padrão de callback ou a API createRef.

Ressalvas com Refs com callback
Se a ref com callback é definida como uma função inline, ela será chamada duas vezes durante as atualizações, primeiro com null e então novamente com o elemento DOM. Isto porquê uma nova instância da função é criada com cada renderização, então o React precisa limpar a referência antiga e atribuir a nova. Você pode evitar isso definindo a ref com callback como um método ligado a classe, mas note que isto não deveria importar na maioria dos casos.

## DEfault imports 

We suggest that you stick to using default imports and exports when a module only exports a single thing (for example, a component). That’s what you get when you use export default Button and import Button from './Button'.


Aviso em relação ao uso do depreciado findDOMNode
O React costumava suportar findDOMNode para procurar na árvore por um elemento DOM dada uma instância de classe. Normalmente, você não precisa disso, já que você pode anexar uma ref diretamente em um elemento DOM.

findDOMNode também pode ser usado em componentes de classe, mas isso estava quebrando níveis de abstração ao permitir que um componente pai demandasse que certos componentes filhos fossem renderizados. Ele cria um risco de refatoração em que você não pode alterar os detalhes de implementação de um componente por que um componente pai pode estar alcançando o seu elemento DOM. findDOMNode somente retorna o primeiro filho, mas com o uso de fragmentos, é possível que um componente renderize múltiplos elementos DOM. findDOMNode é uma API de única leitura. Só enviava resposta quando você chamava. Se um componente filho renderiza um elemento diferente, não há como lidar com essa mudança. Portando, findDOMNode só funcionava se os componentes sempre retornassem um único elemento DOM que nunca muda.

Você pode deixar isso explícito se passar uma ref para o seu componente customizado, passando-a através do DOM usando encaminhamento de ref.

Você também pode adicionar um elemento DOM que envolve o seu componente e anexar uma ref diretamente a ele.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
  }
  render() {
    return <div ref={this.wrapper}>{this.props.children}</div>;
  }
}
Nota:

Em CSS, o atributo display: contents pode ser usado se você não quer que o elemento faça parte do layout.

