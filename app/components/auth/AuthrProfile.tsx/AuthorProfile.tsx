import React from 'react';
import './AuthorProfile.css';
import { User } from '@/app/interfaces/user';

interface AuthorProfileProps {
  user: User;
}

const AuthorProfile: React.FC<AuthorProfileProps> = ({ user }) => {
  return (
    <div className="profile block">
      <img
        src={user.picture}
        className="w-10 h-10 rounded-full object-cover"
      />
      <a href="/" className="profile__names">
        <cite className="profile__username text-base">{user.username}</cite>
        <p className="profile__profesion text-base">{user.profesion}</p>
      </a>
    </div>
  );
}

export default AuthorProfile;