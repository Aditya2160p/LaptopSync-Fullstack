// import { useState } from "react";
// import "./contact.css";

// const Contact = (props) => {
//     const [focused, setFocused] = useState(false);
//     const { label, errorMessage, onChange, id, ...inputProps } = props;

//     const handleFocus = (e) => {
//         setFocused(true);
//     };

//     return (
//         <div className="formInput">
//             <label>{label}</label>
//             <input
//                 {...inputProps}
//                 onChange={onChange}
//                 onBlur={handleFocus}
//                 onFocus={() =>
//                     inputProps.name === "confirmPassword" && setFocused(true)
//                 }
//                 focused={focused.toString()}
//             />
//             <span>{errorMessage}</span>
//         </div>
//     );
// };

// export default Contact;