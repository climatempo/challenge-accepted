// Reference: https://codesandbox.io/s/switch-component-with-tailwind-react-sbyxg?from-embed=&file=/src/App.js:289-745

function SwitchButton({ toggle, setToggle }) {
  const toggleClass = ' transform translate-x-5';
  return (
    <>
      <div
        className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
        onClick={() => {
          setToggle(toggle === 'C' ? 'F': 'C');
        }}
      >
        <div
          className={
            'bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out' +
            (toggle === 'C' ? null : toggleClass)
          }
        ></div>
      </div>
    </>
  );
}

export default SwitchButton;
