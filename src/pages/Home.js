import React from 'react'
import { AiFillGithub, AiOutlineMail, AiFillLinkedin, AiFillHtml5, AiOutlineConsoleSql } from "react-icons/ai";
import { DiCss3, DiJavascript, DiPython, DiPhp } from "react-icons/di";
import { FaPepperHot, FaJava } from "react-icons/fa"
import { IoLogoFirebase } from "react-icons/io5"
import { RiReactjsLine } from "react-icons/ri"
import { TbBrandKotlin } from "react-icons/tb"
import Card from '../components/Card'
import '../styles/Home.css';
// rfec

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, Thanks for comming, my name is Kevyn</h2>
        <div className='prompt'>
          <p>A software developer who likes coding and solver problems (and a friki in his free time)</p>
          <AiFillGithub />
          <AiFillLinkedin />
          <AiOutlineMail />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-end</h2>
            <span>
              <Card content='html' icono={<AiFillHtml5 />} color='#e34c26' />,
              <Card content='Css' icono={<DiCss3 />} color='#2965f1' />,
              <Card content='Javascript' icono={<DiJavascript />} color='#f0db4f' />,
              <Card content='React' icono={<RiReactjsLine />} color='#61DBFB' />
            </span>
          </li>
          <li className='item'>
            <h2>Back-end</h2>
            <span>
              <Card content='Flask' icono={<FaPepperHot />} color='gray' />,
              <Card content='SQL' icono={<AiOutlineConsoleSql />} color='#00758F' />,
              <Card content='Firebase' icono={<IoLogoFirebase />} color='#FFA000' />
            </span>
          </li>
          <li className='item'>
            <h2>Languajes</h2>
            <span>
              <Card content='Java' icono={<FaJava />} color='#FAB9A8' />,
              <Card content='Python' icono={<DiPython />} color='#4B8BBE' />
              <Card content='PHP' icono={<DiPhp />} color='#787CB5' />,
              <Card content='Kotlin' icono={<TbBrandKotlin />} color='#3DDC84' />
            </span>
          </li>
          <li className='item'>
            <h2>Tools</h2>
            <span>Git, Github, Figma, Lucidchart</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home