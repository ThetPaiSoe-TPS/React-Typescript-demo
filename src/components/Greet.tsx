
interface GreetProps {
  name: string;
  age?: number;
  isLoggedIn?: boolean;
}

const Greet: React.FC<GreetProps>= ({name, age= 32, isLoggedIn})=> {
    return (
        <div>
        <h2> { isLoggedIn? `Welcome ${name}`: `Welcome Guest` } </h2>
        </div>
    );
}

export default Greet;

