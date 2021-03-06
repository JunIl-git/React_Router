import React from 'react';

const Profile = ({match}) => {
    const data = {
        junil: {
            name: '신준일',
            description: "리액트를 좋아하는 개발자"
        },
        gildong: {
            name: '홍길동',
            description: "고전소설 홍길동전의 주인공"
        }
    }
    const {username} = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>;
    }

    return (
        <div>
            <h3>{username}</h3>
            <p>{profile.description}({profile.name})</p>
        </div>
    )
}

export default Profile;