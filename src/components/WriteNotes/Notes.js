import React, { useState, useEffect } from "react";

//styles
import "./Notes.css";

// images
import bgIimg from "../../assets/writeNotes/bg-img.png";
import senButton from "../../assets/writeNotes/sendButton.png"

function Notes() {

  const [allNotes, setAllNotes] = useState([])

  const [noteContent, setNoteContent] = useState({
    time: "",
    date: "",
    content: "",
  });

  const handleChange = (e) => {
    setNoteContent((prevVal) => {
      return {
        ...prevVal,
        content: e.target.value
      };
    });
  };

  useEffect(() => {
    // TIME
    const currDate = new Date();
    let hour = currDate.getHours();
    let min = currDate.getMinutes();
    let timeZone = hour < 12 ? "AM" : "PM";
    hour = hour % 12;
    if (hour === 0 && timeZone === "PM") {
      hour = 12;
    }
    hour = hour < 10 ? `0${hour}` : hour;
    min = min < 10 ? `0${min}` : min;
    const timeFormat = `${hour}:${min} ${timeZone}`;

    // DATE
    const monthNames = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];
    let dt = currDate.getDate();
    let month = currDate.getMonth(); // month-> 0 to 11
    let year = currDate.getFullYear();
    const dateFormat = `${dt} ${monthNames[month]} ${year}`;

    // SET DATE AND TIME
    setNoteContent((prevVal) => {
      return {
        ...prevVal,
        time: `${timeFormat}`,
        date : `${dateFormat}`
      };
    });
  }, [noteContent.content])

  const handleClick = () => {
    setAllNotes((prevVal) => {
      return [...prevVal, noteContent]
    })
  }

  return (
    <div className="write-notes-main">
      <div className="notes-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="55"
          viewBox="0 0 69 69"
          fill="none"
        >
          <circle cx="34.4503" cy="34.4503" r="33.5" fill={"blue"} />
          <text
            fontSize="1.5rem"
            x="50%"
            y="50%"
            text-anchor="middle"
            stroke="#fff"
            fill="#fff"
            dy=".3em"
          >
            AB
          </text>
        </svg>
        <h1>Cuvette Notes</h1>
      </div>
      <div className="notes-body">

        {allNotes.map((item) => {
          return (
            <div className="completed-note">
          <div className="date-time">
            <p>{item.time}</p>
            <p>{item.date}</p>
          </div>
          <div className="note-para">
            <p>{item.content}</p>
          </div>
        </div>
          )
        })}
      </div>
      <div className="write-note">
        <textarea
          placeholder="Enter your text here..........."
          onChange={handleChange}
        >
        </textarea>
        <div onClick={handleClick} className="send-button">
          <img src={senButton} alt="" />
        </div>
      </div>
    </div>

    // <div className="notes-bg-main">
    //   <div className="notes-bg-middle">
    //     <img src={bgIimg} alt="" />
    //     <h1>Poket Notes</h1>
    //     <p>
    //       Send and receive messages without keeping your phone online. Use
    //       Pocket Notes on up to 4 linked devices and 1 mobile phone
    //     </p>
    //   </div>
    //   <div className="notes-bg-footer">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="17"
    //       height="21"
    //       viewBox="0 0 17 21"
    //       fill="none"
    //     >
    //       <path
    //         d="M2.125 21C1.54063 21 1.04019 20.804 0.623689 20.412C0.207189 20.02 -0.000706529 19.5493 1.80391e-06 19V9C1.80391e-06 8.45 0.208252 7.979 0.624752 7.587C1.04125 7.195 1.54134 6.99933 2.125 7H3.1875V5C3.1875 3.61667 3.70565 2.43733 4.74194 1.462C5.77823 0.486667 7.03092 -0.000665984 8.5 6.8306e-07C9.96979 6.8306e-07 11.2228 0.487667 12.2591 1.463C13.2954 2.43833 13.8132 3.61733 13.8125 5V7H14.875C15.4594 7 15.9598 7.196 16.3763 7.588C16.7928 7.98 17.0007 8.45067 17 9V19C17 19.55 16.7918 20.021 16.3753 20.413C15.9588 20.805 15.4587 21.0007 14.875 21H2.125ZM8.5 16C9.08438 16 9.58482 15.804 10.0013 15.412C10.4178 15.02 10.6257 14.5493 10.625 14C10.625 13.45 10.4168 12.979 10.0003 12.587C9.58375 12.195 9.08367 11.9993 8.5 12C7.91563 12 7.41519 12.196 6.99869 12.588C6.58219 12.98 6.37429 13.4507 6.375 14C6.375 14.55 6.58325 15.021 6.99975 15.413C7.41625 15.805 7.91634 16.0007 8.5 16ZM5.3125 7H11.6875V5C11.6875 4.16667 11.3776 3.45833 10.7578 2.875C10.138 2.29167 9.38542 2 8.5 2C7.61459 2 6.86198 2.29167 6.24219 2.875C5.6224 3.45833 5.3125 4.16667 5.3125 5V7Z"
    //         fill="#292929"
    //       />
    //     </svg>
    //     &nbsp; &nbsp;
    //     <p>end-to-end encrypted</p>
    //   </div>
    // </div>
  );
}

export default Notes;
