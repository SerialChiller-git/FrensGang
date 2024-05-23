function Button({children, action}){
    function handleClick(){
        alert(action);
    }
    
    return(
        <button onClick={handleClick}>
            {children}
        </button>
    );
}

export default function Buttons(){
    return(
        <div>
            <p1>pick your poison</p1>
            <br></br>
            <Button action='Yalulu'>
                Alu
            </Button>
            <Button action='sisisi'>
                Rice
            </Button>
        </div>
    );
}