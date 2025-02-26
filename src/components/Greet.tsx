
interface GreetProps {
  name: string;
  age?: number;
}
// const Greet = (props: GreetProps) => {  
//     return (
//         <div>
//         <h2>Hello {props.name}! {props.age? ` is ${props.age} years old.`: ""}</h2>
//         </div>
//     );
//     }

const Greet: React.FC<GreetProps>= ({name, age= 32})=> {
    return (
        <div>
        <h2> {name} is {age} years old. </h2>
        </div>
    );
}

export default Greet;

