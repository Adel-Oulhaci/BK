import bac1 from "../assets/bac-1.png";
import bac2 from "../assets/bac-2.png";
import bac3 from "../assets/bac-4.png";
import bac5 from "../assets/bac-5.png";
import join from "../assets/join.png";
import slogin from "../assets/slogin.png";
import who from "../assets/who.png";
import where from "../assets/where.png";

export const formFields = [
  {
    id: "firstName",
    name: "firstn",
    label: "First name",
    placeholder: "Enter your first name",
    arabicLabel: "الاسم",
    type: "text",
    required: true,
  },
  {
    id: "lastName",
    name: "lastn",
    label: "Last name",
    placeholder: "Enter your last name",
    arabicLabel: "اللقب",
    type: "text",
    required: true,
  },
  {
    id: "email",
    name: "email",
    label: "Email Address",
    placeholder: "Enter your email",
    arabicLabel: "البريد الإلكتروني",
    type: "email",
    required: true,
  },
  {
    id: "mobile",
    name: "phone",
    label: "Mobile Number",
    placeholder: "Enter mobile number",
    arabicLabel: "رقم الهاتف",
    type: "number",
    required: true,
  },
  {
    id: "academicLevel",
    name: "academiclevel",
    label: "Academic Level",
    placeholder: "Enter your academic level",
    arabicLabel: "المستوى الدراسي",
    type: "text",
    required: true,
  },
  {
    id: "speciality",
    name: "speciality",
    label: "Speciality",
    placeholder: "Enter your speciality",
    arabicLabel: "التخصص",
    type: "text",
    required: true,
  },
  {
    id: "faculty",
    name: "faculty",
    label: "The Faculty you study at",
    placeholder: "Enter faculty",
    arabicLabel: "الكلية التي تدرس بها",
    type: "text",
    required: true,
  },

];
export const sliderContent = [bac1, bac2, bac3, bac5];
export const ABOUT = [  
  {
  id: "1",
  title: "What is",
  titleGreen: "BADRAT KHAYR Club?",
  description: "BADRAT KHAYR Club is a scientific and cultural club of a charitable nature that was established on October 17, 2019, includes members from different disciplines Since its inception, the club has been active in various fields where he carried out various voluntary activities for the benefit of various segments of society.",
  img: who
},
{
  id: "2",
  title: "CLUB",
  titleGreen: "Slogan",
  description: "A journey of a thousand miles begins with one step",
  img: slogin
},  {
  id: "3",
  title: "Where is",
  titleGreen: "the club?",
  description: "BADRAT KHAYR Club is located at the level of the Faculty of Exact Sciences, as it is located inside the faculty at the University of Djillali Liabes Sidi Bel Abbes.",
  img: where
},  {
  id: "4",
  title: "How do I join",
  titleGreen: "the club?",
  description: "With the beginning of each new year for the club, registrations for joining the club are opened, where new members are selected by evaluating them and knowing their level and skills required.",
  img: join
}
];
// details.jsx
import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa';

const events = [
  // Work-related events
  {
    type: 'work',
    date: '2011 - present',
    title: 'Creative Director',
    subtitle: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    icon: <FaBriefcase />,
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    contentStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    contentArrowStyle: { borderRight: '7px solid rgb(33, 150, 243)' }
  },
  {
    type: 'work',
    date: '2010 - 2011',
    title: 'Art Director',
    subtitle: 'San Francisco, CA',
    description: 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing',
    icon: <FaBriefcase />,
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
  },
  {
    type: 'work',
    date: '2008 - 2010',
    title: 'Web Designer',
    subtitle: 'Los Angeles, CA',
    description: 'User Experience, Visual Design',
    icon: <FaBriefcase />,
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
  },
  {
    type: 'work',
    date: '2006 - 2008',
    title: 'Web Designer',
    subtitle: 'San Francisco, CA',
    description: 'User Experience, Visual Design',
    icon: <FaBriefcase />,
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
  },
  // Education-related events
  {
    type: 'education',
    date: 'April 2013',
    title: 'Content Marketing for Web, Mobile and Social Media',
    subtitle: 'Online Course',
    description: 'Strategy, Social Media',
    icon: <FaGraduationCap />,
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
  },
  {
    type: 'education',
    date: 'November 2012',
    title: 'Agile Development Scrum Master',
    subtitle: 'Certification',
    description: 'Creative Direction, User Experience, Visual Design',
    icon: <FaGraduationCap />,
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
  },
  {
    type: 'education',
    date: '2002 - 2006',
    title: 'Bachelor of Science in Interactive Digital Media Visual Imaging',
    subtitle: 'Bachelor Degree',
    description: 'Creative Direction, Visual Design',
    icon: <FaGraduationCap />,
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
  },
  // {
  //   type: 'star',
  //   icon: <FaStar />,
  //   iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
  // }
];

export default events;
