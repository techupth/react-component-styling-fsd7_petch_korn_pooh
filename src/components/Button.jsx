// Start coding here
// use props and ternary to make condition that is it primary or secondary

export function Button(props) {
  return (
    <div>
      {props.type === "primary" ? (
        <button  style={{marginBottom: '20px' ,height: '50px', width: '170px', backgroundColor: '#074EE8', borderRadius: '3px', border: 'none', color: 'white',}}>Button</button>
      ) : (
        <button style={{marginBottom: '20px' ,height: '50px', width: '170px', backgroundColor: '#07A4E8', borderRadius: '3px', border: 'none', color: 'white',}}>Button</button>
      )}
    </div>
  );
}
