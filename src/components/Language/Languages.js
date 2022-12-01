import React from 'react';
import './Languages.css';

const Languages = () => {
  const data = [
    {
      title : "Languages",
      contents : ["Python", "NodeJS", "SQL", "JavaScript"]
    },
    {
      title : "Software",
      contents : ["VSCode", "NodeBook", "SQL Server", "Eclipse"]
    },
    {
      title : "Database",
      contents : ["SQL Server", "MySQL", "MongoDB", "AWS"]
    },
  ]
  return (
   <section id="languages" data-aos="fade">
    {
      data.map(item => (
        <div className="languages-box" key={item.title}>
            <h3>{item.title}</h3>
            <ul>
              {
                item.contents.map(content => (
                  <li key={content}>{content}</li>
                ))
              }
            </ul>
        </div>
      ))
    }
   </section>
  )
}

export default Languages