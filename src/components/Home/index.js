import { useState } from "react";
import { FcSimCardChip } from "react-icons/fc";
import { FcPositiveDynamic } from "react-icons/fc";
import { SiGmail } from "react-icons/si";
import smileImage from "../../assets/smile.png"
import hardWork from '../../assets/hard-work.png'
import skilled from '../../assets/flag.png'
import college from '../../assets/school.png'
import Header from "../Header"

const tabsList = [
    {tabId: 'SKILLS', displayText: 'Skills'},
    {tabId: 'EDUCATION', displayText: 'Education'},
]

const AboutList = [
    {
        id:1,
        category: 'SKILLS',
        heading: "Front-End Development",
        technologys: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Redux', 'Bootstrap', 'Tailwind CSS', 'Material UI', 'Styled Components']
    },
    {
        id:2,
        category: 'SKILLS',
        heading: "Back-End Development",
        technologys: ['Node JS', 'Express JS', 'Mongo DB', 'SQLite'],
    },
    {
        id:3,
        category: 'SKILLS',
        heading: "Programming Language",
        technologys: ['Python', 'Javascript', 'C++'],
    },
    {
        id:4,
        category: 'EDUCATION',
        heading: "Present",
        technologys: ['CCBP Intensive 4.0 Tech'],
    },
    {
        id:5,
        category: 'EDUCATION',
        heading: "2024",
        technologys: ['B.Tech in in Electronics and Communication Engineering at Reva University'],
    },
    {
        id:6,
        category: 'EDUCATION',
        heading: "2020",
        technologys: ['Intermediate in MPC at Narayana Junior College'],
    },
]

const Home = () => {
    const [activeTabId, changeTabId] = useState(tabsList[0].tabId)
    return (
        <div className="h-full w-screen bg-stone-900">
            <Header />
            <div className="bg-stone-900 text-white text-lg font-medium px-10 py-1">
                <div>
                    <div className="">
                        <h1 className="text-5xl pt-8">Hi,<br className="md:hidden"/> Ganga Mahesh here! <img className="inline w-12" src={smileImage} alt="Smile" /></h1>
                        <p className="pt-8">I'am a skilled <img className="inline w-6" src={skilled} alt="skilled" /> full-stack web developer with expertise in technologies like ReactJS, NodeJS, Express, and MongoDB.</p>
                        <p className="pt-8">Currently pursuing a Bachelor's degree in Electronics and Communication Engineering <FcSimCardChip className="inline text-3xl" /> from Reva University <img className="inline w-6" src={college} alt="college" /></p>
                        <p className="pt-8">Being a full stack developer means never having to say <span className="italic">'That's not my job'</span> <FcPositiveDynamic className="inline text-2xl"/></p>
                        <p className="font-mono pt-8">Keep calm and carry on <img className="inline w-8" src={hardWork} alt="hardWork" /></p>
                    </div>
                    
                    <div className="w-full flex items-center justify-center">
                        <img className="h-48 " src={hardWork} alt="Ganga Mahesh" />
                    </div>
                </div>
                <div className="w-full flex justify-center items-center mt-8 mb-5">
                    <a href="https://drive.google.com/file/d/16gxuN8YbZm2AXQq89E1elRBTnW6LAnQL/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <button className="bg-white w-28 outline-none border-none text-black py-2 px-4 rounded-full mr-2">Resume</button>
                    </a>
                    <a href="mailto:nijikalgangamahesh@gmail.com">
                        <button className="bg-white w-38 outline-none border-none text-black py-2 px-4 rounded-full ml-2">Email me <SiGmail className="inline text-red-700"/></button>
                    </a>
                </div>
                
            </div>
            <div className="bg-blue-200 px-10 py-3">
                <div className="">
                    <h1 className="pt-5 text-2xl font-bold">About Me</h1>
                    <p className="text-lg pt-4">As a passionate full-stack web developer, I thrive on creating innovative and dynamic web applications. My journey began with pursuing a Bachelor's degree in Electronics and Communication Engineering at Reva University, where I cultivated a strong foundation in technology. However, it was through intensive industry-focused training programs like <span className="font-mono">  CCBP Intensive 4.0 Tech </span> that I truly honed my skills in full-stack web development.</p>
                    <p className="pt-6">With a diverse skill set spanning <span className="font-bold">HTML, CSS, JavaScript, ReactJS, Node.js, Express, MongoDB, and more, </span> I have developed a deep understanding of both front-end and back-end technologies. This versatility has enabled me to design and implement complete web solutions from start to finish.</p>
                    <p className="pt-6">Let's design experiences that live, breathe, and make a difference.</p>
                    
                    <ul className="w-40 flex justify-between items-center cursor-pointer pt-4 text-xl font-bold">
                        {tabsList.map(eachTab => (
                            activeTabId === eachTab.tabId ? (
                            <li className="border-b-2 border-b-red-700 rounded-md ease-in-out duration-200" key={eachTab.tabId} onClick={() => changeTabId(eachTab.tabId)}>
                                {eachTab.displayText}
                            </li>
                            ) : (
                            <li className="text-slate-600" key={eachTab.tabId} onClick={() => changeTabId(eachTab.tabId)}>
                                {eachTab.displayText}
                            </li>
                            )
                        ))}
                    </ul>

                    <ul className="pt-4">
                        {AboutList.filter(eachTab => activeTabId === eachTab.category).map(eachTab => (
                            <li key={eachTab.id}>
                                <p className="py-2 text-lg font-bold underline decoration-red-500">{eachTab.heading}</p>
                                <ul className="w-full flex flex-wrap">
                                    {eachTab.technologys.map(eachLan => (
                                    <li className="ml-4 text-md p-1 font-mono" key={eachLan}>{eachLan}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>


                </div>
                <div className="flex items-center justify-center">
                    <img className="h-48" src={hardWork} alt="Ganga Mahesh" />
                </div>
            </div>
        </div>
    )
}

export default Home