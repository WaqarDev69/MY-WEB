import React from "react";
import TutorialCard from "../Tutorial/Tutorial-item/TutorialCard";
import PythonIcon from "../../Assets/PythonIcon.webp";
import cIcon from "../../Assets/cIcon.webp";
import javaIcon from "../../Assets/javaIcon.webp";
import htmlIcon from "../../Assets/htmlIcon.webp";
import cssIcon from "../../Assets/cssIcon.webp";
import jsIcon from "../../Assets/jsIcon.webp";

import android from "../../Assets/android.webp";
import dsa from "../../Assets/dsa.webp";
import flask from "../../Assets/flask.webp";
import mysql from "../../Assets/mysql.webp";
import django from "../../Assets/django.webp";

function Notes() {
  const notes = [
    {
      photo: PythonIcon,
      title: "Pyhton Notes",
      btnText: "PDF Notes",
      extraBtnText: "Chapterwise Notes",
    },
    {
      photo: cIcon,
      title: "C Notes",
      btnText: "PDF Notes",
      extraBtnText: "Chapterwise Notes",
    },
    {
      photo: android,
      title: "Android Notes",
      btnText: "PDF Notes",
      extraBtnText: "Chapterwise Notes",
    },
    {
      photo: javaIcon,
      title: "Java Notes",
      btnText: "PDF Notes",
      message: "Download CheatSheet Here",
      extraBtnText: "Chapterwise Notes",
    },
    {
      photo: htmlIcon,
      title: "HTML Notes",
      btnText: "PDF Notes",
      extraBtnText: "Chapterwise Notes",
    },
    {
      photo: cssIcon,
      title: "CSS Notes",
      btnText: "PDF Notes",
      extraBtnText: "Chapterwise Notes",
    },
    {
      photo: dsa,
      title: "DSA Notes",
      btnText: "PDF Notes",
      extraBtnText: "Chapterwise Notes",
    },
    {
      photo: jsIcon,
      title: "JS Notes",
      btnText: "PDF Notes",
      extraBtnText: "Chapterwise Notes",
    },
  ];
  const cheatSheet = [
    {
      photo: PythonIcon,
      title: "Pyhton CheatSheet",
      message: "Download Cheatsheet Here",
      btnText: "Download",
    },
    {
      photo: cIcon,
      title: "C CheatSheet",
      message: "Download Cheatsheet Here",
      btnText: "Download",
    },
    {
      photo: android,
      title: "Android CheatSheet",
      message: "Download Cheatsheet Here",
      btnText: "Download",
    },
    {
      photo: javaIcon,
      title: "Java CheatSheet",
      message: "Download Cheatsheet Here",
      btnText: "Download",
    },
    {
      photo: htmlIcon,
      title: "HTML CheatSheet",
      message: "Download Cheatsheet Here",
      btnText: "Download",
    },
    {
      photo: cssIcon,
      title: "CSS CheatSheet",
      message: "Download Cheatsheet Here",
      btnText: "Download",
    },
    {
      photo: flask,
      title: "Flask CheatSheet",
      message: "Download Cheatsheet Here",
      btnText: "Download",
    },
    {
      photo: jsIcon,
      title: "JS CheatSheet",
      message: "Download Cheatsheet Here",
      btnText: "Download",
    },
    {
      photo: mysql,
      title: "MySQL CheatSheet",
      message: "Download Cheatsheet Here",
      btnText: "Download",
    },
    {
      photo: django,
      title: "Django CheatSheet",
      message: "Download Cheatsheet Here",
      btnText: "Download",
    },
  ];

  return (
    <div className="w-full bg-dark-grey h-auto flex justify-center flex-wrap gap-6 font-poppin ">
      <div className="text-3xl block text-center w-full text-slate-200 font-semibold pt-8">
        <h1>Download Notes by CodeWithHarry</h1>
      </div>

      {notes.map((item, i) => (
        <TutorialCard
          key={i}
          photo={item.photo}
          title={item.title}
          btnText={item.btnText}
          extraBtnText={item.extraBtnText}
        />
      ))}
      <div className="text-3xl block text-center w-full text-slate-200 font-semibold pt-8">
        <h1>Download Cheatsheets by CodeWithHarry</h1>
      </div>

      {cheatSheet.map((item, i) => (
        <TutorialCard
          key={i}
          photo={item.photo}
          title={item.title}
          btnText={item.btnText}
          message={item.message}
        />
      ))}
    </div>
  );
}

export default Notes;
