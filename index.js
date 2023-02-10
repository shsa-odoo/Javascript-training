const {Component , mount ,xml, useEnv, useState , reactive} = owl;

const khabri = () => {
    const environment = useEnv();
    return useState(environment.game);
}

class scoreCalculate{
    yourChoice = ""
    compChoic = ""
    yourScore = 0;
    compScore = 0;
    updateY = () => this.yourScore++;
    updateC = () => this.compScore++;
    getYscore = () => this.yourScore;
    getCscore = () => this.compScore;
}

const aunty = () => {
   return reactive(new scoreCalculate());
}

class Table extends Component {
    static template = xml`
    <table>
        <tr>
            <th><span class="names">You</span></th>
            <th><span class="names">Computer</span></th>
        </tr>
        <tr>
            <td><input class="inp-text" type="text" id="yourChoice" t-att-value="this.binod.yourChoice" /></td>
            <td><input class="inp-text" type="text" id="compChoice" t-att-value="this.binod.compChoice" /></td>
        </tr>
        <tr>
            <td><input class="inp-text" type="text" id="yourscore"  t-att-value="binod.getYscore()" /></td>
            <td><input class="inp-text" type="text" id="compscore"  t-att-value="binod.getCscore()" /></td>
        </tr>       
    </table>`;
    setup(){
        this.binod = khabri()
    }
    static props = ["state"]
}

class Message extends Component{
    static template = xml`
    <input class="inp-text" id="result" t-att-value="props.state.message"></input>
    <br/>`
    static props = ["state"]
}

class Button extends Component{

    static template = xml`
    <button id="btn" class="btn1" t-on-click="showValue" value="Rock">Rock</button>
    <button id="btn" class="btn2" t-on-click="showValue" value="Paper">Paper</button>
    <button id="btn" class="btn3" t-on-click="showValue" value="Scissor">Scissor</button>
    `
    compvalue = () =>{
        let i = Math.floor(Math.random() * 3)
        let value = ["Rock" ,"Paper", "Scissor"]
        return value[i]
    }
    showValue = (ev) =>{
        this.binod.yourChoice = ev.target.value
        this.binod.compChoice = this.compvalue()
        let yChoice = this.binod.yourChoice
        let cChoice = this.binod.compChoice
        let winner  = game(yChoice,cChoice) 
        if(winner === "you"){
            this.binod.updateY()
            this.props.state.message="You Win !!!"
        }else if(winner === "comp"){
            this.binod.updateC()
            this.props.state.message="Computer Wins !!!"
        }else{
            this.props.state.message="Draw !!!"
        }
    }
    static props = ["state"]
    setup(){
        this.binod = khabri()
    }
}

function game(y,c){
    let winner=""
    let op = ["Rock", "Paper", "Scissor"]
    if (c === "Rock"){
        y === op[0] ? winner = "draw" : y === op[1] ? winner ="you" : winner ="comp" 
    }else if(c === "Paper"){
        y === op[0] ? winner = "comp" : y === op[1] ? winner ="draw" : winner ="you" 
    }else{
        y === op[0] ? winner = "you" : y === op[1] ? winner ="comp" : winner ="draw" 
    }
    return winner
}

class Root extends Component {
    static template = xml`
    <center>
        <div class="container">
            <Table state="state" />
            <Message state="state" />
            <Button state="state" />
        </div>
    </center>`;

    state = useState({
        yourChoice:"",
        compChoice:"",
        message:""
    })

    static components = {Table , Message, Button};
}

const env = {
    game : aunty()
}

mount(Root, document.body,{dev: true,env});
