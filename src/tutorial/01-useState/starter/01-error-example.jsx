

const ErrorExample = () => {

  let count = 0;

  const clickHandler = () => {
    count++;
    console.log(count);
  }

  return (
    <>
    <div className="">{count}</div>
    <button className="btn" onClick={clickHandler}>Increase</button>
    </>
  )
};

export default ErrorExample;
