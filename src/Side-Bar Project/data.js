import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook className='w-8 h-8'/>,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter className='w-8 h-8'/>,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin className='w-8 h-8'/>,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance className='w-8 h-8'/>,
  },
  {
    id: 5,
    url: 'https://www.twitter.com',
    icon: <FaSketch className='w-8 h-8'/>,
  },
];