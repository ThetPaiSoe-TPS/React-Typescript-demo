type PersonProps= {
    name: {
        name1: string,
        name2: string
    }
}

const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.name1} {props.name.name2}
    </div>
  )
}

export default Person
